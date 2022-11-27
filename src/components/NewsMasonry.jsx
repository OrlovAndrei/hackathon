import React from "react";
import "./newsmasonry.css"

import image5 from "../assets/images/news/image 5.png"
import image6 from "../assets/images/news/image 6.png"
import image7 from "../assets/images/news/image 7.png"
import image8 from "../assets/images/news/image 8.png"
import image9 from "../assets/images/news/image 9.png"
import image10 from "../assets/images/news/image 10.png"
import image11 from "../assets/images/news/image 11.png"
import image12 from "../assets/images/news/image 12.png"
import image13 from "../assets/images/news/image 13.png"
import image14 from "../assets/images/news/image 14.png"
import image15 from "../assets/images/news/image 15.png"
import image16 from "../assets/images/news/image 16.png"
import image17 from "../assets/images/news/image 17.png"
import image18 from "../assets/images/news/image 18.png"
import image19 from "../assets/images/news/image 19.png"

const NewsMasonry = () => {
  return (
    <div className="masonry-component">
      <div className="masonry-column">
        <NewsBlock big={false} color="A5EFC3" image={image5}/>
        <NewsBlock  big={true} color="FEE9CD" image={image8}/>
        <NewsBlock big={false} color="C5BFFF" image={image11}/>
        <NewsBlock  big={true} color="F9E5AA" image={image14}/>
        <NewsBlock  big={true} color="DFF8FF" image={image17}/>
      </div>
      <div className="masonry-column second">
        <NewsBlock big={true} color="FFF4BB" image={image6}/>
        <NewsBlock big={true} color="D1CAFF" image={image9}/>
        <NewsBlock big={false} color="D2EBFC" image={image12}/>
        <NewsBlock big={true} color="8AF5BD" image={image15}/>
        <NewsBlock big={false} color="FEE54B" image={image18}/>
      </div>
      <div className="masonry-column third">
        <NewsBlock big={false} color="E3F1FF" image={image7}/>
        <NewsBlock  big={true} color="C8DBFF" image={image10}/>
        <NewsBlock big={false} color="FFC27F" image={image13}/>
        <NewsBlock  big={true} color="EFEAFE" image={image16}/>
        <NewsBlock  big={true} color="CAF4EA" image={image19}/>
      </div>
    </div>
  )
}

const NewsBlock = (props) => {
  let { big, color, image } = props;

  return (
    <div className={"news-block " + (big ? "big-block" : "small-block")} style={{
      background: '#'+color
    }}>
      <img src={image} alt=""/>
    </div>
  )
}

export default NewsMasonry