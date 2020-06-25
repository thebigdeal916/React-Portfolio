import React from "react";
import "./style.css"

function Footer(props) {
    return (
        <footer className="footer">
            <span>Copyright N Adams 2020{props.children}</span>
        </footer>
    )
}

export default Footer