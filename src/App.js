import { Component } from "react";
import data from "./components/data.json";
import Swal from "sweetalert2";
import Selected from "./components/List";
import Question from "./components/Question";
import Header from "./components/Header";
import Button from "./components/Button";
import "./index.css";
import "animate.css"

const choosenLetter = [ ], choosen = [ ];

export default class Option extends Component {
    constructor( props ) {
        super( props );
        this.state = { option: "", count: 0, countClick: 1 }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick( e ) {
        const letter = e.target.value;
        choosenLetter.push( letter );
        const countIncrement = this.state.count;
        const lastLetter = [...choosenLetter].pop();
        choosen.push( this.state.countClick + letter );

        if( this.state.countClick < 5 ) {
            this.setState( { option: letter, countClick: this.state.countClick + 1 } )

            if( letter === "A" && countIncrement + 1 === 1 || letter === "A" && lastLetter === "B") this.setState( { count: countIncrement + 1 } )
            else if( letter === "A" && lastLetter === "A" || letter === "B" && lastLetter === "B" || letter === "B" && countIncrement + 1 === 1 ) this.setState( { count: countIncrement + 2 } )
            else if( letter === "B" && lastLetter === "A" ) this.setState( { count: countIncrement + 3 } );
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
                        <Button value={ optionOne } text={ optionSelect.a } onClick={ this.handleClick }/>
                        <Button value={ optionTwo } text={ optionSelect.b } onClick={ this.handleClick }/>
                    </div>
                    <h3>Última respuesta: { [ ...choosen ].pop( ) }</h3>
                    <Selected array={ choosen } />
                </div>
            </>
        )
    }
}