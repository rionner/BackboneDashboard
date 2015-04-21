require 'bundler'
Bundler.require()


# Connection
ActiveRecord::Base.establish_connection(
  :adapter => 'postgresql',
  :database => 'card'
)


# Models
require './models/cards'


#Helper
def card_parameters
  request_body = JSON.parse(request.body.read.to_s)
  { title: request_body["title"], message: request_body["message"] }
end


get '/' do
  erb :index
end

get '/variables' do
  erb :index
end


# Create
post '/api/cards' do
  card = Card.create(card_parameters)
  card.to_json
end


# Read
get '/api/cards' do
  content_type :json
  Card.all.to_json
end

get '/api/cards/:id' do
  # content_type :json
  card = Card.find(params[:id])
end


# Udpate
put '/api/cards/:id' do
  card = Card.find(params[:id].to_i)
  card.update(card_parameters())

  content_type(:json)
  card.to_json
end


# Udpate
patch '/api/cards/:id' do
  card = Card.find(params[:id].to_i)
  card.update(card_parameters())

  content_type(:json)
  card.to_json
end


# Delete
delete '/api/cards/:id' do
  content_type :json
  Kitten.destroy(params[:id])
end
