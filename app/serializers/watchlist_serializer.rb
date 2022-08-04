class WatchlistSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :comic_id
end
