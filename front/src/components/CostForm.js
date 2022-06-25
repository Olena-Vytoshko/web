import React, { Component } from "react"
import eventBus from "../EventBus"


class CostForm extends Component {


    addCost() {
        const product_name = document.getElementById("product_name").value
        const product_cost = document.getElementById("product_cost").value
        const product_labels = document.getElementById("product_labels").value
    
        if ((product_name.trim()).length === 0){
            alert("The name of product is empty")
            return
        }
        if ((product_cost.trim()).length === 0){
            alert("The cost of product is empty")
            return
        }
        const cost = {
            "name": product_name,
            "cost": product_cost,
            "labels": product_labels
        }
        eventBus.dispatch("addCostApply", cost)

        const text_input = document.querySelectorAll("input[type=text], input[type=number]")
        text_input.forEach(element => element.value = "")
    }    

    render() {
        return (
            <div className="block_2">
                <p className="title-3">add your cost</p>
                <div className="input_form">
                    <form>
                        <label htmlFor="product_name" className="text">Name of product:</label>
                        <input type="text" id="product_name" name="product_name" /><br />
                        <label htmlFor="product_cost" className="text">Cost of product:</label>
                        <input type="number" id="product_cost" name="product_cost" /><br />
                        <label htmlFor="product_labels" className="text">Some labels for product:</label>
                        <input type="text" id="product_labels" name="product_labels" /><br />
                        <br />
                        <input type="button" value="Submit" onClick={this.addCost} />
                    </form>
                    <br />
                    <p className="text">separate labels by using ';'</p>
                </div>
            </div>
        )
    }
}

export default CostForm