class Review < ApplicationRecord
    belongs_to :comic
    belongs_to :user

    validates :star, :comment, presence: true
end
