import { Component } from "react";
import data from "./data.json";
import Swal from "sweetalert2";
import Selected from "./Selected";
import Question from "./Question";

const elegidosLetter = [ ];
const elegidos = [ ];

class Option extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            option: "",
            count: 0,
            countClick: 1
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick( e ) {
        const letter = e.target.dataset.option;
        const countIncrement = this.state.count;
        const lastLetter = elegidosLetter.pop();
 
        if( elegidos.length < 4 ) {
            this.setState( { option: letter, countClick: this.state.countClick + 1 } )

            if( letter === "a" && countIncrement + 1 === 1 ) {
                this.setState( {
                    count: countIncrement + 1,
                } )
            } else if( letter === "a" && lastLetter === "a" ) {
                this.setState( {
                    count: countIncrement + 2
                } )
            } else if( letter === "a" && lastLetter === "b" ) {
                this.setState( {
                    count: countIncrement + 1
                } )
            } else if( letter === "b" && lastLetter === "a" ) {
                this.setState( {
                    count: countIncrement + 3
                } )
            } else if( letter === "b" ) {
                this.setState( {
                    count: countIncrement + 2
                } )
            }
        } else {
            Swal.fire( "Fin del juego" );
        }

        elegidosLetter.push( letter );
        elegidos.push( this.state.countClick + letter )
    }

    render( ) {
        let count = this.state.count;
        const optionSelect = data[count].opciones;
        const key = Object.keys;

        return (
            <>
                <Question data={ data[count] } />

                <button data-option={ key( optionSelect )[0] } data-text={ optionSelect.a }onClick={ this.handleClick }>{ optionSelect.a }</button>
                <button data-option={ key( optionSelect )[1] } data-text={ optionSelect.b } onClick={ this.handleClick }>{ optionSelect.b }</button>
                
                <Selected array={ elegidos } />
            </>
        )
    }
}

export default Option;