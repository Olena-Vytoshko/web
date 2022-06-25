import React, { Component } from "react"

import CostsList from './CostsList'
import CostForm from "./CostForm"

class Article extends Component {
    render() {
        return (
            <article>
                <CostForm />
                <CostsList />
            </article>
        )
    }
}

export default Article