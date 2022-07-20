import React from "react";

export default function User(){
    return(
        <section className="flex-col user">
            <img src="headshot.png" alt="User"></img>
            <h1>Thomas Stevens</h1>
            <h3>Software Engineer</h3>
            <a href="StevensSoftwareServices.com"><h4>StevensSoftwareServices.com</h4></a>
            <section className="flex-row">
                <button type="button"><a href="mailto:thomaalanstevens@gmail.com" rel="noreferrer" target="_blank">Email Me</a></button>
                <button type="button"><a href="https://github.com/ThomasAlanStevens" rel="noreferrer" target="_blank">Linkedin</a></button>
            </section>
        </section>
    )
}