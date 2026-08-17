const encoder = new TextEncoder()

export type JpegPage = {
  jpeg: Uint8Array
  width: number
  height: number
}

function concat(parts: Uint8Array[]): Uint8Array {
  const total = parts.reduce((sum, part) => sum + part.length, 0)
  const out = new Uint8Array(total)
  let offset = 0
  for (const part of parts) {
    out.set(part, offset)
    offset += part.length
  }
  return out
}

function padOffset(offset: number): string {
  return offset.toString().padStart(10, '0')
}

/** Embed one or more JPEG pages in a single-page-size PDF. */
export function jpegPagesToPdf(
  pages: readonly JpegPage[],
  pageWidthPt: number,
  pageHeightPt: number,
): Uint8Array {
  if (pages.length === 0) {
    throw new Error('PDF needs at least one page')
  }

  const parts: Uint8Array[] = []
  let size = 0
  const push = (data: string | Uint8Array) => {
    const bytes = typeof data === 'string' ? encoder.encode(data) : data
    parts.push(bytes)
    size += bytes.length
  }

  const offsets: number[] = [0]
  const beginObj = (id: number) => {
    offsets[id] = size
    push(`${id} 0 obj\n`)
  }
  const endObj = () => push('endobj\n')

  push('%PDF-1.4\n%\x80\x80\x80\x80\n')

  let nextId = 3
  const pageMeta = pages.map((page) => {
    const pageId = nextId++
    const contentId = nextId++
    const imageId = nextId++
    return { pageId, contentId, imageId, page }
  })
  const pageIds = pageMeta.map((meta) => meta.pageId)

  beginObj(1)
  push('<< /Type /Catalog /Pages 2 0 R >>\n')
  endObj()

  beginObj(2)
  push(
    `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(' ')}] /Count ${pages.length} >>\n`,
  )
  endObj()

  for (const { pageId, contentId, imageId, page } of pageMeta) {
    beginObj(pageId)
    push(
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidthPt} ${pageHeightPt}] /Contents ${contentId} 0 R /Resources << /XObject << /Im0 ${imageId} 0 R >> >> >>\n`,
    )
    endObj()

    const content = `q\n${pageWidthPt} 0 0 ${pageHeightPt} 0 0 cm\n/Im0 Do\nQ\n`
    const contentBytes = encoder.encode(content)
    beginObj(contentId)
    push(`<< /Length ${contentBytes.length} >>\nstream\n`)
    push(contentBytes)
    push('endstream\n')
    endObj()

    beginObj(imageId)
    push(
      `<< /Type /XObject /Subtype /Image /Width ${page.width} /Height ${page.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${page.jpeg.length} >>\nstream\n`,
    )
    push(page.jpeg)
    push('\nendstream\n')
    endObj()
  }

  const xrefOffset = size
  const objectCount = nextId
  push(`xref\n0 ${objectCount}\n`)
  push('0000000000 65535 f \n')
  for (let id = 1; id < objectCount; id += 1) {
    push(`${padOffset(offsets[id] ?? 0)} 00000 n \n`)
  }
  push(`trailer\n<< /Size ${objectCount} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`)

  return concat(parts)
}
