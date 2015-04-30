angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'karthikeyan Murugan',
    lastText: 'You on your way?',
    face: 'https://instagramstatic-a.akamaihd.net/bluebar/3c63f93/images/homepage/screenshot1.jpg'
  }, {
    id: 1,
    name: 'karthikeyan',
    lastText: 'Hey, it\'s me',
    face: 'https://instagramstatic-a.akamaihd.net/bluebar/3c63f93/images/homepage/screenshot1.jpg'
  }, {
    id: 2,
    name: 'Murugan',
    lastText: 'Did you get the ice cream?',
    face: 'https://instagramstatic-a.akamaihd.net/bluebar/3c63f93/images/homepage/screenshot1.jpg'
  }, {
    id: 3,
    name: 'karthikeyan',
    lastText: 'I should buy a boat',
    face: 'https://instagramstatic-a.akamaihd.net/bluebar/3c63f93/images/homepage/screenshot1.jpg'
  }, {
    id: 4,
    name: 'Murugan Karthikeyan',
    lastText: 'Look at my mukluks!',
    face: 'https://instagramstatic-a.akamaihd.net/bluebar/3c63f93/images/homepage/screenshot1.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
