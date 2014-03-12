NewReader.Routers.Feeds = Backbone.Router.extend({
	routes: {
		'': 'index',
		'feeds/:id': 'show'
	},


	index: function() {
		var feedIndexView = new NewReader.Views.FeedsIndex({
			collection: NewReader.Data.feeds
		});

		$('#content').html(feedIndexView.render().$el);
	},

	show: function(id) {
		var feed = NewReader.Data.feeds.get(id);
		// feed.entries().fetch();
		var showFeedView = new NewReader.Views.FeedView({
			model: feed
		});

		$('#content').html(showFeedView.render().$el);
	}
});
