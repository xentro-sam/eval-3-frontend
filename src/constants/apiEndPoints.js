export const BACKEND_URL = 'http://localhost:8000';

export const GET_ALL_EVENTS = {
  url: '/api/events',
  method: 'get',
};

export const GET_EVENT_BY_ID = (id) => ({
  url: `/api/events/${id}`,
  method: 'get',
});

export const UPDATE_EVENT = (id) => ({
  url: `/api/events/${id}`,
  method: 'patch',
});
