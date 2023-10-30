import React, { useState } from "react";
import './daypic.css'
import { useTranslation } from 'react-i18next';

function DayPicthure () {
    const {t} = useTranslation();
    const [date, setdate] = useState("");
    const [apod, setapod] = useState({})

    
    function callTheFetch () {
        fetch(
            `https://api.nasa.gov/planetary/apod?api_key=cVUasrshPOxPr5P6t6s02sF2429lvWfmxEBSaA5c&date=${date}`,)
            .then(response => response.json())
            .then(result => {
                setapod(result)
            })
    } 
    return <>
        <p className="day_text_style"> {t('Each_day_a_different_image_or_photograph_of_our_fascinating_universe_is_featured,along_with_a_brief_explanation_written_by_a_professional_astronomer.')}</p>
        <input className="data-pic" id="date" 
        type="date" 
        placeholder="Select date" 
        aria-required='true' 
        autoComplete="off" 
        value={date}
        onChange={(event)=> setdate(event.target.value)}
    />
    <button className="buttonDay" onClick={callTheFetch}>Go</button>

    <div className="resp">
        <span className="respText">{apod.explanation}</span>
        <img className="dataImg" src={apod.url}/>
    </div>
    <br/>
    

    <footer className="copyright">©2023</footer>
</>

}

export default DayPicthure;