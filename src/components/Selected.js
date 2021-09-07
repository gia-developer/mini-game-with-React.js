import { Component } from "react";

class Options extends Component {
    render( ) {
        return (
            <>
                <h4>Respuestas anteriores:</h4>
                <ul>{
                    this.props.array.map( ( element, i ) => {
                        return ( <li key={ i }>{ element }</li> )
                    } )
                }</ul>
            </>
        )
    }
}

export default Options;