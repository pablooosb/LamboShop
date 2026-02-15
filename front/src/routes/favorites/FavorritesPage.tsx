import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FavoritesPage.css';

const FavoritesPage: React.FC = () => {
    const [favorites, setFavorites] = useState<any[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = !!localStorage.getItem('userToken');
        
        if (!isAuthenticated) {
            navigate('/login');
        } else {
            const savedFavs = JSON.parse(localStorage.getItem('favorites') || '[]');
            setFavorites(savedFavs);
        }
    }, [navigate]);

    const totalPrice = favorites.reduce((acc, car) => acc + (car.price || 0), 0);

    const removeFavorite = (id: number) => {
        const updatedFavs = favorites.filter(car => car.id !== id);
        setFavorites(updatedFavs);
        localStorage.setItem('favorites', JSON.stringify(updatedFavs));
        window.dispatchEvent(new Event('storage'));
    };

    const clearAll = () => {
        if (window.confirm("Are you sure you want to clear all favorites?")) {
            setFavorites([]);
            localStorage.removeItem('favorites');
            window.dispatchEvent(new Event('storage'));
        }
    };

    return (
        <div className="favorites-page">
            <div className="favorites-container">
                <header className="favorites-header">
                    <h2>Your favorite collection</h2>
                    {favorites.length > 0 && (
                        <button className="clear-btn" onClick={clearAll}>Clear All</button>
                    )}
                </header>

                {favorites.length === 0 ? (
                    <div className="empty-favorites">
                        <p>Your favorites list is empty.</p>
                        <button onClick={() => navigate('/models')}>Explore Models</button>
                    </div>
                ) : (
                    <>
                        <div className="favorites-list">
                            {favorites.map((car) => (
                                <div key={car.id} className="favorite-item">
                                    <div className="car-info" onClick={() => navigate(`/details/${car.id}`)}>
                                        <img src={car.img} alt={car.name} className="car-thumb" />
                                        <div>
                                            <h3>{car.name}</h3>
                                            <p>{car.cv} CV | {car.maxSpeed} km/h</p>
                                            <span className="car-price">
                                                {car.price ? `${car.price.toLocaleString()}€` : 'N/A'}
                                            </span>
                                        </div>
                                    </div>
                                    <button 
                                        className="remove-btn" 
                                        onClick={() => removeFavorite(car.id)}
                                        title="Remove from favorites"
                                    >
                                        <i className="bi bi-trash"></i> Delete
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