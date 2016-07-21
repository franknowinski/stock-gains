class Api::V1::StocksController < ApplicationController
  respond_to :json

  def index
    render json: current_user.stocks
  end

  def show
    binding.pry
  end

  def create
    render json: current_user.stocks.create(stock_params)
  end

  def destroy
    render json: current_user.stocks.where(symbol: params[:symbol]).destroy_all
  end

  private

  def stock_params
    params.require(:stock).permit(:symbol, :shares)
  end
end
