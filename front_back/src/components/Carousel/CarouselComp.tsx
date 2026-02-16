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

const CAR_DATA: Record<number, any> = {
    1: { id: 1, name: "Temerario", img: temerarioImg, price: 300000, cv: 920, maxSpeed: 340 },
    2: { id: 2, name: "Revuelto", img: revueltoImg, price: 500000, cv: 1015, maxSpeed: 350 },
    3: { id: 3, name: "Huracán Tecnica", img: huracanTecnicaImg, price: 230000, cv: 640, maxSpeed: 325 },
    4: { id: 4, name: "Huracán STO", img: huracanStoImg, price: 310000, cv: 640, maxSpeed: 310 },
    5: { id: 5, name: "Huracán Sterrato", img: huracanSterratoImg, price: 260000, cv: 610, maxSpeed: 260 },
    6: { id: 6, name: "Urus SE", img: urusSeImg, price: 250000, cv: 800, maxSpeed: 312 },
    7: { id: 7, name: "Urus S", img: UrusSImg, price: 230000, cv: 666, maxSpeed: 305 },
    8: { id: 8, name: "Urus Performante", img: urusPerformanteImg, price: 270000, cv: 666, maxSpeed: 306 },
};

function CarouselComp() {
    const navigate = useNavigate()
    
    const [activeHuracanId, setActiveHuracanId] = useState(3);
    const [huracanImg, setHuracanImg] = useState(huracanTecnicaImg)
    const [activeHuracanButton, setActiveHuracanButton] = useState("tecnica")
    
    const [activeUrusId, setActiveUrusId] = useState(6);
    const [urusImg, setUrusImg] = useState(urusSeImg)
    const [activeUrusButton, setActiveUrusButton] = useState("se")

    const handleNavigate = (id: number) => {
        navigate(`/details/${id}`);
        window.scrollTo(0, 0);
    };

    const addToFavorites = (id: number) => {
        const carToAdd = CAR_DATA[id];
        const currentFavs = JSON.parse(localStorage.getItem('favorites') || '[]');
        
        // Check not to dupe
        const isAlreadyFav = currentFavs.some((car: any) => car.id === id);

        if (!isAlreadyFav) {
            const updatedFavs = [...currentFavs, carToAdd];
            localStorage.setItem('favorites', JSON.stringify(updatedFavs));
            window.dispatchEvent(new Event('storage'));
            alert(`${carToAdd.name} added to favorites!`);
        } else {
            alert("This vehicle is already in your favorites.");
        }
    };

    return (
        <div>
            <div className="top">
                <h1>Featured vehicles</h1>
                <div className="seeAll" onClick={() => {navigate('/models'); window.scrollTo(0, 0)}}>See all →</div>
            </div>
            
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators d-md-none">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></button>
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
                                <button className="addFav" onClick={() => addToFavorites(1)}>Add to favorites</button>
                                <button className="details_btn" onClick={() => handleNavigate(1)}>See all details →</button>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="slide-content">
                            <img src={revueltoName} alt="Revuelto name" />
                            <img src={revueltoImg} alt="Revuelto image" />
                            <div className="buttons">
                                <button className="addFav" onClick={() => addToFavorites(2)}>Add to favorites</button>
                                <button className="details_btn" onClick={() => handleNavigate(2)}>See all details →</button>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="slide-content">
                            <img src={huracanName} alt="Huracan name" />
                            <img src={huracanImg} alt="Huracan image" />
                            <div className="huracans">
                                <button className={activeHuracanButton === "tecnica" ? "active" : ""} 
                                    onClick={() => {setHuracanImg(huracanTecnicaImg); setActiveHuracanButton("tecnica"); setActiveHuracanId(3)}}>Huracan Tecnica</button>
                                <button className={activeHuracanButton === "sto" ? "active" : ""} 
                                    onClick={() => {setHuracanImg(huracanStoImg); setActiveHuracanButton("sto"); setActiveHuracanId(4)}}>Huracan Sto</button>
                                <button className={activeHuracanButton === "sterrato" ? "active" : ""} 
                                    onClick={() => {setHuracanImg(huracanSterratoImg); setActiveHuracanButton("sterrato"); setActiveHuracanId(5)}}>Huracan Sterrato</button>
                            </div>
                            <div className="buttons">
                                <button className="addFav" onClick={() => addToFavorites(activeHuracanId)}>Add to favorites</button>
                                <button className="details_btn" onClick={() => handleNavigate(activeHuracanId)}>See all details →</button>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="slide-content">
                            <img src={urusName} alt="Urus name" />
                            <img src={urusImg} alt="Urus image" />
                            <div className="urus">
                                <button className={activeUrusButton === "se" ? "active" : ""} 
                                    onClick={() => {setUrusImg(urusSeImg); setActiveUrusButton("se"); setActiveUrusId(6)}}>Urus Se</button>
                                <button className={activeUrusButton === "s" ? "active" : ""} 
                                    onClick={() => {setUrusImg(UrusSImg); setActiveUrusButton("s"); setActiveUrusId(7)}}>Urus S</button>
                                <button className={activeUrusButton === "performante" ? "active" : ""} 
                                    onClick={() => {setUrusImg(urusPerformanteImg); setActiveUrusButton("performante"); setActiveUrusId(8)}}>Urus Performante</button>
                            </div>
                            <div className="buttons">
                                <button className="addFav" onClick={() => addToFavorites(activeUrusId)}>Add to favorites</button>
                                <button className="details_btn" onClick={() => handleNavigate(activeUrusId)}>See all details →</button>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev d-none d-md-block" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="custom-hex"><i className="bi bi-chevron-left"></i></span>
                </button>
                <button className="carousel-control-next d-none d-md-block" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="custom-hex"><i className="bi bi-chevron-right"></i></span>
                </button>
            </div>
        </div>
    )
}

export default CarouselComp;