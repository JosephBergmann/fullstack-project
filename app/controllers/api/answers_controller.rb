class Api::AnswersController < ApplicationController
    # before_action :snake_case_params
    wrap_parameters include: Answer.attribute_names
    before_action :require_logged_in, only: [:create, :update, :destroy] 

    def index
        @answers = Answer.all
        render :index
    end
    
    def show
    end

    def create
        @answer = Answer.new(poster_id: params["poster_id"], question_id: params["question_id"], body: params["body"])
        if @answer.save
            render :index
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
        # render json: @answer
        render :index
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
    
    # def snake_case_params
    #     params.deep_transform_keys!(&:underscore)
    # end
end
