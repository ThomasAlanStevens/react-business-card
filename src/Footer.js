import React from "react";
import facebook from "./images/Facebook Icon.png"
import github from "./images/GitHub Icon.png"
import instagram from "./images/Instagram Icon.png"
import twitter from "./images/Twitter Icon.png"

export default function Footer(){
    return (
        <footer className="flex-row major-padding-v major-padding-h">
            <a href="#"><img src={facebook} alt="Icon for facebook"></img></a>
            <a href="#"><img src={github} alt="Icon for github"></img></a>
            <a href="#"><img src={instagram} alt="Icon for instagram"></img></a>
            <a href="#"><img src={twitter} alt="Icon for twitter"></img></a>
        </footer>
    )
}