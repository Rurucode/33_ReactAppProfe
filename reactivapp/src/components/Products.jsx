import React, { Component } from 'react'
import Product from './Product'

export class Products extends Component {
    render() {
        return (
            <div>
                <Product name="Tostada" price="1.5€"/>
                <Product name="Cafe" price="1€"/>
                <Product name="Zumo de Naranja" price="2.5€"/>
                <Product name="Huevo frito" price="5€"/>
            </div>
        )
    }
}

export default Products
