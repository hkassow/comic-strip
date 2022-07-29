class ComicSerializer < ActiveModel::Serializer
  attributes :id, :author, :illustrator, :company, :protagonist, :cover_illustration, :release_year, :ongoing, :page_count, :average_rating
end
