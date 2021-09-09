import { Component } from "react";

class Options extends Component {
    render( ) {
        return (
            <>
                <button value={ this.props.value } text={ this.props.text } onClick={ this.props.onClick }>{ `${ this.props.value }. ${ this.props.text }`}</button>
            </>
        )
    }
}

export default Options;