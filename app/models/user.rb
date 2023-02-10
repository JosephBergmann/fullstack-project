class User < ApplicationRecord
    validates :password, length: { minimum: 6 }, allow_nil: true

    has_secure_password

    before_validation :ensure_session_token

    def self.find_by_credentials(username, password)    
        user = User.find_by(email: username)
        # has_secure_password gives us the authenticate method
        if user&.authenticate(password) 
            return user
        else
            nil 
        end
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end

    def reset_session_token!
        self.session_token = generate_unique_session_token
        save!
        session_token
    end

    has_many :questions,
    primary_key: :id,
    foreign_key: :poster_id,
    class_name: :Question,
    dependent: :destroy

    private

    def generate_unique_session_token
        while true
            token = SecureRandom.urlsafe_base64
            return token unless User.exists?(session_token: token)
        end
    end
end
