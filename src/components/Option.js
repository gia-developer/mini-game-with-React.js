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

            if( letter === "a" && countIncrement + 1 === 1 ) {
                this.setState( { count: countIncrement + 1 } )
            } else if( letter === "a" && lastLetter === "a" ) {
                this.setState( { count: countIncrement + 2 } )
            } else if( letter === "a" && lastLetter === "b" ) {
                this.setState( { count: countIncrement + 1 } )
            } else if( letter === "b" && lastLetter === "a" ) {
                this.setState( { count: countIncrement + 3 } )
            } else if( letter === "b" ) {
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
            })
        }

        choosenLetter.push( letter );
        choosen.push( this.state.countClick + letter )
    }

    render( ) {
        let count = this.state.count;
        const optionSelect = data[count].opciones;
        const key = Object.keys;
        
        return (
            <>
                <Header />
                <div id="content">
                    <Question data={ data[count] } />
                    <div id="btn">
                        <button data-option={ key( optionSelect )[0] } data-text={ optionSelect.a }onClick={ this.handleClick }>{ optionSelect.a }</button>
                        <button data-option={ key( optionSelect )[1] } data-text={ optionSelect.b } onClick={ this.handleClick }>{ optionSelect.b }</button>
                    </div>
                    <h3>Última respuesta: { [ ...choosen ].pop( ) }</h3>
                    <Selected array={ choosen } />
                </div>
            </>
        )
    }
}

export default Option;