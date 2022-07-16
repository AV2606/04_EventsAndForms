import React, { Component } from 'react'

export default class RowItemProduct extends React.Component {
    constructor(props) {
        super(props)

    }

    AddDeleteButton() {
        if (!this.props.product.stocked) {
            return (
                <button type="button" className="btn btn-danger" onClick={this.props.onDelete}>Delete</button>
            );
        }
    }

    render() {
        const product = this.props.product;
        let styleStocked = product.stocked ? { color: "black" } : { color: "red", textDecoration: "line-through" };

        return (
            <tr className="table-active"  >
                <td style={styleStocked}>{product.name}</td>
                <td>{product.price}</td>
                <td>{this.AddDeleteButton()}</td>
            </tr>
        );
    }
}