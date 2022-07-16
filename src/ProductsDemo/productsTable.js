import React, { Component } from 'react'
import RowItemCategory from './rowItemCategory'
import RowItemProduct from './rowItemProduct'


export default class ProductsTable extends React.Component {

    constructor(props){
        super(props);

        this.state={
            filterPoducts:[]
        };
    }

    getPrice(product){
        return parseInt(product.price.substring(1));
    }

    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;


        const sortby = this.props.sortby;
        const categoryFilter = this.props.categoryFilter;


        const rows = [];
        let lastCategory = null;

        this.props.products.forEach((product) => {
            //FILTER IF filterText in json Name Object
            if (product.name.indexOf(filterText) === -1) {
                return;
            }
            if (inStockOnly && !product.stocked) {
                return;
            }
            //FILTER IF categoryFilter in json Category Object
            if(categoryFilter && product.category !== categoryFilter){
                return;
            }
            if(this.state.filterPoducts.indexOf(product)!=-1)
            {
                return;
            }

            if (product.category !== lastCategory && !sortby) {
                rows.push(
                    <RowItemCategory
                        category={product.category}
                        key={product.category} />
                );
            }
            rows.push(
                <RowItemProduct
                product={product}
                key={product.name} 
                onDelete={()=>{
                    this.state.filterPoducts.push(product);
                    this.setState(this.state);
                }}
                />
            );
            lastCategory = product.category;
        });

        if(sortby=='name'){
            rows.sort((a,b)=>{
                if(a.props.product.name<b.props.product.name){
                    return -1;
                }
                if(a.props.product.name>b.props.product.name){
                    return 1;
                }
                return 0;
            }
            );
        }
        if(sortby=='price'){
            rows.sort((a,b)=>{
                if(this.getPrice(a.props.product)<this.getPrice(b.props.product)){
                    return -1;
                }
                if(this.getPrice(a.props.product)>this.getPrice(b.props.product)){
                    return 1;
                }
                return 0;
            });
        }

        return (
            <table className="table" style={{ border: "1px solid green" }}>
                <thead>
                    <tr class="table-dark" >
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}
