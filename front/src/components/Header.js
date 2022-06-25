import React, { Component } from "react"
import ExchangeRate  from "./ExchangeRate"

class Header extends Component {
    render() {
        return (
            <header>
                <p className="Title-1">Finance controller</p>
                <p className="Title-3">Don't waste your many</p>
                <ExchangeRate />
            </header>
        )
    }
}

export default Header