require 'bundler'
Bundler.require()


# Connection
ActiveRecord::Base.establish_connection(
  :adapter => 'postgresql',
  :database => 'cats'
)


# Models
require './models/cards'


get '/' do
  erb :index
end


# Create
post '/api/cards' do
  content_type :json
  card = Card.create(params[:cards])
  card.to_json
end


# Read
get '/api/cards' do
  content_type :json
  Card.all.to_json
end

get '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id])
end


# Udpate
put '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id]).update(params[:card])
  card.to_json
end


# Udpate
patch '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id]).update(params[:card])
  card.to_json
end


# Delete
delete '/api/cards/:id' do
  content_type :json
  Kitten.destroy(params[:id])
end
