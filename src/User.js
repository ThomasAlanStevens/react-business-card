import React from "react";
import headshot from "./images/headshot.png"

export default function User(){
    return(
        <section className="userContainer">
            <div class="flex-col user">
                <img src={headshot} alt="User"></img>
                <h1 class="minor-padding-v">Thomas Stevens</h1>
                <h2 class="minor-padding-v">Software Engineer</h2>
                <a class="minor-padding-v" href="StevensSoftwareServices.com"><h4>StevensSoftwareServices.com</h4></a>
                <section className="buttons flex-row major-padding-v">
                    <button class="mail padding-v major-padding-h" type="button"><a href="mailto:thomaalanstevens@gmail.com" rel="noreferrer" target="_blank">Email Me</a></button>
                    <button class="linkedin padding-v major-padding-h" type="button"><a href="https://github.com/ThomasAlanStevens" rel="noreferrer" target="_blank">Linkedin</a></button>
                </section>
                <section>
                    <div class="major-padding-v major-padding-h">
                        <h3>About</h3>
                        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                    </div>
                    <div class="major-padding-v major-padding-h">
                        <h3>Interests</h3>
                        <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                    </div>
                </section>
            </div>
        </section>
    )
}