import './DetailsPage.css'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { db } from '../../firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'

interface CarModel {
    id: number;
    name: string;
    logo: string;
    img: string;
    video: string;
    description: string | null;
    cc: number | null;
    cv: number;
    maxSpeed: number;
    zeroToHundred: number;
    price: number | null;
}

function DetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [model, setModel] = useState<CarModel | null>(null);

    useEffect(() => {
        const getModelDetails = async () => {
            if (!id) return;
            try {
                const docRef = doc(db, "models", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setModel(docSnap.data() as CarModel);
                }
            } catch (error) {
                console.error("Error fetching document:", error);
            }
        };

        getModelDetails();
    }, [id]);

    const handleAddToFavorites = async () => {
        if (!model) return;
        
        const userStored = localStorage.getItem('user');
        if (!userStored) {
            alert("Please login to save favorites!");
            navigate('/login');
            return;
        }

        const user = JSON.parse(userStored);

        try {
            const favRef = doc(db, "users_favorites", user.uid, "favorites", model.id.toString());
            await setDoc(favRef, model);
            alert(`${model.name} added to your cloud garage!`);
        } catch (error) {
            console.error("Error saving favorite:", error);
            alert("Cloud error. Check your connection.");
        }
    };

    if (!model) {
        return <div style={{backgroundColor: 'black', height: '100vh', textAlign: 'center', color: 'white', paddingTop: '100px'}}><h2>Model not found</h2></div>;
    }

    return (
        <div className="details">
            <main className="homepage-main">
                <video key={model.video} className="background-video" autoPlay loop muted playsInline>
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
                        <p className="titles">Cubic Centimeters</p>
                        <p className="text">
                            {model.cc !== null ? `${model.cc} cc` : 'N/A'}
                        </p>
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
                    <p>Price: <span>{model.price !== null ? `${model.price.toLocaleString()}€` : 'N/A'}</span></p>
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