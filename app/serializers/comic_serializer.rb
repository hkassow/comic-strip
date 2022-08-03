class ComicSerializer < ActiveModel::Serializer
  attributes :id, :name, :author, :illustrator, :company, :protagonist, :cover_illustration, :release_year, :ongoing, :page_count, :synopsis, :average_rating
  has_many :reviews

  def average_rating
    #average of reviews.star
    self.object.reviews.average(:star)
  end

end
