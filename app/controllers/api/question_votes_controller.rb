class QuestionVotesController < ApplicationController
    def create 
        @vote = QuestionVote.new(voter_id: current_user.id, question_id: params[:question_id], value: params[:status]);
        if @vote.save
            render json: @vote
        else
            render json {errors: 'vote failed to save, please try again'}
        end
    end
    
    def destroy
        @vote = current_user.questionVotes.find_by(params[:id]);

        if !@vote
            render json: {message: 'Unauthorized'}, status: :unauthorized
            return
        end
        @vote.destroy!
        render :show
    end
end
