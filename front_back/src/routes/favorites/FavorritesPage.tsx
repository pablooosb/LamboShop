import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import './FavoritesPage.css';

interface FavoriteCar {
    id: number;
    name: string;
    img: string;
    cc: number | null;
    cv: number;
    maxSpeed: number;
    price: number | null;
}

const FavoritesPage: React.FC = () => {
    const [favorites, setFavorites] = useState<FavoriteCar[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCloudFavorites = async () => {
            const userStored = localStorage.getItem('user');
            if (!userStored) {
                setLoading(false);
                navigate('/login');
                return;
            }

            const user = JSON.parse(userStored);

            try {
                const favsCollectionRef = collection(db, "users_favorites", user.uid, "favorites");
                const querySnapshot = await getDocs(favsCollectionRef);
                
                const cloudFavs = querySnapshot.docs.map(doc => ({
                    ...doc.data()
                })) as FavoriteCar[];

                setFavorites(cloudFavs);
            } catch (error) {
                console.error("Error fetching favorites:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCloudFavorites();
    }, [navigate]);

    // If it is null, counts like 0
    const totalPrice = favorites.reduce((acc, car) => acc + (Number(car.price) || 0), 0);

    const removeFavorite = async (id: number) => {
        const userStored = localStorage.getItem('user');
        if (!userStored) return;
        const uid = JSON.parse(userStored).uid;

        if (window.confirm("Do you want to remove this car from your favorites garage?")) {
            try {
                await deleteDoc(doc(db, "users_favorites", uid, "favorites", id.toString()));
                setFavorites(favorites.filter(car => car.id !== id));
            } catch (error) {
                console.error("Error removing:", error);
            }
        }
    };

    if (loading) return <div style={{background: 'black', color: 'gold', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><h2>Loading your garage...</h2></div>;

    return (
        <div className="favorites-page">
            <div className="favorites-container">
                <header className="favorites-header">
                    <h2>Your Favorite Collection</h2>
                </header>

                {favorites.length === 0 ? (
                    <div className="empty-favorites">
                        <p>Your cloud garage is empty.</p>
                        <button onClick={() => navigate('/models')}>Explore Models</button>
                    </div>
                ) : (
                    <>
                        <div className="favorites-list">
                            {favorites.map((car) => (
                                <div key={car.id} className="favorite-item">
                                    <div className="car-info" onClick={() => navigate(`/details/${car.id}`)}>
                                        <img src={car.img} alt={car.name} className="car-thumb" />
                                        <div className="car-text-details">
                                            <h3>{car.name}</h3>
                                            <p>{car.cc !== null ? `${car.cc} cc` : 'N/A cc'} | {car.cv} CV | {car.maxSpeed} km/h</p>
                                            <span className="car-price">{car.price !== null && car.price > 0 ? `${car.price.toLocaleString()}€` : 'N/A'}</span>
                                        </div>
                                    </div>
                                    <button 
                                        className="remove-btn" 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            removeFavorite(car.id);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="favorites-summary">
                            <div className="total-box">
                                <h3>Total Value:</h3>
                                <span className="total-amount">{totalPrice.toLocaleString()}€</span>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default FavoritesPage;