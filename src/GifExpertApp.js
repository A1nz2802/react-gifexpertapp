// rafc snippet para crear componente
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    // dentro del useState( valor inicial );
    const [ categories, setCategories ] = useState( ['Re:Zero'] );

    /* 
    const handleAdd = (e) => {
        const newCat = 'Hunter x Hunter';
        // setCategories( [...categories, newCat]  );
        setCategories( cats => [...cats, newCat] );
    }
    */
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />           

            <ul>
                {/* Expresión de JavaScript */}

                { 
                /* Se necesita una expresión que retorne algo */
                /* El ciclo for no retorna nada */
                    categories.map( category => 
                        /* La key sirve para que react sepa qué elemento está iterando */
                        <GifGrid
                            key={ category } 
                            category={ category }
                        />
                    )
                }
            </ul>
        </>
    )
}

export default GifExpertApp;