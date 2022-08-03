class ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :update, :destroy]

  # GET /reviews
  def index
    if params[:user_id]
      comic = Comic.find_by(id: params[:comic_id])
      review = comic.reviews.find_by(user_id: params[:user_id])
      pp review
      render json: review, serializer: ReviewSerializer
    else 
      @reviews = Review.all

      render json: @reviews
    end
  end

  # GET /reviews/1
  def show
    render json: @review
  end


  # POST /reviews
  def create
    @review = Review.new(review_params)

    if @review.save
      render json: @review, status: :created, location: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reviews/1
  def update
    if @review.update(review_params)
      render json: @review.comic
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reviews/1
  def destroy
    @review.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = Review.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def review_params
      params.require(:review).permit(:user_id, :comic_id, :star, :comment)
    end
end
