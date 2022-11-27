import React from "react";
import PagesLayout from "../components/PagesLayout";
import "./newspage.css"
import {Button} from "react-bootstrap";
import exitIcon from "../assets/images/exit.svg";
import {useNavigate} from "react-router-dom";
import {PROFILE_PAGE} from "../util/consts";
import TitleText from "../components/TitleText";
import NewsSlider from "../components/NewsSlider";
import NewsMasonry from "../components/NewsMasonry";

const NewsPage = () => {

  const navigator = useNavigate()

  const goToAuth = () => {
    navigator(PROFILE_PAGE)
  }

  return (
    <PagesLayout>
      <div className="news-container-wrapper">
        <div className="news-container">
          <div className="d-flex justify-content-end mb-4">
            <Button variant="link" className="text-decoration-none text-secondary" onClick={goToAuth}>
              Войти{" "}
              <img src={exitIcon} alt=""/>
            </Button>
          </div>
          <TitleText text="Новости" />
          <p className="sub-header">Актуальное на сегодня</p>
          <NewsSlider/>
          <p className="sub-header">Смотреть больше</p>
          <NewsMasonry/>
          <div className="w-100 d-flex justify-content-center">
            <Button className="rounded-pill border-0 mt-4 mb-5" style={{
              padding: '1.5rem 6rem',
              background: '#3AB19B'
            }}>БОЛЬШЕ НОВОСТЕЙ</Button>
          </div>
        </div>
      </div>
    </PagesLayout>
  )
}

export default NewsPage