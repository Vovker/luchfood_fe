export const API_URL = process.env.REACT_APP_API_URL;

export const endpoints = {
  getNews:  (amount: number, lastId: number) => `${API_URL}/news/${amount}/${lastId}`,
  getNewsById: (id: number) => `${API_URL}/news/${id}`,
  getGallery: (amount: number, lastId: number) => `${API_URL}/gallery/${amount}/${lastId}`,
  getEvents: (amount: number, lastId: number) => `${API_URL}/event/${amount}/${lastId}`,
  getEventById: (id: number) => `${API_URL}/event/${id}`,
  getKitchenTypes: () => `${API_URL}/kitchen-type`,
  getCorners: () => `${API_URL}/corner`,
  getCornerById: (id: number) => `${API_URL}/corner/${id}`,
  getMenuByCornerId: (id: number) => `${API_URL}/menu/corner/${id}`,
}
