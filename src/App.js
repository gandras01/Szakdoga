import { useEffect } from 'react';
import Login from './pages/MainPage/Login';
import SignUp from './pages/MainPage/SignUp';
import hunFlag from './assets/images/hun.png';
import ukFlag from './assets/images/uk.png';
import { useSelector, useDispatch } from 'react-redux';
import { selectEnglish, selectHungarian } from './context/langSelector/langSlice';
import i18n from './utils/translater';
import './assets/styles/mainpage.css';
import AuthDetails from './pages/MainPage/AuthDetails';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import Exercises from './pages/Exercises/Exercise';

function App() {
  const { lang } = useSelector((store) => store.lang);
  const dispatch = useDispatch();
  useEffect(() => {}, [lang]);

  const switchToHu = (lang) => {
    dispatch(selectHungarian());
    i18n.changeLanguage(lang);
  };

  const switchToEn = (lang) => {
    dispatch(selectEnglish());
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div className='app__navbar'>
        <div className='app__link__home'>
          <Link to="/homepage">Home</Link>
        </div>
        <div className='app__link__exercise'>
          <Link to="/exercises">exercises</Link>
        </div>
      </div>
      <div className='app__mainpage_main_div'>
        <div className='app__mainpage_language_container'>
          <div className='app__mainpage_uk_flag'><img src={ukFlag} alt='UK flag' onClick={() => switchToEn('en')} /></div>
          <div className='app__mainpage_hun_flag'><img src={hunFlag} alt='HUN flag' onClick={() => switchToHu('hu')} /></div>
        </div>
        <div className='app__forms_div'>
          <Login />
          <SignUp />
          <AuthDetails />
        </div>
      </div>
      <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/exercises" element={<Exercises />} />
        </Routes>
    </>
  );
}

export default App;
