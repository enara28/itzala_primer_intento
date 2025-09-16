import React, { Component } from "react"

export default class Buttons extends Component {
    render() {
        return (
            <div className="buttons-container-wrapper">
                <div className="buttons">
                    <div className="book-table">Reservar mesa</div>
                    <div className="food-delivery">Realizar pedido</div>
                </div>
            </div>
        )
    }
}