class Api::VotesController < ApplicationController
    
    before_action :require_logged_in, only: [:create, :update, :destroy] 

    def create 
        @vote = Vote.new(user_id: current_user.id, question_id: params[:question_id], value: params[:value], question_answer: params[:question_comment])
        if @vote.save
            render json: @vote
        else
            render json: {errors: 'vote failed to save, please try again'}
        end
    end
    
    def destroy
        @vote = current_user.votes.find_by(id: params[:id])

        if !@vote
            render json: {message: 'Unauthorized'}, status: :unauthorized
            return
        end
        @vote.destroy!
        render json: {message: 'Success'}, status: :ok
        return
    end

    def update
        @vote = current_user.votes.find_by(id: params[:id])

        if !@vote
            render json: {message: 'Unauthorized'}, status: :unauthorized
            return
        end

        @vote.update!(value: params[:value])
        render json:{message: 'Success'}, status: :ok
    end
end
