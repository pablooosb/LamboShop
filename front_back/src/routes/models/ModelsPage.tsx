import './ModelsPage.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'

interface CarModel {
    id: number;
    name: string;
    logo: string;
    img: string;
}

function ModelsPage() {
    const [modelsData, setModelsData] = useState<CarModel[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("Gama");
    const navigate = useNavigate();

    useEffect(() => {
        const getModels = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "models"));
                const docs: CarModel[] = [];
                querySnapshot.forEach((doc) => {
                    docs.push(doc.data() as CarModel);
                });
                // Order by id
                setModelsData(docs.sort((a, b) => a.id - b.id));
            } catch (error) {
                console.error("Error fetching models:", error);
            }
        };
        getModels();
    }, []);

    const filteredModels = modelsData.filter((model) => {
        const matchesSearch = model.name.toLowerCase().includes(searchTerm.toLowerCase());

        if (searchTerm !== "") {
            return matchesSearch;
        }

        let matchesCategory = false;
        if (category === "Gama") {
            matchesCategory = model.id >= 1 && model.id <= 8;
        } else if (category === "Limited Series") {
            matchesCategory = model.id >= 9 && model.id <= 12;
        } else if (category === "Prototipes") {
            matchesCategory = model.id >= 13 && model.id <= 15;
        }

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="models-container">
            <div className="page-header">
                <h1>Models</h1>

                <div className="search-container">
                    <input 
                        className="search-input" 
                        type="text" 
                        placeholder="Search model" 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="categories">
                <button className={category === "Gama" ? "active" : ""} onClick={() => setCategory("Gama")}>Gama</button>
                <button className={category === "Limited Series" ? "active" : ""} onClick={() => setCategory("Limited Series")}>Limited Series</button>
                <button className={category === "Prototipes" ? "active" : ""} onClick={() => setCategory("Prototipes")}>Prototipes</button>
            </div>

            <div className="models-grid">
                {filteredModels.length > 0 ? (
                    filteredModels.map((model) => (
                        <div key={model.id} className="model-card" onClick={() =>{navigate(`/details/${model.id}`); window.scrollTo(0, 0)}} style={{ cursor: 'pointer' }}>
                            <img src={model.img} alt={model.name} className="model-img" />
                            <h3 className="model-name">{model.name}</h3>
                        </div>
                    ))
                ) : (
                    <p className="no-results">No models found with "{searchTerm}"</p>
                )}
            </div>
        </div>
    );
}

export default ModelsPage