class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :comic_id, :star, :comment, :username
  belongs_to :user
  belongs_to :comic

  def username
    self.object.user.username
  end
end
