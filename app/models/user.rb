class User < ApplicationRecord
    has_many :reviews
    has_many :watchlists
    has_many :comics, through: :reviews
    has_many :comics, through: :watchlists
    has_secure_password
    validates :username, presence: true
    validates :username, uniqueness: true
end
