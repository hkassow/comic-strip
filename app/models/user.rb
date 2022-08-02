class User < ApplicationRecord
    has_many :reviews
    has_many :comics, through: :reviews
    has_secure_password
    validates :name, :username, presence: true
    validates :username, uniqueness: true
end
