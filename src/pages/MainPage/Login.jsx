import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../assets/styles/mainpage.css';
import { auth } from '../../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const { t } = useTranslation();
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      console.log(userCredentials);
    })
    .catch((error) => {
      console.log(error);
    })
  }

    return (
            <form onSubmit={signIn} className='app__mainpage_form'>
              <h3>{t('mainPage.mainPageForm.signIn')}</h3>
                <label className='app__mainpage_form_label'>{t('mainPage.mainPageForm.userName')}</label>
                <input 
                  className='app__mainpage_form_input' 
                  type='email' 
                  placeholder={t('mainPage.mainPageForm.enterEmail')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input><br/>
                <label className='app__mainpage_form_label'>{t('mainPage.mainPageForm.password')}</label>
                <input 
                  className='app__mainpage_form_input' 
                  type='password' 
                  placeholder={t('mainPage.mainPageForm.enterPassword')}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input><br/>
                <button type='submit'>{t('mainPage.mainPageForm.signIn')}</button>
            </form>
  )
}

export default Login
