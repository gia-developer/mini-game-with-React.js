import { Component } from "react";
import data from "./data.json";
import Swal from "sweetalert2";
import Selected from "./List";
import Question from "./Question";
import Header from "./Header";
import "../index.css";
import "animate.css"

const choosenLetter = [ ];
const choosen = [ ];

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
        const lastLetter = choosenLetter.pop();
 
        if( choosen.length < 4 ) {
            this.setState( { option: letter, countClick: this.state.countClick + 1 } )

            if( letter === "A" && countIncrement + 1 === 1 ) {
                this.setState( { count: countIncrement + 1 } )
            } else if( letter === "A" && lastLetter === "A" ) {
                this.setState( { count: countIncrement + 2 } )
            } else if( letter === "A" && lastLetter === "B" ) {
                this.setState( { count: countIncrement + 1 } )
            } else if( letter === "B" && lastLetter === "A" ) {
                this.setState( { count: countIncrement + 3 } )
            } else if( letter === "B" ) {
                this.setState( { count: countIncrement + 2 } )
            }
        } else {
            Swal.fire({
                title: 'Fin del juego',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
            } )
        }

        choosenLetter.push( letter );
        choosen.push( this.state.countClick + letter )
    }

    render( ) {
        let count = this.state.count;
        const optionSelect = data[count].opciones;
        const optionOne = Object.keys( optionSelect )[0].toUpperCase( );
        const optionTwo = Object.keys( optionSelect )[1].toUpperCase( );
        
        return (
            <>
                <Header />
                <div id="content">
                    <Question data={ data[count] } />
                    <div id="btn">
                        <button data-option={ optionOne } data-text={ optionSelect.a }onClick={ this.handleClick }>{ optionOne + ". " + optionSelect.a }</button>
                        <button data-option={ optionTwo } data-text={ optionSelect.b } onClick={ this.handleClick }>{ optionTwo + ". " + optionSelect.b }</button>
                    </div>
                    <h3>Última respuesta: { [ ...choosen ].pop( ) }</h3>
                    <Selected array={ choosen } />
                </div>
            </>
        )
    }
}

export default Option;