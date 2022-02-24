import { useEffect, useState } from "react";

const Meme=()=>{
   const [meme,setMeme]=useState({
       topText:"",
       bottomText:"",
       randomImage:"http://i.imgflip.com/1bij.jpg"
   });
   
   const [allMeme,setAllMeme]=useState([]);
    
   useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setAllMeme(data.data.memes))
   },[])

   const handleChange=(event)=>{
        const{name,value}=event.target
        setMeme((preMeme)=>{
            return({
                ...preMeme,
                [name]:value
            })
        })

   }
   const clickHandler=()=>{
    const randomNumber=Math.floor(Math.random()*allMeme.length)
    const url=allMeme[randomNumber].url
    console.log()
    setMeme((prevMeme)=>{
        return(
            {
                ...prevMeme,
                randomImage:url
            }
        )
    })
   }
    return (
        <div>
            <main>
                <div className="form">
                    <input 
                    type="text" 
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                     />
                    <input type="text" 
                    className="form--input" 
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    />
                    <button type="button" onClick={clickHandler} className="form--button">Generate Meme</button>
                </div>

                <div className="meme">
                <img src={meme.randomImage} alt="Iamge"className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>    

            </main>
        </div>
    );
}   

export default Meme;