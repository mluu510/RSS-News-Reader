NewReader.Views.FeedsIndex = Backbone.View.extend({

  template: JST['feeds/index'],

	render: function() {
		var renderedContent = this.template({
			feeds: this.collection}
		);
		this.$el.html(renderedContent);
		return this;
	},

	initialize: function() {
		this.listenTo(this.collection, "sync", this.render);
	}

});
