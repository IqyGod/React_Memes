import React from "react"

export default function Meme() {

      const [meme, setMeme] = React.useState({
            topText: "",
            bottomText: "",
            randomImage: "https://i.imgflip.com/2wifvo.jpg"
      })

      const [allMeme, setAllMeme] = React.useState([])

      /* MEME API : https://api.imgflip.com/get_memes */
      React.useEffect(() => {
            getMemes()
      }, [])

      async function getMemes() {
            const response = await fetch("https://api.imgflip.com/get_memes")
            const data = await response.json()
            setAllMeme(data.data.memes)
      }

      function changeText(event) {
            const { name, value } = event.target
            setMeme(prevMeme => ({
                  ...prevMeme,
                  [name]: value
            })
            )
      }


      function getMemeImage() {
            const randomNumber = Math.floor(Math.random() * allMeme.length)
            const url = allMeme[randomNumber].url
            setMeme(prevMeme => ({
                  ...prevMeme,
                  randomImage: url
            }))

      }





      return (
            <main>
                  <div className="form">
                        <input
                              type="text"
                              placeholder="Top text"
                              className="form--input"
                              name="topText"
                              value={meme.topText}
                              onChange={changeText}

                        />
                        <input
                              type="text"
                              placeholder="Bottom text"
                              className="form--input"
                              name="bottomText"
                              value={meme.bottomText}
                              onChange={changeText}
                        />
                        <button
                              className="form--button"
                              onClick={getMemeImage}
                        >Get a new meme image 🖼

                        </button>
                  </div>

                  <div className="meme">
                        <img src={meme.randomImage}
                              alt="meme is here"
                              className="meme--image" />
                        <h3 className="meme--text top">{meme.topText}</h3>
                        <h3 className="meme--text bottom">{meme.bottomText}</h3>

                  </div>
            </main>
      )
}