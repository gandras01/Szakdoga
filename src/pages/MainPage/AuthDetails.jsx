import React, { useEffect, useState } from 'react';
import { auth } from '../../services/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useTranslation } from 'react-i18next';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    const { t } = useTranslation();

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        });

        return () => {
            listen();
        }
    }, []);

    const userSingOut = () => {
        signOut(auth).then(() => {
            console.log('Sign out was succesful!')
        }).catch(error => console.log(error));
    };

  return (
    <div className='app__mainPage_message'>
        {authUser 
            ? <><p className='app__mainPage_text'>{t('mainPage.mainPageForm.signedIn')}</p><button onClick={userSingOut}>{t('mainPage.mainPageForm.signOut')}</button></>
            : <p className='app__mainPage_text'>{t('mainPage.mainPageForm.signedOut')}</p>}
    </div>
  )
}

export default AuthDetails
