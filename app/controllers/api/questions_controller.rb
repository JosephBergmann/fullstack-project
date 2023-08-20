class Api::QuestionsController < ApplicationController
    wrap_parameters include: Question.attribute_names
    before_action :require_logged_in, only: [:create, :update, :destroy] 
    
    def index
        if !params[:query]
            @questions = Question.all;
        else
        end
        render :index
    end

    def create
        @question = Question.new(question_params);
        @question.poster_id = current_user.id
        if @question.save
            render :show
        else
            render json: {errors: 'something went wrong'}
        end
    end

    def show
        @question = Question.find_by(id: params[:id])
        if @question
            render :show
        else
            render json: {errors: 'No question exists with that id'}
        end
    end

    def update
        @question = Question.find_by(id: params[:id])
        if !@question
            render json: {message: 'Unauthorized'}, status: :unauthorized
        end
        @question.update!(question_params)
        # render json: @question
        render :show
    end

    def destroy
        @question = current_user.questions.find_by(params[:id])
        if !@question
            render json: {message: 'Unauthorized'}, status: :unauthorized
            return
        end
        #still not sure if we want soft errors here
        @question.destroy
        render :show
    end

    private
    def question_params
        params.require(:question).permit(:title, :body)
    end
end
