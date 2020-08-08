# README

# Chat-space DB設計

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null:false, index: true|
|email|string|null: false, index: true|
|password|string|null: false, index: true|

### Association
- has_many :users_groups
- has_many :groups, through: :users_groups
- has_many :messages

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true, unique: true|

### Association
- has_many :users_groups
- has_many :users, through: :users_groups
- has_many :messages

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

