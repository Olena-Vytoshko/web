import React, { Component } from "react"
import axios from "axios";


class ExchangeRate extends Component {
    state = {
        exchangeRate: "You must see the exchange rate here :)"
    }

    async componentDidMount() {
        await axios
            .get("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11")
            .then(response => {
                const data = response.data
                const exchangeRate = `USD: buy - ${data[0].buy}, sale - ${data[0].sale}`
                console.log(exchangeRate)
                this.setState({ exchangeRate })
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    render() {
        return (
            <div className="exchange_rate">
                <h6>{ this.state.exchangeRate } </h6>
            </div>
        )
    }
}

export default ExchangeRate