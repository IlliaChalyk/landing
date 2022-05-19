import './App.css';
import { useEffect, useRef } from 'react';
import Button from './components/Button';
import Form from './components/Form';
import Header from './components/Header';
import showcaseImg from './images/podspire-showcase.png';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyBTjP5sXECt_sG6nvth52pJVUi2-TFpfeQ",
  authDomain: "podspire-b489e.firebaseapp.com",
  projectId: "podspire-b489e",
  storageBucket: "podspire-b489e.appspot.com",
  messagingSenderId: "336633918755",
  appId: "1:336633918755:web:dc260fd2ba3b4ba5260896",
  measurementId: "G-1YRHD2H0EQ"
});

const analytics = getAnalytics(app);
export const firestore = getFirestore(app);

const App = () => {
  const formRef = useRef(null);
  const executeScroll = () => formRef.current.scrollIntoView();

  return (
    <div className="container">
      <Header handleClick={executeScroll} />

      <div className="sect">
        <div className="sect-left">
          <p className='title'>One platform for listen to<br /> and publish podcasts</p>
          <p className='sub-title'>Leave comments, likes, and discuss<br /> with others</p>
          <p className='sub-title'>An algorithm that propose shows<br /> specially for you</p>
          <p className='sub-title last'>In your phone and in the<br /> browser. For free</p>
          <Button handleClick={executeScroll} clsName='gray' />
        </div>
        <div className="sect-right">
          <img className='images' src={showcaseImg} alt='Podspire UI showcase' />
        </div>
      </div>

      <Form innerRef={formRef} />
    </div>
  );
}

export default App;
