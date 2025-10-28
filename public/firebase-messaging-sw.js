// Service worker to enable push messaging and PWA control
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
})

// Display notifications if payload includes notification details
self.addEventListener('push', (event) => {
  try {
    const data = event.data ? event.data.json() : {}
    const title = data?.notification?.title || 'Notification'
    const body = data?.notification?.body || ''
    const icon = data?.notification?.icon || '/fanap.png'
    const badge = data?.notification?.badge
    const targetUrl = data?.notification?.click_action || data?.data?.url || '/'
    const options = { body, icon, badge, data: { url: targetUrl } }
    event.waitUntil(self.registration.showNotification(title, options))
  } catch (e) {
    // Ignore
  }
})

// Focus existing tab or open target URL on notification click
self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  const url = event.notification?.data?.url || '/'
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        // Try to focus the first client
        // @ts-ignore
        if (client.url && client.focus) {
          return client.focus()
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow(url)
      }
    })
  )
})