class Api::V1::StocksController < ApplicationController
  respond_to :json

  def create
    render json: Stock.create(stock_params)
  end

  private

  def stock_params
    params.require(:stock).permit(:name, :symbol, :percent_change, :ask, :days_range, :year_range, :previous_close, :earnings_share, :volume, :oneyr_target_price, :shares)
  end
end
