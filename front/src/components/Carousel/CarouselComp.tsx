import "./CarouselComp.css"
import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import temerarioName from '/src/assets/temerario_center_light.svg'
import temerarioWhiteName from '/src/assets/temerario_center_desktop_dark.svg'
import temerarioImg from '/src/assets/temerario.png'
import temerarioVideo from '/src/assets/temerario.mp4'
import revueltoName from '/src/assets/revuelto_center_light.svg'
import revueltoWhiteName from '/src/assets/revuelto_center_desktop_dark.svg'
import revueltoImg from '/src/assets/revuelto.png'
import revueltoVideo from '/src/assets/revuelto.mp4'
import huracanName from '/src/assets/huracan_center_light.svg'
import huracanWhiteName from '/src/assets/huracan_center_desktop_dark.svg'
import huracanTecnicaImg from '/src/assets/huracanTecnica.png'
import huracanTecnicaVideo from '/src/assets/huracanTecnica.mp4'
import huracanStoImg from '/src/assets/huracanSto.png'
import huracanStoVideo from '/src/assets/huracanSto.mp4'
import huracanSterratoImg from '/src/assets/huracanSterrato.png'
import huracanSterratoVideo from '/src/assets/huracanSterrato.mp4'
import urusName from '/src/assets/urus_center_light.svg'
import urusWhiteName from '/src/assets/urus_center_desktop_dark.svg'
import urusSeImg from '/src/assets/urusSe.png'
import urusSeVideo from '/src/assets/urusSe.mp4'
import UrusSImg from '/src/assets/urusS.png'
import UrusSVideo from '/src/assets/urusS.mp4'
import urusPerformanteImg from '/src/assets/urusPerformante.png'
import urusPerformanteVideo from '/src/assets/urusPerformante.mp4'

const MODELS_DATA = [
  { id: 1, name: 'Temerario', logo: temerarioWhiteName, img: temerarioImg, video: temerarioVideo, description: "The Lamborghini Temerario is a ruthless masterpiece of Italian engineering, a fearless evolution that transcends the boundaries of the supercar world. It is anchored by a bespoke twin-turbo V8 engine—a mechanical marvel capable of reaching a transcendental 10,000 RPM—delivering a visceral, high-pitched symphony that no other car on Earth can replicate. Measuring just over 4.7 meters in length with a widened, predator-like stance, its aerodynamic silhouette is a sharp strike of carbon fiber and light. This is not just a machine; it is the ultimate expression of power and prestige, designed to dominate the asphalt and define the future of speed." },
  { id: 2, name: 'Revuelto', logo: revueltoWhiteName, img: revueltoImg, video: revueltoVideo, description: "The Lamborghini Revuelto is the undisputed king of a new era, a monumental fusion of raw heritage and futuristic brilliance that stands as the ultimate expression of automotive art. It is anchored by a legendary 6.5-liter naturally aspirated V12, a masterpiece of internal combustion that works in perfect harmony with a cutting-edge triple-motor system to redefine the limits of performance. Stretching nearly 4.9 meters in length, its body is a jagged, carbon-fiber masterpiece of Y-shaped design language and active aerodynamics. This is more than a flagship; it is a seismic shift in the universe of speed, a vehicle that commands the road with the roar of a titan and the precision of a spacecraft." },
  { id: 3, name: 'Huracan Tecnica', logo: huracanWhiteName, img: huracanTecnicaImg, video: huracanTecnicaVideo, description: "The Lamborghini Huracán Tecnica is the definitive tribute to the art of driving, a bridge between the purity of the track and the freedom of the open road. At its soul lies the iconic 5.2-liter naturally aspirated V10, an engine that delivers a raw, unadulterated soundtrack and a throttle response that feels like an extension of your own nerves. With a sharpened silhouette that sits at 4.57 meters long, the Tecnica features a redesigned, sophisticated aerodynamic profile that increases downforce while reducing drag. It is a masterpiece of balance and mechanical honesty, designed for those who seek the perfect lines of a circuit within the untamed beauty of the real world." },
  { id: 4, name: 'Huracan STO', logo: huracanWhiteName, img: huracanStoImg, video: huracanStoVideo, description: "The Lamborghini Huracán STO is a street-legal racing weapon, a direct distillation of track-bred dominance into a masterpiece of road-going engineering. Built as a pure homage to Lamborghini’s motorsport heritage, it is powered by the legendary 5.2-liter naturally aspirated V10, an engine that breathes with an intensity only a circuit-focused machine can provide. Every millimetric detail of its 4.55-meter frame is dictated by the wind, featuring the iconic Cofango —a single-piece hood and fender assembly— and an imposing adjustable rear wing that keeps it glued to the tarmac. It is a lightweight, carbon-fiber predator that sacrifices nothing in its pursuit of aerodynamic perfection, offering the most visceral and unfiltered connection between driver and asphalt ever conceived." },
  { id: 5, name: 'Huracan Sterrato', logo: huracanWhiteName, img: huracanSterratoImg, video: huracanSterratoVideo, description: "The Lamborghini Huracán Sterrato is a radical reinterpretation of the supercar, a fearless rebel designed to dominate where the asphalt ends and the dust begins. It carries the soul of the legendary 5.2-liter naturally aspirated V10, reimagined for a world without boundaries. Standing with a significantly increased ground clearance and a widened track, its 4.53-meter body is armored with reinforced sills, rugged wheel arches, and a signature roof air scoop to breathe in the wild. It is the first of its kind—a high-performance masterpiece that trades the racetrack for the gravel, proving that true power knows no limits and that the ultimate driving thrill can be found in the dirt." },
  { id: 6, name: 'Urus SE', logo: urusWhiteName, img: urusSeImg, video: urusSeVideo, description: "The Lamborghini Urus SE is the ultimate evolution of the Super SUV, a titan that flawlessly bridges the gap between raw power and a new era of electrified sophistication. At its heart lies a potent 4.0-liter twin-turbo V8 integrated with an advanced plug-in hybrid system, creating a mechanical force that is as sustainable as it is savage. Measuring over 5.1 meters in length, its redesigned silhouette features optimized aerodynamics and a bold new aesthetic that commands respect on any terrain. This is the definitive masterpiece of versatility—a vehicle that retains the thunderous soul of a Lamborghini while offering the whisper-quiet precision of electric drive, proving that you can truly have it all." },
  { id: 7, name: 'Urus S', logo: urusWhiteName, img: UrusSImg, video: UrusSVideo, description: "The Lamborghini Urus S is the definitive expression of lifestyle and performance, a Super SUV that balances brutal power with an unmistakable presence. It is driven by the legendary 4.0-liter twin-turbo V8, an engine that delivers a thunderous, authoritative roar and a level of acceleration that defies its grand 5.11-meter stature. With a sophisticated design that emphasizes athletic elegance, it features sharpened bumpers and refined aerodynamic lines that make it the ultimate statement on any road. It is a masterpiece of versatility, designed for those who demand the soul of a supercar without ever compromising on luxury, space, or the ability to conquer every journey with absolute confidence." },
  { id: 8, name: 'Urus Performante', logo: urusWhiteName, img: urusPerformanteImg, video: urusPerformanteVideo, description: "The Lamborghini Urus Performante is the raw, unfiltered athlete of the Super SUV world, a machine engineered to push the boundaries of physics on both pavement and dirt. Stripped of excess and honed for aggression, it is powered by the formidable 4.0-liter twin-turbo V8, retuned to deliver a sharper, more visceral response through its lightweight titanium exhaust. Its 5.13-meter frame is a masterclass in carbon-fiber engineering, featuring a lower, broader stance and a prominent rear spoiler that increases downforce for surgical handling. This is a high-performance predator that trades luxury for lap times, standing as the ultimate proof that a soul of a supercar can thrive within the body of a titan." },
];

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
                <div className="seeAll" onClick={() => {navigate('/models'); window.scrollTo(0, 0)}}>See all →</div>
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
                                <button className="details_btn">See all details →</button>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="slide-content">
                            <img src={revueltoName} alt="Revuelto name" />
                            <img src={revueltoImg} alt="Revuelto image" />
                            <div className="buttons">
                                <button className="askOffer">Ask for offer →</button>
                                <button className="details_btn">See all details →</button>
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
                                <button className="details_btn">See all details →</button>
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
                                <button className="details_btn">See all details →</button>
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