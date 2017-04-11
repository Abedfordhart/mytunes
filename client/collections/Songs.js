// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  url: 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs',

  parse: function(response) {
    return response.results;
  },

  initialize: function() {
    this.fetch();
    
    $.ajax({
      context: this,
      url: 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs',
      type: 'GET',
      data: {},
      contentType: 'application/json',
      success: function(data) {
        this.add(data.results);
      },
      error: function(error) {
        console.error('MyTunes: Failed to fetch messages', error);
      }
    });

  },
  
  model: SongModel

});