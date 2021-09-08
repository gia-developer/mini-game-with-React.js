import { Component } from "react";
import img from "../img/gigi.jpg";
import "animate.css";

class Header extends Component {
    constructor( props ) {
        super( props );
        this.state = { text: "gia-developer", class: "" }
    }

    componentDidMount( ) {
        setInterval(() => {
            this.setState( { text: "parcial-react" } );
        }, 3000);
    }

    render( ) {
        return (
            <header>
                <h1 class="animate__animated animate__bounce">💗 { this.state.text }</h1>
                <img src={ img } alt="Gianna Russo" />
            </header>
        )
    }
}

export default Header;