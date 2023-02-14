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
    end

    def destroy
    end

    private 
    def answer_params
        params.require(:answer).permit(:poster_id, :question_id, :body)
    end
end
