class Api::V1::StocksController < ApplicationController
  before_action :create_stock, only: [:create]
  before_action :destroy_stock, only: [:destroy]
  respond_to :json

  def index
    render json: current_user.stocks
  end

  def show
    binding.pry
  end

  def create
    render json: current_user.stocks
  end

  def destroy
    render json: current_user.stocks
  end

  private

  def stock_params
    params.require(:stock).permit(:symbol, :shares)
  end

  def create_stock
    current_user.stocks.create(stock_params)
  end

  def destroy_stock
    current_user.stocks.where(symbol: params[:symbol]).destroy_all
  end
end
