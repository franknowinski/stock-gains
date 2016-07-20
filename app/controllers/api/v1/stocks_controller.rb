class Api::V1::StocksController < ApplicationController
  before_action :create_stock, only: [:create]
  respond_to :json

  def index
    render json: current_user.stocks
  end

  def create
    render json: current_user.stocks
  end

  private

  def stock_params
    params.require(:stock).permit(:symbol, :shares)
  end

  def create_stock
    current_user.stocks.create(stock_params)
  end
end
