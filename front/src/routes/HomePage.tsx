import bgVideo from "../assets/lamboShopVideo.mp4"
import CarouselComp from "../components/Carousel/CarouselComp";
import './HomePage.css';

export const HomePage = () => {
  return (
    <div className="homepage">

      <main className="homepage-main">
        <video className="background-video" autoPlay loop muted>
          <source src={bgVideo} type="video/mp4" />
          Tu navegador no soporta video.
        </video>

        <div className="content">
          <h1>Feel the road before you drive it</h1>
          <p>Discover quality, trust, and the best opportunities all in one place</p>
        </div>
      </main>

      <CarouselComp />
    </div>
  )
}

export default HomePage