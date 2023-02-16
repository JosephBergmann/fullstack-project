class Api::QuestionsController < ApplicationController
    def index
        @questions = Question.all;
        render :index
    end

    def create
    end

    def show
        @question = Question.find_by(id: params[:id])
        if(@question)
            render :show
        else
            render json: {errors: 'No question exists with that id'}
        end
    end

    def update
    end

    def destroy
        @question = current_user.questions.find_by(params[:id])
        if !@question
            render json: {message: 'Unauthorized'}, status: :unauthorized
            return
        end
        @question.destroy
        render :show
    end

    private
    def question_params
        params.require(:question).permit(:title, :body, :poster_id)
    end
end
