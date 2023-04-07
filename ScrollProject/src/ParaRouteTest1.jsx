import { useParallaxController } from 'react-scroll-parallax';
import COM732 from './images/COM732.jpg'
import styles from './ParaRouteTest.module.css'

export default function ParaRouteTest1(){
    const Image = () => {
        const parallaxController = useParallaxController();
        return <img className={styles.image} src= {COM732} onLoad={() => parallaxController.update()} />;
    }
    return (
        <div>
            {Image()}
        </div>
    )
}