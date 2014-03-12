class FeedsController < ApplicationController
  def index
    respond_to do |format|
      # @feeds = Feed.includes(:entries)
      format.html { render :index }
      # format.json { render 'index.json' }
      format.json { render :json => Feed.includes(:entries), :include => [:entries] }
    end
  end

  def create
    feed = Feed.find_or_create_by_url(feed_params[:url])
    if feed
      render :json => feed
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end

  def show
    feed = Feed.find(params[:id])
    feed.reload
    render :json => feed, :include => [:entries]
  end

  private
  def feed_params
    params.require(:feed).permit(:title, :url)
  end
end
