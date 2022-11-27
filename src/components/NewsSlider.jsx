import React from "react";
import "./newsslider.css"

import image1 from "../assets/images/news/image 1.png"
import image2 from "../assets/images/news/image 2.png"
import image3 from "../assets/images/news/image 3.png"
import image4 from "../assets/images/news/image 4.png"

import author1 from "../assets/images/news/author1.jpeg"
import author2 from "../assets/images/news/author2.jpeg"
import author3 from "../assets/images/news/author3.jpeg"
import author4 from "../assets/images/news/author4.jpeg"

const NewsSlider = () => {
  return (
    <div className="news-slider">
      <NewsSliderComponent
        image={image1}
        color="A3A3FF"
        title="Профессия Веб-разработчик"
        author="Автор"
        authorAvatar={author1}
        authorNickname="@ник"/>
      <NewsSliderComponent
        image={image2}
        color="D1CAFF"
        title="Профессия Веб-разработчик"
        author="Автор"
        authorAvatar={author2}
        authorNickname="@ник"/>
      <NewsSliderComponent
        image={image3}
        color="FFD773"
        title="Профессия Веб-разработчик"
        author="Автор"
        authorAvatar={author3}
        authorNickname="@ник"/>
      <NewsSliderComponent
        image={image4}
        color="FECECF"
        title="Профессия Веб-разработчик"
        author="Автор"
        authorAvatar={author4}
        authorNickname="@ник"/>
    </div>
  )
}

const NewsSliderComponent = (props) => {
  let { image, color, title, author, authorAvatar, authorNickname } = props

  return (
    <div className="news-component">
      <div className="news-content" style={{
        background: '#'+color
      }}>
        <img src={image} className="news-image"/>
        <div className="news-title">{title}</div>
      </div>
      <div className="news-footer">
        <div>
          <img src={authorAvatar} className="author-avatar"/>
        </div>
        <div>
          <p className="author">{author}</p>
          <p className="author-nickname">{authorNickname}</p>
        </div>
      </div>
    </div>
  )
}

export default NewsSlider