NewReader.Views.FeedView = Backbone.View.extend({
	template: JST['feeds/show'],

	render: function() {
		console.log('rendering');
		var content = this.template({ feed: this.model });
		this.$el.html(content);
		return this;
	},

	initialize: function() {
		this.listenTo(this.model, "sync", this.render);
	},

	events: {
		"click button#refresh" : "handleRefresh"
	},

	handleRefresh: function(event) {
		console.log('refreshing');
		this.model.fetch();
	}
})