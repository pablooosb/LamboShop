import './ModelsPage.css';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
import fenomenoName from '/src/assets/fenomeno_center_light.png'
import fenomenoImg from '/src/assets/fenomeno.png'
import countachName from '/src/assets/countach_center_light.png'
import countachImg from '/src/assets/countach.png'
import sianName from '/src/assets/sian_center_light.png'
import sianImg from '/src/assets/sian.png'
import sianRoadsterName from '/src/assets/sian_roadster_center_light.png'
import sianRoadsterImg from '/src/assets/sianRoadster.png'
import estoqueName from '/src/assets/estoque_center_light.png'
import estoqueImg from '/src/assets/estoque.png'
import asteironName from '/src/assets/asteiron_center_light.png'
import asteironImg from '/src/assets/asteiron.png'
import terzoMillenoName from '/src/assets/terzo_milleno_center_light.png'
import terzoMillenoImg from '/src/assets/terzoMilleno.png'

// prueba para luego poner la base de datos
const MODELS_DATA = [
  { id: 1, name: 'Temerario', logo: temerarioName, img: temerarioImg },
  { id: 2, name: 'Revuelto', logo: revueltoName, img: revueltoImg },
  { id: 3, name: 'Huracan Tecnica', logo: huracanName, img: huracanTecnicaImg },
  { id: 4, name: 'Huracan STO', logo: huracanName, img: huracanStoImg },
  { id: 5, name: 'Huracan Sterrato', logo: huracanName, img: huracanSterratoImg },
  { id: 6, name: 'Urus SE', logo: urusName, img: urusSeImg },
  { id: 7, name: 'Urus S', logo: urusName, img: UrusSImg },
  { id: 8, name: 'Urus Performante', logo: urusName, img: urusPerformanteImg },
  { id: 9, name: 'Fenomeno', logo: fenomenoName, img: fenomenoImg },
  { id: 10, name: 'Countach', logo: countachName, img: countachImg },
  { id: 11, name: 'Sian', logo: sianName, img: sianImg },
  { id: 12, name: 'Sian Roadster', logo: sianRoadsterName, img: sianRoadsterImg },
  { id: 13, name: 'Estoque', logo: estoqueName, img: estoqueImg },
  { id: 14, name: 'Asteiron', logo: asteironName, img: asteironImg },
  { id: 15, name: 'Terzo Milleno', logo: terzoMillenoName, img: terzoMillenoImg }
];

function ModelsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const [category, setCategory] = useState("Gama")

  const filteredModels = MODELS_DATA.filter((model) => {
    //filter by name
    const matchesSearch = model.name.toLowerCase().includes(searchTerm.toLowerCase())

    //search regardless of category
    if (searchTerm !== ""){
      return matchesSearch
    }

    //filter by category
    let matchesCategory = false;
    if (category === "Gama"){
      matchesCategory = model.id >= 1 && model.id <= 8
    } else if (category === "Limited Series"){
      matchesCategory = model.id >= 9 && model.id <= 12
    } else if (category === "Prototipes"){
      matchesCategory = model.id >= 13 && model.id <= 15
    }

    return matchesSearch && matchesCategory
  });

  const navigate = useNavigate()

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
            <div key={model.id} className="model-card" onClick={() => navigate(`/details/${model.id}`)} style={{ cursor: 'pointer' }}>
              <img src={model.logo} alt={model.name} className="model-logo" />
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

export default ModelsPage;