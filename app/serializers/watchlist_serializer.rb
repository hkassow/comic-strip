class WatchlistSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :comic_id
  belongs_to :user
  belongs_to :comic
end
