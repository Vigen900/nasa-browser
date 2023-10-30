import { useTranslation } from 'react-i18next';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NearbyAsteroids from './pages/NearbyAsteroids';
import DayPicthure from './pages/DayPicthure';
import NewPlanet from './pages/NewPlanet';
import i18n from './i18n';
import { useState } from "react";
import LocaleContext from './LocaleContext';

function App() {
  const { t } = useTranslation();
  const [locale, setLocale] = useState(i18n.language);
  
  
  function changeLanguage(lang) {
    i18n.changeLanguage(lang)
  }
  
  return (
    <>
    <LocaleContext.Provider value={{locale, setLocale}}>
      <header className='head'>
          {t("NASA_BROWSER")}  
        </header>
        <div className='parent'>
          <Link to="/">{t('home')}</Link>|
          <Link to="/nearbyAsteroids">{t('nearbyAsteroids')}</Link>|
          <Link to="/dayPicthure">{t('AstranomyPictureOfTheDay')}</Link>|
          <Link to="/newPlanet">{t('SubmitNewPlanet')}</Link>
          <button onClick={() => changeLanguage('en')} className='langButt'><span>EN</span></button>
          <button onClick={() => changeLanguage('hy')} className='langButt'><span>ՀՅ</span></button>
        </div>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/nearbyAsteroids' element={<NearbyAsteroids/>}/>
          <Route path='/dayPicthure' element={<DayPicthure/>}/>
          <Route path='/newPlanet' element={<NewPlanet/>}/>
        </Routes>
      </LocaleContext.Provider>
    </>
  
  );
}

export default App;
