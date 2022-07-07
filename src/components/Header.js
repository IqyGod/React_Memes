import React from "react"
import Image from "../img/troll-face.png"

export default function Header() {
      return (
            <header className="header">
                  <img className="header--image" src={Image} alt="troll-face" />
                  <h1 className="header--title">Meme Generator</h1>
                  <h2>React app</h2>
            </header>
      )
}