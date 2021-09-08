import { Component } from "react";
import img from "../img/gigi.jpg";

class Header extends Component {
    render( ) {
        return (
            <header>
                <h1>💗 gia-developer</h1>
                <img src={ img } alt="Gianna Russo" />
            </header>
        )
    }
}

export default Header;