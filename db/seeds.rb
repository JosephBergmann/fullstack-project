# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# db/seeds.rb

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      username: 'Demo-lition', 
      email: 'demo@user.io', 
      password: 'password'
    )
  
    # More users
    # 10.times do 
    #   User.create!({
    #     username: Faker::Internet.unique.username(specifier: 3),
    #     email: Faker::Internet.unique.email,
    #     password: 'password'
    #   }) 
    # end
    20.times do
      User.create(
        username: Faker::Internet.unique.username,
        password: "password",
        email: Faker::Internet.unique.email,
        session_token: Faker::Alphanumeric.alpha(number: 10)
      )
    end
    
    # Create 20 questions, with random users as posters
    users = User.all
    20.times do
      Question.create(
        title: Faker::Lorem.sentence(word_count: 5),
        body: Faker::Lorem.paragraph(sentence_count: 3),
        poster: users.sample
      )
    end
    
    # Create 20 answers, with random users and questions
    questions = Question.all
    20.times do
      Answer.create(
        body: Faker::Lorem.paragraph(sentence_count: 3),
        poster: users.sample,
        question: questions.sample
      )
    end
  
    puts "Done!"
  end