import { Component } from "react";

class Options extends Component {
    render( ) {
        return (
            <>
                <h2>{ this.props.data.id }° pregunta</h2>
                <p>{ this.props.data.historia }</p>
            </>
        )
    }
}

export default Options;