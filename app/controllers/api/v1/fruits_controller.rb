class Api::V1::FruitsController < ApplicationController
    def index
        render json:Fruit.all
    end

    # create
    def create
        fruit=Fruit.create(fruit_params)
        render json: fruit
    end
    # destroy
    def destroy
        Fruit.destroy(params[:id])
    end

    # update
    def update
        fruit=Fruit.find(params[:id])
        fruid.update_attributes(fruit_params)
        render json:fruit
    end

    private 
    # fruit params
    def fruit_params
        params.require(:fruit).permit(:id, :name, :description)
    end
    
end
