import { Component } from "react";
import data from "./data.json";

const elegidos = [ ];

class Eleccion extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            option: "",
            count: 0,
            select: ""
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick( e ) {
        this.setState( {
            option: e.target.dataset.option,
            count: this.state.count + 1,
            select: this.state.count + 1 + `${ e.target.dataset.option }`
        } )
        console.log(e.target.dataset.option);
        console.log(this.state.count + 1);
        console.log(this.state.select);
    }

    componentDidUpdate( ) {
        elegidos.push(this.state.select);
    }

    render( ) {
        let count = this.state.count;
        const key = Object.keys;
        const optionSelect = data[count].opciones;

        return (
            <>
                <h2>{ data[count].id }° pregunta</h2>
                <p>{ data[count].historia }</p>
                <button data-option={ key( optionSelect )[0] } onClick={ this.handleClick }>{ optionSelect.a }</button>
                <button data-option={ key( optionSelect )[1] } onClick={ this.handleClick }>{ optionSelect.b }</button>

                <h3>Respuesta anterior:</h3>
                <ul>{
                    elegidos.map( ( element, i ) => {
                        return ( <li key={ i }>{ element }</li> )
                    } )
                }</ul>
            </>
        )
    }
}

export default Eleccion;