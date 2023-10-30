import React, { useEffect, useState } from "react";
import '../Nerby.css'
import { useTranslation } from 'react-i18next';


function NearbyAsteroids () {
    const {t} = useTranslation();
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [asteroidsData, setAsteroidsData] = useState(null)

    
    function callTheFetch () {
        fetch(
            `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=guA7HsMfaMywaNrRoJljK45CerUdZ6ZRsjwQDtW5`,)
            .then(response => response.json())
            .then(result => {
                setAsteroidsData(result)
            })
    }

        const Row = () =>{
            let flatData = Object.keys(asteroidsData.near_earth_objects)
            .map(i=> asteroidsData.near_earth_objects[i]).flat();
          
        return (
            <>
                {flatData.map((k)=>
                    <tr key={k.id}>
                        <td>
                            {k.name}
                        </td>
                        <td>
                            {k.close_approach_data[0].miss_distance.kilometers}
                        </td>
                        <td>
                            {k.absolute_magnitude_h}
                        </td>
                        <td>
                            {k.is_potentially_hazardous_asteroid ? "YES" : "NO"}
                        </td>
                        <td>
                            {k.estimated_diameter.meters.estimated_diameter_max}
                        </td>
                    </tr>
                )}
            </>
           
        )
    } 
    return<>

    <p className="data">
        {t('Search_forAsteroids_based_on_their_closest_approach_date_toEarth')}
    </p>
    <div>
        <form className="data">
            <input className="data-1" id="startDate" 
                type="date" 
                placeholder="Select date" 
                aria-required='true' 
                autoComplete="off" 
                value={startDate}
                onChange={(event)=> setStartDate(event.target.value)}
            />
        
            <input className="data-2" id="endtDate" 
                type="date" 
                placeholder="Select date"  
                aria-required='true' 
                autoComplete="off"
                value={endDate}
                onChange={(event)=> setEndDate(event.target.value)}
            />
                
            <button className="buttGo" type="button" onClick={callTheFetch}>Go</button>
        </form>
    </div>
    <div className="tableDiv mtb-3">
        <table className="table">
            <thead className="table-row">
                <tr>
                    <th>{t("Title")}</th>
                    <th>{t("Distance(km)")}</th>
                    <th>{t("AbsoluteMagnitude")}</th>
                    <th>{t("Is_potentially_hazardous")}</th>
                    <th>{t("Diameter(meters)")}</th>
                </tr>
            </thead>
            <tbody className="row">
                {asteroidsData && <Row/>}
            </tbody>
        </table>
    </div>
    <footer className="copyright">©2023</footer>
    
    
</>
}

export default NearbyAsteroids;