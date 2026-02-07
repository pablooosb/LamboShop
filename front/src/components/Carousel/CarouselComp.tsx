import "./CarouselComp.css"
import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import temerarioName from '/src/assets/temerario_center_light.svg'
import temerarioImg from '/src/assets/temerario.png'
import revueltoName from '/src/assets/revuelto_center_light.svg'
import revueltoImg from '/src/assets/revuelto.png'
import huracanName from '/src/assets/huracan_center_light.svg'
import huracanTecnicaImg from '/src/assets/huracanTecnica.png'
import huracanStoImg from '/src/assets/huracanSto.png'
import huracanSterratoImg from '/src/assets/huracanSterrato.png'
import urusName from '/src/assets/urus_center_light.svg'
import urusSeImg from '/src/assets/urusSe.png'
import UrusSImg from '/src/assets/urusS.png'
import urusPerformanteImg from '/src/assets/urusPerformante.png'

function CarouselComp() {
    const navigate = useNavigate()
    const [huracanImg, setHuracanImg] = useState(huracanTecnicaImg)
    const [activeHuracanButton, setActiveHuracanButton] = useState("tecnica")
    const [urusImg, setUrusImg] = useState(urusSeImg)
    const [activeUrusButton, setActiveUrusButton] = useState("se")

    return (
        <div>
            <div className="top">
                <h1>Featured vehicles</h1>
                <div className="seeAll" onClick={() => navigate('/vehicles')}>See all →</div>
            </div>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-indicators d-md-none">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3"></button>
                </div>
                
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <div className="slide-content">
                            <img src={temerarioName} alt="Temerario name" />
                            <img src={temerarioImg} alt="Temerario image" />
                            <div className="buttons">
                                <button className="askOffer">Ask for offer →</button>
                                <button className="details">See all details →</button>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="slide-content">
                            <img src={revueltoName} alt="Revuelto name" />
                            <img src={revueltoImg} alt="Revuelto image" />
                            <div className="buttons">
                                <button className="askOffer">Ask for offer →</button>
                                <button className="details">See all details →</button>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="slide-content">
                            <img src={huracanName} alt="Huracan name" />
                            <img src={huracanImg} alt="Huracan image" />
                            <div className="huracans">
                                <button className={activeHuracanButton === "tecnica" ? "active" : ""} onClick={() => {setHuracanImg(huracanTecnicaImg); setActiveHuracanButton("tecnica")}}>Huracan Tecnica</button>
                                <button className={activeHuracanButton === "sto" ? "active" : ""} onClick={() => {setHuracanImg(huracanStoImg); setActiveHuracanButton("sto")}}>Huracan Sto</button>
                                <button className={activeHuracanButton === "sterrato" ? "active" : ""} onClick={() => {setHuracanImg(huracanSterratoImg); setActiveHuracanButton("sterrato")}}>Huracan Sterrato</button>
                            </div>
                            <div className="buttons">
                                <button className="askOffer">Ask for offer →</button>
                                <button className="details">See all details →</button>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="slide-content">
                            <img src={urusName} alt="Urus name" />
                            <img src={urusImg} alt="Urus image" />
                            <div className="urus">
                                <button className={activeUrusButton === "se" ? "active" : ""} onClick={() => {setUrusImg(urusSeImg); setActiveUrusButton("se")}}>Urus Se</button>
                                <button className={activeUrusButton === "s" ? "active" : ""} onClick={() => {setUrusImg(UrusSImg); setActiveUrusButton("s")}}>Urus S</button>
                                <button className={activeUrusButton === "performante" ? "active" : ""} onClick={() => {setUrusImg(urusPerformanteImg); setActiveUrusButton("performante")}}>Urus Performante</button>
                            </div>
                            <div className="buttons">
                                <button className="askOffer">Ask for offer →</button>
                                <button className="details">See all details →</button>
                            </div>
                        </div>
                    </div>

                </div>
                <button className="carousel-control-prev d-none d-md-block" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="custom-hex">
                        <i className="bi bi-chevron-left"></i>
                    </span>
                </button>

                <button className="carousel-control-next d-none d-md-block" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="custom-hex">
                        <i className="bi bi-chevron-right"></i>
                    </span>
                </button>

            </div>
        </div>
        
    )
}

export default CarouselComp