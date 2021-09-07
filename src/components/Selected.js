import { Component } from "react";

class Options extends Component {
    render( ) {
        return (
            <>
                <h3>Respuesta anterior:</h3>
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