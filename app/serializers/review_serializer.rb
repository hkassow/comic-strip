class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :comic_id, :star, :comment
end
