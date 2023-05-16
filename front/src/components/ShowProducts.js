import React, {useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

// Se define constante desde donde se alimentan datos del back
const endpoint = 'http://localhost:8000/api'

const ShowProducts = () => {
    // Hook que permite añadir el estado de React a un componente de función
    // Arreglo. Constante llamada products y su función setProducts
    const [products,setProducts] = useState([])
    
    // Despues de renderizarse (Tabla) el componente entra en acción
    useEffect( ()=>{
        getAllProducts()
    }, [])

    const getAllProducts = async () => {
        // Para traer la información del back
        const response = await axios.get(`${endpoint}/products`)
        // Para actualizar estado actual
        setProducts(response.data)
        // console.log(response.data);
    }

    const deleteProduct = async (id) => {
        // Para borrar id seleccionado 
        await axios.delete(`${endpoint}/product/${id}`)
        // Para actualizar la tabla posteriormente a eliminar
        getAllProducts()
    }

  return (
    <div>
        <div className='d-grid gap-2'>
            <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
        </div>

        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { products.map((product)=>(
                    <tr key={product.id}>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                        <td>
                            <Link to={`/edit/${product.id}`} className='btn btn-warning'>Edit</Link>
                            <button onClick={ ()=>deleteProduct(product.id) } className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ShowProducts