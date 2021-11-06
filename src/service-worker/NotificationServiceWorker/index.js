let serviceWorker = null;

const showNotification = async (title, options) => {
  await serviceWorker.showNotification(title, options);
};

const register = async () => {
  const currentServiceWorker = await navigator.serviceWorker.register('service-worker.js');
  console.log('Service Worker is registered', serviceWorker);
  serviceWorker = currentServiceWorker;
};

export {
  register,
  showNotification
}
