class Group < ApplicationRecord
  has_many :group_users
  has_many :users, has_many: through: :group_users
  validates :name, presence: true, uniqueness: true
end
