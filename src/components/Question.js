import { Component } from "react";

class Question extends Component {
    render( ) {
        return (
            <>
                <h2>{ this.props.data.id.toUpperCase( ) }° pregunta</h2>
                <p class="text">{ this.props.data.historia }</p>
            </>
        )
    }
}

export default Question;