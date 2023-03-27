import allPokemon from './pokemon.json'
import { useEffect, useState } from 'react';
import styles from './PokedexPage.module.css';
import {useParams} from "react-router-dom";
import NotFoundPage from "./NotFoundPage.jsx";

/**
 * Renders information about a pokemon with the given id.
 */
export default function PokedexPage() {
    const { id } =  useParams();
    const int_id = parseInt(id)
    const [isLoaded, setLoaded] = useState(false);
    const [imgSrc, setImgSrc] = useState(undefined);
    const pokemon = allPokemon.find(mon => mon.id === int_id);

    // This effect will, whenever the id changes, set "loaded" back to false before loading the new image.
    // This is the only way I could figure out how to make this thing work.



    if (int_id >= 1 && int_id <=150){
        useEffect(() => {
            if (imgSrc !== pokemon.imageUrl) {
                setLoaded(false);
                setImgSrc(pokemon.imageUrl);
            }
        }, [int_id]);

        return (
            <div className={styles.container}>
                <h1>{pokemon.name}</h1>
                {!isLoaded && <PlaceholderImage/>}
                <img className={styles.dexImage}
                     style={{display: isLoaded ? undefined : 'none'}}
                     src={imgSrc}
                     onLoadStart={() => console.log('Start Loading...')}
                     onLoad={() => setLoaded(true)}/>

                <p>{pokemon.dexEntry}</p>

            </div>
        );

    }
    else {
        return <NotFoundPage />;
    }
}

/**
 * When the main image hasn't yet been loaded from the internet, this is rendered instead - a spinning poke'ball placeholder image.
 */
function PlaceholderImage() {
    return (
        <img className={styles.placeholderImage} src="white-pokeball.png" />
    )
}