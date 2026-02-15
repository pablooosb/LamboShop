import './DetailsPage.css'
import { useParams } from 'react-router-dom'
import temerarioName from '/src/assets/temerario_center_desktop_dark.svg'
import temerarioImg from '/src/assets/temerario.png'
import temerarioVideo from '/src/assets/temerario.mp4'
import revueltoName from '/src/assets/revuelto_center_desktop_dark.svg'
import revueltoImg from '/src/assets/revuelto.png'
import revueltoVideo from '/src/assets/revuelto.mp4'
import huracanName from '/src/assets/huracan_center_desktop_dark.svg'
import huracanTecnicaImg from '/src/assets/huracanTecnica.png'
import huracanTecnicaVideo from '/src/assets/huracanTecnica.mp4'
import huracanStoImg from '/src/assets/huracanSto.png'
import huracanStoVideo from '/src/assets/huracanSto.mp4'
import huracanSterratoImg from '/src/assets/huracanSterrato.png'
import huracanSterratoVideo from '/src/assets/huracanSterrato.mp4'
import urusName from '/src/assets/urus_center_desktop_dark.svg'
import urusSeImg from '/src/assets/urusSe.png'
import urusSeVideo from '/src/assets/urusSe.mp4'
import UrusSImg from '/src/assets/urusS.png'
import UrusSVideo from '/src/assets/urusS.mp4'
import urusPerformanteImg from '/src/assets/urusPerformante.png'
import urusPerformanteVideo from '/src/assets/urusPerformante.mp4'
import fenomenoName from '/src/assets/fenomeno_center_desktop_dark.svg'
import fenomenoImg from '/src/assets/fenomeno.png'
import fenomenoVideo from '/src/assets/fenomeno.mp4'
import countachName from '/src/assets/countach_center_desktop_dark.svg'
import countachImg from '/src/assets/countach.png'
import countachVideo from '/src/assets/countach.mp4'
import sianName from '/src/assets/sian_center_desktop_dark.svg'
import sianImg from '/src/assets/sian.png'
import sianVideo from '/src/assets/sian.mp4'
import sianRoadsterName from '/src/assets/sian_roadster_center_desktop_dark.svg'
import sianRoadsterImg from '/src/assets/sianRoadster.png'
import sianRoadsterVideo from '/src/assets/sianRoadster.mp4'
import estoqueName from '/src/assets/estoque_center_desktop_dark.svg'
import estoqueImg from '/src/assets/estoque.png'
import estoqueVideo from '/src/assets/estoque.mp4'
import asteironName from '/src/assets/asteiron_center_desktop_dark.svg'
import asteironImg from '/src/assets/asteiron.png'
import asteironVideo from '/src/assets/asteiron.mp4'
import terzoMillenoName from '/src/assets/terzo_milleno_center_desktop_dark.svg'
import terzoMillenoImg from '/src/assets/terzoMilleno.png'
import terzoMillenoVideo from '/src/assets/terzoMilleno.mp4'

const MODELS_DATA = [
  { id: 1, name: 'Temerario', logo: temerarioName, img: temerarioImg, video: temerarioVideo, description: "The Lamborghini Temerario is a ruthless masterpiece of Italian engineering, a fearless evolution that transcends the boundaries of the supercar world. It is anchored by a bespoke twin-turbo V8 engine—a mechanical marvel capable of reaching a transcendental 10,000 RPM—delivering a visceral, high-pitched symphony that no other car on Earth can replicate. Measuring just over 4.7 meters in length with a widened, predator-like stance, its aerodynamic silhouette is a sharp strike of carbon fiber and light. This is not just a machine; it is the ultimate expression of power and prestige, designed to dominate the asphalt and define the future of speed.", cc: 4000, cv: 920, maxSpeed: 343, zeroToHundred: 2.7, price: 400000 },
  { id: 2, name: 'Revuelto', logo: revueltoName, img: revueltoImg, video: revueltoVideo, description: "The Lamborghini Revuelto is the undisputed king of a new era, a monumental fusion of raw heritage and futuristic brilliance that stands as the ultimate expression of automotive art. It is anchored by a legendary 6.5-liter naturally aspirated V12, a masterpiece of internal combustion that works in perfect harmony with a cutting-edge triple-motor system to redefine the limits of performance. Stretching nearly 4.9 meters in length, its body is a jagged, carbon-fiber masterpiece of Y-shaped design language and active aerodynamics. This is more than a flagship; it is a seismic shift in the universe of speed, a vehicle that commands the road with the roar of a titan and the precision of a spacecraft.", cc: 6500, cv: 1015, maxSpeed: 354, zeroToHundred: 2.5, price: 600000 },
  { id: 3, name: 'Huracan Tecnica', logo: huracanName, img: huracanTecnicaImg, video: huracanTecnicaVideo, description: "The Lamborghini Huracán Tecnica is the definitive tribute to the art of driving, a bridge between the purity of the track and the freedom of the open road. At its soul lies the iconic 5.2-liter naturally aspirated V10, an engine that delivers a raw, unadulterated soundtrack and a throttle response that feels like an extension of your own nerves. With a sharpened silhouette that sits at 4.57 meters long, the Tecnica features a redesigned, sophisticated aerodynamic profile that increases downforce while reducing drag. It is a masterpiece of balance and mechanical honesty, designed for those who seek the perfect lines of a circuit within the untamed beauty of the real world.", cc: 5204, cv: 640, maxSpeed: 325, zeroToHundred: 3.2, price: 345000 },
  { id: 4, name: 'Huracan STO', logo: huracanName, img: huracanStoImg, video: huracanStoVideo, description: "The Lamborghini Huracán STO is a street-legal racing weapon, a direct distillation of track-bred dominance into a masterpiece of road-going engineering. Built as a pure homage to Lamborghini’s motorsport heritage, it is powered by the legendary 5.2-liter naturally aspirated V10, an engine that breathes with an intensity only a circuit-focused machine can provide. Every millimetric detail of its 4.55-meter frame is dictated by the wind, featuring the iconic Cofango —a single-piece hood and fender assembly— and an imposing adjustable rear wing that keeps it glued to the tarmac. It is a lightweight, carbon-fiber predator that sacrifices nothing in its pursuit of aerodynamic perfection, offering the most visceral and unfiltered connection between driver and asphalt ever conceived.", cc: 5204, cv: 604, maxSpeed: 310, zeroToHundred: 3.0, price: 450000 },
  { id: 5, name: 'Huracan Sterrato', logo: huracanName, img: huracanSterratoImg, video: huracanSterratoVideo, description: "The Lamborghini Huracán Sterrato is a radical reinterpretation of the supercar, a fearless rebel designed to dominate where the asphalt ends and the dust begins. It carries the soul of the legendary 5.2-liter naturally aspirated V10, reimagined for a world without boundaries. Standing with a significantly increased ground clearance and a widened track, its 4.53-meter body is armored with reinforced sills, rugged wheel arches, and a signature roof air scoop to breathe in the wild. It is the first of its kind—a high-performance masterpiece that trades the racetrack for the gravel, proving that true power knows no limits and that the ultimate driving thrill can be found in the dirt.", cc: 5204, cv: 610, maxSpeed: 260, zeroToHundred: 3.4, price: 390000 },
  { id: 6, name: 'Urus SE', logo: urusName, img: urusSeImg, video: urusSeVideo, description: "The Lamborghini Urus SE is the ultimate evolution of the Super SUV, a titan that flawlessly bridges the gap between raw power and a new era of electrified sophistication. At its heart lies a potent 4.0-liter twin-turbo V8 integrated with an advanced plug-in hybrid system, creating a mechanical force that is as sustainable as it is savage. Measuring over 5.1 meters in length, its redesigned silhouette features optimized aerodynamics and a bold new aesthetic that commands respect on any terrain. This is the definitive masterpiece of versatility—a vehicle that retains the thunderous soul of a Lamborghini while offering the whisper-quiet precision of electric drive, proving that you can truly have it all.", cc: 3996, cv: 800, maxSpeed: 312, zeroToHundred: 3.4, price: 330000 },
  { id: 7, name: 'Urus S', logo: urusName, img: UrusSImg, video: UrusSVideo, description: "The Lamborghini Urus S is the definitive expression of lifestyle and performance, a Super SUV that balances brutal power with an unmistakable presence. It is driven by the legendary 4.0-liter twin-turbo V8, an engine that delivers a thunderous, authoritative roar and a level of acceleration that defies its grand 5.11-meter stature. With a sophisticated design that emphasizes athletic elegance, it features sharpened bumpers and refined aerodynamic lines that make it the ultimate statement on any road. It is a masterpiece of versatility, designed for those who demand the soul of a supercar without ever compromising on luxury, space, or the ability to conquer every journey with absolute confidence.", cc: 3996, cv: 666, maxSpeed: 305, zeroToHundred: 3.5, price: 365000 },
  { id: 8, name: 'Urus Performante', logo: urusName, img: urusPerformanteImg, video: urusPerformanteVideo, description: "The Lamborghini Urus Performante is the raw, unfiltered athlete of the Super SUV world, a machine engineered to push the boundaries of physics on both pavement and dirt. Stripped of excess and honed for aggression, it is powered by the formidable 4.0-liter twin-turbo V8, retuned to deliver a sharper, more visceral response through its lightweight titanium exhaust. Its 5.13-meter frame is a masterclass in carbon-fiber engineering, featuring a lower, broader stance and a prominent rear spoiler that increases downforce for surgical handling. This is a high-performance predator that trades luxury for lap times, standing as the ultimate proof that a soul of a supercar can thrive within the body of a titan.", cc: 3996, cv: 666, maxSpeed: 306, zeroToHundred: 3.3, price: 410000 },
  { id: 9, name: 'Fenomeno', logo: fenomenoName, img: fenomenoImg, video: fenomenoVideo, description: "The Lamborghini Fenomeno is an ultra-exclusive masterpiece, a few-off creation that celebrates the ultimate zenith of the V12 era. It is built around a legendary 6.5-liter naturally aspirated V12, which in this final expression reaches its most powerful form ever, assisted by a sophisticated hybrid system to deliver a truly monumental driving experience. Measuring just over 5 meters in length, its longtail silhouette is a design manifesto—a striking, carbon-fiber sculpture characterized by its predatory stance and radical aerodynamics that increase cooling by 30%. With only 29 units in existence, the Fenomeno is not just a car; it is a rare, high-revving phantom designed to be the fastest and most provocative bull to ever leave Sant'Agata Bolognese.", cc: 6498, cv: 1080, maxSpeed: 361, zeroToHundred: 2.4, price: 3250000 },
  { id: 10, name: 'Countach', logo: countachName, img: countachImg, video: countachVideo, description: "The Lamborghini Countach LPI 800-4 is a breathtaking resurrection of a legend, bridging the gap between a glorious past and a high-tech future. This modern masterpiece is driven by a potent 6.5-liter naturally aspirated V12 hybrid powertrain, utilizing innovative supercapacitor technology to deliver a seamless and relentless surge of power. Stretching to 4.87 meters in length, its carbon-fiber body is a clean, sophisticated homage to the original’s sharp lines, reimagined with contemporary aerodynamic precision. It is an ultra-exclusive tribute to the car that changed everything—a 221-mph vision of elegance and fury that proves some legends never truly die.", cc: 6498, cv: 814, maxSpeed: 355, zeroToHundred: 2.8, price: 2800000 },
  { id: 11, name: 'Sian', logo: sianName, img: sianImg, video: sianVideo, description: "The Lamborghini Sián FKP 37 is a visionary masterpiece that marks the dawn of a new era, standing as the first super sports car to be powered by a V12 engine integrated with groundbreaking supercapacitor technology. This revolutionary hybrid heart delivers a seamless, lightning-fast response that traditional batteries simply cannot match, preserving the raw, thunderous soul of the naturally aspirated 6.5-liter titan. Measuring 4.98 meters in length, its design is a geometric marvel inspired by the Countach, featuring Terzo Millennio light signatures and an intricate carbon-fiber skin that manipulates the air with surgical precision. With only 63 units ever produced, the Sián is a rare, 217-mph lightning bolt that serves as the ultimate bridge between Lamborghini's historic past and its electric future.", cc: 6498, cv: 819, maxSpeed: 355, zeroToHundred: 2.9, price: 4000000 },
  { id: 12, name: 'Sian Roadster', logo: sianRoadsterName, img: sianRoadsterImg, video: sianRoadsterVideo, description: "The Lamborghini Sián Roadster is an open-air masterpiece of extreme engineering, a limited-edition marvel that allows the roar of its 6.5-liter naturally aspirated V12 to flow directly into the cockpit. As one of the rarest cars ever to leave Sant'Agata Bolognese, it utilizes pioneering supercapacitor technology to provide an instantaneous, electrified surge of power that perfectly complements its combustion heart. Measuring nearly 5 meters in length, its roofless silhouette is a futuristic sculpture of Y-shaped headlights and periscope-inspired lines that channel the air with absolute efficiency. With only 19 units in existence, the Sián Roadster is the ultimate expression of exclusivity and freedom—a 217-mph lightning bolt that offers an unfiltered connection to the sky and the soul of Lamborghini.", cc: 6498, cv: 819, maxSpeed: 350, zeroToHundred: 2.9, price: 5000000 },
  { id: 13, name: 'Estoque', logo: estoqueName, img: estoqueImg, video: estoqueVideo, description: "The Lamborghini Estoque is a groundbreaking masterpiece of elegance and aggression, a concept that redefined the Super Sedan by proving that the soul of a bull could thrive in a four-door silhouette. At its heart lies a formidable 5.2-liter naturally aspirated V10—the same high-revving powerhouse found in the Gallardo—repositioned to a front-mid configuration for perfect balance. Measuring a commanding 5.15 meters in length and sitting just 1.35 meters off the ground, its low-slung, carbon-fiber skin flows with the sharp, razor-edged lines characteristic of Lamborghini’s most iconic designs. Named after the matador's sword, the Estoque remains a legendary what if in automotive history—a sophisticated titan that combined the luxury of a grand tourer with the uncompromising fury of a supercar.", cc: 5204, cv: 560, maxSpeed: 293, zeroToHundred: 4.0, price: null },
  { id: 14, name: 'Asteiron', logo: asteironName, img: asteironImg, video: asteironVideo, description: "The Lamborghini Asterion is a masterpiece of refined power and technological foresight, a Hyper-Cruiser that introduced the world to the brand’s first serious foray into electrification. Beneath its elegant exterior lies a sophisticated plug-in hybrid heart, combining the iconic 5.2-liter naturally aspirated V10 with three high-performance electric motors to create a driving experience that is as silent as it is savage. Stretching to 4.7 meters in length, its silhouette departs from sharp, jagged edges in favor of sensual, fluid curves that pay homage to the classic Grand Tourers of the 60s. This concept is a unique titan in the Lamborghini lineage—a sophisticated, high-speed laboratory on wheels that proved the legendary soul of Sant'Agata could be both luxurious and remarkably intelligent.", cc: "N/A", cv: 1360, maxSpeed: 312, zeroToHundred: 2.3, price: null },
  { id: 15, name: 'Terzo Milleno', logo: terzoMillenoName, img: terzoMillenoImg, video: terzoMillenoVideo, description: "The Lamborghini Lanzador is a defiant vision of the Ultra GT, a high-clearance 2+2 masterpiece that marks the brand's bold transition into a fully electric future. Driven by high-performance electric motors on each axle that deliver over one megawatt of peak power, it maintains the visceral DNA of Sant'Agata through advanced active aerodynamics and a sophisticated torque-vectoring system. Its silhouette is a stunning blend of the Urus's versatility and the Huracán Sterrato’s adventurous spirit, featuring a sustainable, futuristic interior that feels like a pilot's cockpit. It is a trailblazing titan designed for a new generation, proving that Lamborghini can electrify the senses without losing its untamed soul.", cc: "N/A", cv: 800, maxSpeed: 307, zeroToHundred: 2.4, price: null }
];

function DetailsPage() {
  const { id } = useParams()
  const model = MODELS_DATA.find((m) => m.id === Number(id))

  const handleAddToFavorites = () => {
    if (!model) return;

    // Actual favorites
    const currentFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    // Verify if exists
    const exists = currentFavorites.some((item: any) => item.id === model.id);

    if (!exists) {
      const newFavorites = [...currentFavorites, model];
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      alert(`${model.name} added to favorites!`);
    } else {
      alert(`${model.name} is already in your favorites.`);
    }
  };

  if (!model) {
    return <h2>Model not found</h2>;
  }

  return (
    <div className="details">
      <main className="homepage-main">
        <video key={model.video} className="background-video" autoPlay loop muted>
          <source src={model.video} type="video/mp4" />
          Your browser does not support video.
        </video>
      </main>

      <div className="main-container container">
        <img className="name" src={model.logo} alt={`${model.name} logo`} />
        <img className="image" src={model.img} alt={model.name} />
        
        <p className="description">
          {model.description}
        </p>

        <div className="caracteristics">
          <div className="cc">
            <p className="titles">Cubic Centimiters</p>
            <p className="text">{model.cc} cc</p>
          </div>
          <div className="cv">
            <p className="titles">Horse Power</p>
            <p className="text">{model.cv} cv</p>
          </div>
          <div className="maxSpeed">
            <p className="titles">Max Speed</p>
            <p className="text">{model.maxSpeed} km/h</p>
          </div>
          <div className="zeroToHundred">
            <p className="titles">0 - 100 km/h</p>
            <p className="text">{model.zeroToHundred} s</p>
          </div>
        </div>

        <div className="price">
          <p>Price: <span>{model.price ? `${model.price.toLocaleString()}€` : 'N/A'}</span></p>
        </div>
        
        <div className="button">
          <button className="addFav" onClick={handleAddToFavorites}>
            Add to favorites
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;