class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :stocks

  def daily
    binding.pry
  end

  def as_json(options = {})
    super(options.merge(include: [:stocks]))
  end
end
