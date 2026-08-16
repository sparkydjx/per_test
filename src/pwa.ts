interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>
}

let deferredPrompt: BeforeInstallPromptEvent | null = null
let installCard: HTMLElement | null = null
let statusEl: HTMLElement | null = null
let toastEl: HTMLElement | null = null
let started = false

export function initPWA(): void {
  if (started) return
  started = true

  window.addEventListener('online', () => setStatus(true))
  window.addEventListener('offline', () => setStatus(false))

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault()
    deferredPrompt = event as BeforeInstallPromptEvent
    if (installCard) installCard.hidden = false
  })

  window.addEventListener('appinstalled', () => {
    deferredPrompt = null
    if (installCard) installCard.hidden = true
    showToast('App installed')
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
  installCard?: HTMLElement | null
  installButton?: HTMLButtonElement | null
  statusEl?: HTMLElement | null
  toastEl?: HTMLElement | null
}): void {
  toastEl = elements.toastEl ?? toastEl
  statusEl = elements.statusEl ?? statusEl
  installCard = elements.installCard ?? installCard

  if (statusEl) setStatus(navigator.onLine)

  if (installCard) {
    const standalone = window.matchMedia('(display-mode: standalone)').matches
    installCard.hidden = standalone || !deferredPrompt
  }

  const installButton = elements.installButton
  if (installButton) {
    installButton.onclick = async () => {
      if (!deferredPrompt) return
      await deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === 'accepted' && installCard) installCard.hidden = true
      deferredPrompt = null
    }
  }
}

export function showToast(message: string): void {
  if (!toastEl) return
  toastEl.textContent = message
  toastEl.hidden = false
  window.setTimeout(() => {
    toastEl.hidden = true
  }, 4000)
}

function setStatus(online: boolean): void {
  if (!statusEl) return
  statusEl.textContent = online ? 'Online' : 'Offline'
  statusEl.dataset.state = online ? 'online' : 'offline'
}
