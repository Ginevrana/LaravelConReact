import React, {useEffect,useState} from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'

// Se define constante desde donde se alimentan datos del back
const endpoint = 'http://localhost:8000/api'

const ShowProducts = () => {
    // Hook que permite añadir el estado de React a un componente de función
    // Arreglo. Constante llamada products y su función setProducts
    const [products,setProducts] = useState([])
    
    // Contador con variable que guardaría el estado de ese contador que inicia en 0
    const [count,setCount] = useState(0)
    
    // Despues de renderizarse (Tabla) el componente entra en acción
    useEffect( ()=>{
        getAllProducts()
    }, [])

    const getAllProducts = async () => {
        // Para traer la información del back
        const response = await axios.get(`${endpoint}/products`)
        // Para actualizar estado actual
        setProducts(response)
    }

    const deleteProduct = async (id) => {
        // Para borrar id seleccionado 
        await axios.delete(`${endpoint}/products/${id}`)
        // Para actualizar la tabla posteriormente a eliminar
        getAllProducts()
    }

  return (
    <div>Tabla</div>
  )
}

export default ShowProducts