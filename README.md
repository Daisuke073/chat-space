# README

# Chat-space DB設計

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null:false|add_index|
|email|string|null: false|add_index|
|password|string|null: false|add_index|

### Association
- has_many :users_groups
- has_many :groups through users_groups

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|add_index|

### Association
- has_many :users_groups
- has_many :users through users_groups

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|group_id|integer|null: false|
|user_id|integer|null: false|

### Association
- has_many :groups
- has_many :users

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

