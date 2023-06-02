class Api::VotesController < ApplicationController
    def create 
        debugger
        @vote = QuestionVote.new(voter_id: current_user.id, question_id: params[:question_id], value: params[:value])
        if @vote.save
            render json: @vote
        else
            debugger
            render json: {errors: 'vote failed to save, please try again'}
        end
    end
    
    def destroy
        debugger
        @vote = current_user.question_votes.find_by(id: params[:id])

        if !@vote
            render json: {message: 'Unauthorized'}, status: :unauthorized
            return
        end
        @vote.destroy!
        render :show
        return
    end

    def update
        @vote = current_user.question_votes.find_by(id: params[:id])

        if !@vote
            render json: {message: 'Unauthorized'}, status: :unauthorized
            return
        end

        @vote.update!(status: params[:status])
    end
end
