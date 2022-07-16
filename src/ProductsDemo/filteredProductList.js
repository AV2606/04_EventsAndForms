import React, { Component } from 'react'
import "./bootstrap.min.css"
import ProductsTable from './productsTable'
import SearchBar from './searchBar'


let productsData = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];



export default class FilteredProductList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            filterText: '',
            inStockOnly: false,
            products: productsData,
            sortby: '',
            categoryFilter: ''
        }
    }

    render() {
        return (
            <div style={{ border: "1px solid yellow", padding: "20px" }}>
                <SearchBar onFilterChanged={this.filterChanged}
                    onInStockChanged={this.inStockChanged}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    categories={this.getCategories()}
                    onSortbyChange={this.sortbyChanged}
                    onCategoryChange={this.categoryChanged}
                ></SearchBar>
                <ProductsTable
                    products={this.state.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly} 
                    sortby={this.state.sortby}
                    categoryFilter={this.state.categoryFilter}
                    />


            </div>
        )
    }
    getCategories(){
        let categories = [];
        this.state.products.forEach((product) => {
            if (categories.indexOf(product.category) === -1) {
                categories.push(product.category);
            }
        }
        );
        return categories;
    }

    sortbyChanged=(sortby)=>{
        //console.log("called from fpl sortby change");
        this.setState({sortby:sortby});
    }
    categoryChanged=(category)=>{
        //console.log("called from fpl category change");
        this.setState({categoryFilter:category});
    }

    //Callback From SearchBar
    filterChanged = (filterTextInput) => {
        this.setState({ filterText: filterTextInput });
    }

    //Callback From SearchBar
    inStockChanged = (inStockInput) => {
        this.setState({ inStockOnly: inStockInput });
    }

}
