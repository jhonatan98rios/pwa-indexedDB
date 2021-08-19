function updateStatus (event) {
  if (navigator.onLine) {
    alert('You are online')
  } else {
    alert('Yout are offline')
  }
}

export function networkStatus() {
  window.addEventListener('online', updateStatus);
  window.addEventListener('offline', updateStatus);
}