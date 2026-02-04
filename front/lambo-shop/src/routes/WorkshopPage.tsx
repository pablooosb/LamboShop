import './WorkshopPage.css'
import workshopImg from "../assets/lamboShopWorkshop.png"
import workbenchImg from "../assets/lamboShopWorkshop2.png"
import mechanicImg from "../assets/lamboShopWorkshop3.png"


export const WorkshopPage = () => {
    return (
        <div className="workshoppage">
            <main className="workshoppage-main">
                <div className="first-content">
                    <img src={workshopImg} />
                    <h1>The sanctuary of exclusivity</h1>
                    <p>In the heart of the workshop, where the roar of the bull is refined, we don't just store parts—tenacious engineering meets pure aesthetic. From the polished curve of a custom rim to the precision-engineered flow of a high-performance exhaust, every component on these benches is a testament to automotive perfection. At LamboShop Exclusives, we don't follow the standard; we set the benchmark for those who demand nothing less than a masterpiece on wheels.</p>
                </div>

                <div className="second-content">
                    <img src={mechanicImg}/>
                        <div className="second-content-text">
                            <h1>Where craft meet chasis</h1>
                            <p>Beyond the gleaming lights of the showroom and the sterile perfection of organized parts, there is a place where the real magic happens—submerged in the shadows of the undercarriage, amidst the scent of oil and the cold touch of steel. This is the true soul of performance: a labor of love that requires as much patience as it does precision.<br />
                            It’s found in the quiet, meditative focus of a technician working beneath the weight of a masterpiece, where every millimeter matters and every bolt tells a story. It’s the rhythmic, deliberate turn of a wrench and the unwavering obsession with achieving that one, perfect exhaust note that makes the heart skip a beat. We don't just "install" components; we don't just swap parts. We curate an experience. We breathe life into dormant machines, transforming raw materials into an extension of the driver’s own will.<br />
                            Because at the end of the day, peak performance isn't just a number on a spec sheet or a brand name on a box. It’s the culmination of countless hours of expertise, the sacrifice of late nights in the garage, and the raw passion poured into every single inch of the build. Here, we don't just build cars—we forge icons.</p>
                        </div>
                </div>

                <div className="third-content">
                    <img src={workbenchImg} />
                    <div className="second-content-text">
                        <h1>The anatomy of performance</h1>
                        <p>They say perfection is an unattainable horizon, a ghost that many chase but few ever see. But in this space, perfection isn’t a goal—it’s the baseline. Every component you see, from the forged curvature of a lightweight rim to the heat-tempered precision of an exhaust manifold, has been curated with a singular, relentless purpose: to transform raw, chaotic power into a refined and surgical driving experience.<br />
                        This isn't merely a storage wall; it is a visual blueprint of peak performance. It is a library of speed, where every brake disc and every suspension link represents a chapter in the pursuit of the ultimate drive. We don't just "upgrade" vehicles; we deconstruct the limits of what is possible. We strip away the compromise of the assembly line to reveal the hidden soul of the machine.</p>
                    </div>
                </div>

                <div className="map-container">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2870.951466907411!2d11.031738215597204!3d44.52091297910359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd32c9a1e1c7d%3A0x37e6a4647f5b7f3e!2sVia%20Modena%2C%2012%2C%2040019%20Sant&#39;Agata%20Bolognese%20BO%2C%20Italia!5e0!3m2!1ses!2ses!4v1704247592913!5m2!1ses!2ses" >
                    </iframe>
                    </div>
            </main>
        </div>
    )
}

export default WorkshopPage