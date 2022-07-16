import React, { Component } from 'react'

export default class SearchBar extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <form style={{ border: "1px solid blue", padding: "10px" }}>

                <input className="form-control" placeholder="search..."
                    type="text"
                    style={{ width: "100%" }}
                    value={this.props.filterText}
                    onChange={this.handleFilterChanged}>
                </input>


                <table style={{ width: "100%" }}>
                    <tr>
                        <td style={{ width: "117px" }}>

                            <input style={{ width: "20px", top: "-" }} onChange={this.handleInStockChanged}
                                type="checkbox"
                                checked={this.props.inStockOnly} />
                            <label>Is In Stock</label>
                        </td>
                        <td>
                            <label for="sortby">sort by</label>
                            &nbsp;
                            <select name='sortby' onChange={this.handleSortbyChange}>
                                <option value=''>none</option>
                                <option value="price">Price</option>
                                <option value="name">Name</option>
                            </select>
                        </td>
                        <td>
                            <label for="categoryFilter">Category</label>
                            &nbsp;
                            <select name='categoryFilter' onChange={this.handleCategoryChange}>
                                <option value=''>All</option>
                                {this.props.categories.map((category) => {
                                    return <option key={category} value={category}>{category}</option>
                                })}
                            </select>
                        </td>


                    </tr>
                </table>





            </form>
        )
    }

    handleSortbyChange = (e) => {
        this.props.onSortbyChange(e.target.value);
    }
    handleCategoryChange = (e) => {
        this.props.onCategoryChange(e.target.value);
    }

    handleFilterChanged = (e) => {
        let filterValue = e.target.value;

        //parent send calback named onFilterChanged
        //Invoke Parent onFilterChanged method
        this.props.onFilterChanged(filterValue);

    }

    handleInStockChanged = (e) => {
        let isChecked = e.target.checked;
        //parent send calback named onFilterChanged
        //Invoke Parent onFilterChanged method
        this.props.onInStockChanged(isChecked);
    }

}
