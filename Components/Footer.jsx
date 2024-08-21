import React from "react";
import './styles'; 


const year = new Date().getFullYear(); 


function Footer(){
    return (
        <footer>
            <p>Copyright ⓒ {year}</p>
        </footer>
    );
}

export default Footer; 