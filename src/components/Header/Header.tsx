import stacklineLogo from "../../util/stackline_logo.svg";
import React from "react";

const Header: React.FC = () => {
    return (
        <header className="App-header">
            <img src={stacklineLogo} className="App-logo" alt="stackline-logo" />
        </header>
    )
}

export default Header;