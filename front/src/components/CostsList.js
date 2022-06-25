import React, { Component } from "react"
import eventBus from "../EventBus"
import axios from "axios";

class CostsList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            costs: new Set()
        }
    }

    componentDidMount() {
        eventBus.on('addCostApply', (data) => {
            const costs = this.state.costs
            costs.add(data)
            this.setState({ costs: costs })
        })
    }

    componentWillUnmount() {
        eventBus.remove("addCostApply")
    }

    clearCosts = () => {
        this.setState({ costs: new Set() })
    }

    loadDefaultCosts = async () => {
        await axios
            .get("http://localhost:3001/costs")
            .then(response => {
                const data = new Set(response.data.message.costs)
                this.setState({ costs: data })
            })
            .catch(function (error) {
                console.log(error)
            });
    }


    render() {
        return (
            <div className="block_2">
                <p className="text">your costs</p>
                <div className="output_block">
                    <table id="costs_list">
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Cost</th>
                                <th>Labels</th>
                            </tr>
                            {
                                [...this.state.costs].map((cost, i) => (
                                    <tr key={i}>
                                        <td>{cost.name}</td>
                                        <td>{cost.cost}</td>
                                        <td>
                                            <ul>
                                                {cost.labels.split(';').map((element, i) => (
                                                    <li key={i}>{element}</li>
                                                ))}
                                            </ul>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <br />
                    <input type="button" value="Clear All Costs" onClick={this.clearCosts} /> <br />
                    <input type="button" value="Load Default Costs" onClick={this.loadDefaultCosts} /> <br />
                </div>
            </div >
        )
    }
}

export default CostsList