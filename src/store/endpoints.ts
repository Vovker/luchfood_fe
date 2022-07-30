export const API_URL = 'http://185.179.83.233';

export const endpoints = {
  getNews:  (amount: number, lastId: number) => `${API_URL}/news/${amount}/${lastId}`,
  getNewsById: (id: number) => `${API_URL}/news/${id}`,
  gallery: (amount: number, lastId: number) => `${API_URL}/gallery/${amount}/${lastId}`,
  getGalleryById: (id: number) => `${API_URL}/gallery/${id}`,
  getEventTypes: () => `${API_URL}/event-type`,
  getEvents: (amount: number, lastId: number) => `${API_URL}/event/${amount}/${lastId}`,
  getEventsById: (id: number) => `${API_URL}/event/${id}`,
  getKitchenTypes: () => `${API_URL}/kitchen-type`,
}
