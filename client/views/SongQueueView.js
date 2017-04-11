// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
  	this.render();
  },

  render: function() {
  	// ***
  	//SongQueueEntryView.prototype.render();
    return this.$el;
  }

});
