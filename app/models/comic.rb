class Comic < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :name, presence: true, uniqueness: true
    validates :author, :illustrator, :company, presence: true
end
