class User < ApplicationRecord
    has_many :reviews
    has_many :comics, through: :reviews
    has_secure_password
end
