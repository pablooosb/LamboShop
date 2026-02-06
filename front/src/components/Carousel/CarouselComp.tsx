import "./CarouselComp.css"
import { useNavigate } from 'react-router-dom'
import temerarioName from '/src/assets/temerario_center_light.svg'
import temerarioImg from '/src/assets/temerario.png'
import revueltoName from '/src/assets/revuelto_center_light.svg'
import revueltoImg from '/src/assets/revuelto.png'
import huracanName from '/src/assets/huracan_center_light.svg'
import huracanTecnicaImg from '/src/assets/huracanTecnica.png'
import huracanStoImg from '/src/assets/huracanSto.png'

function CarouselComp() {
    const navigate = useNavigate()

    return (
        <div>
            <div className="top">
                <h1>Featured vehicles</h1>
                <div className="seeAll" onClick={() => navigate('/vehicles')}>See all →</div>
            </div>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <div className="slide-content">
                            <img src={temerarioName} alt="Temerario name" />
                            <img src={temerarioImg} alt="Temerario image" />
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="slide-content">
                            <img src={revueltoName} alt="Revuelto name" />
                            <img src={revueltoImg} alt="Revuelto image" />
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="slide-content">
                            <img src={huracanName} alt="Huracan Tecnica name" />
                            <img src={huracanTecnicaImg} alt="Huracan Tecnica image" />
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="slide-content">
                            <img src={huracanName} alt="Huracan Sto name" />
                            <img src={huracanStoImg} alt="Huracan Sto image" />
                        </div>
                    </div>


                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel"data-bs-slide="prev">
                    <span className="custom-hex">
                        <i className="bi bi-chevron-left"></i>
                    </span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="custom-hex">
                        <i className="bi bi-chevron-right"></i>
                    </span>
                </button>

                <div className="buttons">
                    <button>Ask for offer →</button>
                    <button>See all details →</button>
                </div>

            </div>
        </div>
        
    )
}

export default CarouselComp