let statusEl: HTMLElement | null = null
let toastEl: HTMLElement | null = null
let started = false

export function initPWA(): void {
  if (started) return
  started = true

  window.addEventListener('online', () => setStatus(true))
  window.addEventListener('offline', () => setStatus(false))

  // Suppress the browser install prompt; this app does not offer an install CTA.
  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault()
  })

  void import('virtual:pwa-register').then(({ registerSW }) => {
    registerSW({
      immediate: true,
      onNeedRefresh() {
        showToast('Update installed. Reload to use it.')
      },
      onOfflineReady() {
        showToast('Ready to work offline')
      },
    })
  })
}

export function bindPWA(elements: {
  statusEl?: HTMLElement | null
  toastEl?: HTMLElement | null
}): void {
  toastEl = elements.toastEl ?? toastEl
  statusEl = elements.statusEl ?? statusEl

  if (statusEl) setStatus(navigator.onLine)
}

export function showToast(message: string): void {
  if (!toastEl) return
  const toast = toastEl
  toast.textContent = message
  toast.hidden = false
  window.setTimeout(() => {
    toast.hidden = true
  }, 4000)
}

function setStatus(online: boolean): void {
  if (!statusEl) return
  statusEl.textContent = online ? 'Online' : 'Offline'
  statusEl.dataset.state = online ? 'online' : 'offline'
}
