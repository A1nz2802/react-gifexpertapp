import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = ( e ) => {
        setInputValue( e.target.value )
    }

    const handleSubmit = (e) => {
        // Prevenir el comportamiento por defecto del formulario
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            // setCategories se puede llamar con un callback
            setCategories( cats => [ inputValue, ...cats ] );
            setInputValue('');
        }
        
    }
    
    return (
        <form onSubmit= { handleSubmit }>
            <input
                type="test"
                placeholder='Escribe algo ...'
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
        
    )

    // El fragment se utiliza para agrupar elementos html

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
