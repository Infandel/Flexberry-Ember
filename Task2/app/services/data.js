import Service from '@ember/service';
import ENV from 'book-club/config/environment'

export default Service.extend({
  getSpeakers(search) {
    let queryParams = '';
    if (search) {
      queryParams=`?q=${search}`;
    }

    return fetch(`${ENV.backendURL}/speakers${queryParams}`).then((response) => response.json());
  },

  getSpeaker(id) {
    return fetch(`${ENV.backendURL}/speakers/${id}`).then((response) => response.json());
  },

  deleteSpeaker(speaker) {
    return fetch(`${ENV.backendURL}/speakers/${speaker.id}`, { method: 'DELETE'});
  },

  createSpeaker(speaker) {
    return fetch(`${ENV.backendURL}/speakers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(speaker)
    });
  },

  updateSpeaker(speaker) {
    return fetch(`${ENV.backendURL}/speakers/${speaker.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(speaker)
    });
  },

  getBooks(search) {
    let queryParams = '';
    if (search) {
      queryParams=`?q=${search}`;
    }

    return fetch(`${ENV.backendURL}/books${queryParams}`).then((response) => response.json());
  },

  getBook(id) {
    return fetch(`${ENV.backendURL}/books/${id}`).then((response) => response.json());
  },

  deleteBook(book) {
    return fetch(`${ENV.backendURL}/books/${book.id}`, { method: 'DELETE'});
  },

  createBook(book) {
    return fetch(`${ENV.backendURL}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    });
  },

  updateBook(book) {
    return fetch(`${ENV.backendURL}/books/${book.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    });
  }
});