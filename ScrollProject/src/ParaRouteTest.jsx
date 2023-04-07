import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import comp from './images/COM732.jpg';
import {ParallaxRouteUpdate} from './App';
import styles from './ParaRouteTest.module.css'

export default function ParaRouteTest() {

  ParallaxRouteUpdate();
  return (
    <ParallaxProvider>
      <h1 className={styles.h11}>This is a Photo!!!</h1>
      <h1 className={styles.h11}>This is a Photo!!!</h1>
      <h1 className={styles.h11}>This is a Photo!!!</h1>
      <h1 className={styles.h11}>This is a Photo!!!</h1>
      <h1 className={styles.h11}>This is a Photo!!!</h1>
      <h1 className={styles.h11}>This is a Photo!!!</h1>
      <h1 className={styles.h11}>This is a Photo!!!</h1>
      <Parallax translateY = {[-2000,2000]}>
        <img className={styles.image} src = {comp} alt="Parallax image" />
      </Parallax>
      <h1 className={styles.h11}>This is a Photo!!!</h1>
      <h1 className={styles.h11}>This is a Photo!!!</h1>
      <h1 className={styles.h11}>This is a Photo!!!</h1>
      <h1 className={styles.h11}>This is a Photo!!!</h1>
      <h1 className={styles.h11}>This is a Photo!!!</h1>
      <h1 className={styles.h11}>This is a Photo!!!</h1>
      <h1 className={styles.h11}>This is a Photo!!!</h1>
      <h1 className={styles.h11}>This is a Photo!!!</h1>
      <h1 className={styles.h11}>This is a Photo!!!</h1>


    </ParallaxProvider>
  );
}

