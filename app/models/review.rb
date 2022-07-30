class Review < ApplicationRecord
    belongs_to :comic
    belongs_to :user

    validates :star, :comment, presence: true
    validates :star, inclusions: { in: 1..5 }
end
