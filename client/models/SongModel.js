// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
  	this.trigger('enqueue', this);
  	// *** determine initialization
  	//SongQueue.prototype.initialize();
  },

  dequeue: function() {
  	this.trigger('dequeue', this);
  	// *** determine initialization
  	//SongQueue.prototype.initialize();
  },

  ended: function() {
  	this.trigger('ended', this);
    this.dequeue();
  }

});
