class Api::AnswersController < ApplicationController

    def index
        @answers = Answer.all
        render :index
    end
    
    def show
    end

    def create
        @answer = Answer.new(answer_params)
        if @answer.save
            render json: @answer
        else
            render json: {error: 'you messed up'}
        end
    end

    def update
        @answer = current_user.answers.find_by(params[:id]);

        if !@answer
            render json: {message: 'Unauthorized'}, status: :unauthorized
            return 
        end
        @answer.update!(answer_params)
        render json: @answer

    end

    def destroy
        @answer = current_user.answers.find_by(params[:id]);
        if !@answer
            render json: {message: 'Unauthorized'}, status: :unauthorized
            return
        end
        #still unsure if we want hard errors here
        @answer.destroy!
        render :show
    end

    private 
    def answer_params
        params.require(:answer).permit(:poster_id, :question_id, :body)
    end
end
