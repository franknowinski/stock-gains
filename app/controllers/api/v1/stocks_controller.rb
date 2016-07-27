class Api::V1::StocksController < ApplicationController
  before_action :set_stock, only: [:update]
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

  def update
    @stock.update(stock_params)
    render json: @stock
  end

  def destroy
    render json: current_user.stocks.where(symbol: params[:symbol]).destroy_all
  end

  private

  def set_stock
    @stock = current_user.stocks.find(params[:stock][:id])
  end

  def stock_params
    params.require(:stock).permit(:symbol, :shares)
  end
end
