import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    // useEffect permite ejecutar codigo de manera condicional
    // useEffect recibe una funcion (función que quiero ejecutar)

    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>
            
            { loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="card-grid">
                { 
                    images.map( img => (
                        <GifGridItem
                            key={ img.id } 
                            { ...img }
                        />
                    )) 
                }
                
            </div>
        </>
    )
}

// Custom Hook: Extraer la lógica de un componente que sea sencillo reutilizarla
