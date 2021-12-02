import React, { Component } from 'react'
import Products from './Products'

export class Main extends Component {
    render() {
        return (
            <main>
                <h3>Esto es el Main</h3>
                <p>Aqui ira la seccion principal</p>
                <Products/>
            </main>
        )
    }
}

export default Main


