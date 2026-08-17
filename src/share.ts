import { jpegPagesToPdf } from './pdf.ts'
import type { Quiz, RankedMatch } from './types.ts'

export const PAGE_WIDTH_PT = 612
export const PAGE_HEIGHT_PT = 792
const SCALE = 2
const MARGIN = 54
const PAPER = '#fbfaf7'
const INK = '#1c2333'
const MUTED = '#5f6778'
const RULE = '#d8d3c8'
const TRACK = '#ece8df'
const FONT = 'system-ui, "Segoe UI", Roboto, sans-serif'

type ShareCardInput = {
  quiz: Quiz
  analysis: string
  ranked: RankedMatch[]
}

class PdfPainter {
  readonly pages: HTMLCanvasElement[] = []
  private ctx!: CanvasRenderingContext2D
  private y = 0
  private readonly accent: string

  constructor(accent: string) {
    this.accent = accent
    this.newPage()
  }

  private newPage(): void {
    const canvas = document.createElement('canvas')
    canvas.width = PAGE_WIDTH_PT * SCALE
    canvas.height = PAGE_HEIGHT_PT * SCALE
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('Could not draw this result')
    ctx.scale(SCALE, SCALE)
    ctx.fillStyle = PAPER
    ctx.fillRect(0, 0, PAGE_WIDTH_PT, PAGE_HEIGHT_PT)
    this.ctx = ctx
    this.pages.push(canvas)
    this.y = MARGIN
  }

  private ensureSpace(height: number): void {
    if (this.y + height <= PAGE_HEIGHT_PT - MARGIN) return
    this.newPage()
  }

  private setFont(weight: string, size: number): void {
    this.ctx.font = `${weight} ${size}px ${FONT}`
    this.ctx.textBaseline = 'top'
  }

  fillText(text: string, x: number, color: string): void {
    this.ctx.fillStyle = color
    this.ctx.fillText(text, x, this.y)
  }

  wrapLines(text: string, font: string, maxWidth: number): string[] {
    this.ctx.font = font
    const words = text.trim().split(/\s+/).filter(Boolean)
    if (words.length === 0) return []

    const lines: string[] = []
    let current = ''
    const fits = (value: string) => this.ctx.measureText(value).width <= maxWidth

    const pushBroken = (word: string) => {
      let chunk = ''
      for (const char of word) {
        const next = chunk + char
        if (chunk && !fits(next)) {
          lines.push(chunk)
          chunk = char
        } else {
          chunk = next
        }
      }
      current = chunk
    }

    for (const word of words) {
      const next = current ? `${current} ${word}` : word
      if (fits(next)) {
        current = next
        continue
      }
      if (current) lines.push(current)
      if (fits(word)) {
        current = word
      } else {
        pushBroken(word)
      }
    }
    if (current) lines.push(current)
    return lines
  }

  addSectionLabel(label: string): void {
    const lineHeight = 14
    this.ensureSpace(lineHeight + 10)
    this.setFont('700', 9)
    this.ctx.letterSpacing = '0.08em'
    this.fillText(label.toUpperCase(), MARGIN, MUTED)
    this.ctx.letterSpacing = '0px'
    this.y += lineHeight
  }

  addTitle(text: string): void {
    const lineHeight = 22
    this.ensureSpace(lineHeight + 8)
    this.setFont('600', 16)
    this.fillText(text, MARGIN, INK)
    this.y += lineHeight + 10
    this.ctx.strokeStyle = RULE
    this.ctx.lineWidth = 1
    this.ctx.beginPath()
    this.ctx.moveTo(MARGIN, this.y)
    this.ctx.lineTo(PAGE_WIDTH_PT - MARGIN, this.y)
    this.ctx.stroke()
    this.y += 18
  }

  addParagraph(text: string): void {
    const size = 11
    const lineHeight = 17
    const width = PAGE_WIDTH_PT - MARGIN * 2
    const font = `400 ${size}px ${FONT}`
    const lines = this.wrapLines(text, font, width)
    for (const line of lines) {
      this.ensureSpace(lineHeight)
      this.setFont('400', size)
      this.fillText(line, MARGIN, INK)
      this.y += lineHeight
    }
  }

  addBar(name: string, percent: number): void {
    const nameHeight = 16
    const trackHeight = 8
    const block = nameHeight + 6 + trackHeight + 12
    this.ensureSpace(block)

    const width = PAGE_WIDTH_PT - MARGIN * 2
    this.setFont('600', 11)
    this.fillText(name, MARGIN, INK)
    this.setFont('500', 11)
    const label = `${percent}%`
    const labelWidth = this.ctx.measureText(label).width
    this.fillText(label, PAGE_WIDTH_PT - MARGIN - labelWidth, MUTED)
    this.y += nameHeight + 6

    this.ctx.fillStyle = TRACK
    roundRect(this.ctx, MARGIN, this.y, width, trackHeight, 4)
    this.ctx.fill()

    const fillWidth = Math.max(0, Math.min(width, (percent / 100) * width))
    if (fillWidth > 0) {
      this.ctx.fillStyle = this.accent
      roundRect(this.ctx, MARGIN, this.y, fillWidth, trackHeight, 4)
      this.ctx.fill()
    }

    this.y += trackHeight + 12
  }

  addGap(size: number): void {
    this.y += size
  }
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
): void {
  const r = Math.min(radius, width / 2, height / 2)
  ctx.beginPath()
  if (typeof ctx.roundRect === 'function') {
    ctx.roundRect(x, y, width, height, r)
    return
  }
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + width - r, y)
  ctx.quadraticCurveTo(x + width, y, x + width, y + r)
  ctx.lineTo(x + width, y + height - r)
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height)
  ctx.lineTo(x + r, y + height)
  ctx.quadraticCurveTo(x, y + height, x, y + height - r)
  ctx.lineTo(x, y + r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.closePath()
}

function renderSharePages(input: ShareCardInput): HTMLCanvasElement[] {
  const painter = new PdfPainter(input.quiz.theme.accent)
  painter.addTitle(input.quiz.title)
  painter.addSectionLabel('Summary')
  painter.addParagraph(input.analysis)
  painter.addGap(22)
  painter.addSectionLabel('Match split')
  painter.addGap(6)
  for (const match of input.ranked) {
    painter.addBar(match.name, match.percent)
  }
  return painter.pages
}

async function canvasToJpeg(canvas: HTMLCanvasElement): Promise<Uint8Array> {
  const blob = await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (result) => {
        if (result) resolve(result)
        else reject(new Error('Could not encode this result'))
      },
      'image/jpeg',
      0.92,
    )
  })
  return new Uint8Array(await blob.arrayBuffer())
}

export async function buildResultSharePdf(input: ShareCardInput): Promise<Blob> {
  const pages = renderSharePages(input)
  const jpegPages = await Promise.all(
    pages.map(async (canvas) => ({
      jpeg: await canvasToJpeg(canvas),
      width: canvas.width,
      height: canvas.height,
    })),
  )
  const bytes = jpegPagesToPdf(jpegPages, PAGE_WIDTH_PT, PAGE_HEIGHT_PT)
  const copy = new ArrayBuffer(bytes.byteLength)
  new Uint8Array(copy).set(bytes)
  return new Blob([copy], { type: 'application/pdf' })
}

export function resultPdfFilename(quiz: Quiz): string {
  return `${quiz.id}-result.pdf`
}

export type ShareOutcome = 'shared' | 'downloaded' | 'cancelled' | 'failed'

export async function shareOrDownloadPdf(file: File, title: string): Promise<ShareOutcome> {
  const payload: ShareData = { files: [file], title }

  try {
    if (canShareFiles(file)) {
      await navigator.share(payload)
      return 'shared'
    }
  } catch (error) {
    if (isAbort(error)) return 'cancelled'
  }

  try {
    downloadFile(file)
    return 'downloaded'
  } catch {
    return 'failed'
  }
}

function canShareFiles(file: File): boolean {
  if (typeof navigator.share !== 'function') return false
  if (typeof navigator.canShare !== 'function') return true
  try {
    return navigator.canShare({ files: [file] })
  } catch {
    return false
  }
}

function isAbort(error: unknown): boolean {
  return error instanceof DOMException
    ? error.name === 'AbortError'
    : error instanceof Error && error.name === 'AbortError'
}

function downloadFile(file: File): void {
  const url = URL.createObjectURL(file)
  const link = document.createElement('a')
  link.href = url
  link.download = file.name
  link.rel = 'noopener'
  document.body.append(link)
  link.click()
  link.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 1000)
}
