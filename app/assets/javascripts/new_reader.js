window.NewReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
	Data: {},
  initialize: function() {
		var feeds = NewReader.Data.feeds = new NewReader.Collections.Feeds();
		feeds.fetch();

		new NewReader.Routers.Feeds();
		Backbone.history.start();
  }
};

$(document).ready(function(){
  NewReader.initialize();
});
