import React from 'react'
import { useGetProductsQuery } from '../../apis/productApi'
import styles from './products.module.css'
import { Link } from 'react-router'

const products = () => {
    const { isLoading, data } = useGetProductsQuery()
    console.log(data)

    if (isLoading) {
        return <div>Loading...</div>;   
    }
  return (
    <div>
      <ul className={styles.product}>
        {data.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id} 
              style={{textDecoration: "none"}}
            >
              <div key={product.id}>
                <img className={styles.img} src={product.image} alt={product.name} />
                <p className={styles.p}>{product.title}</p>
                <p className={styles.p}>${product.price.toFixed(2)}</p>
                <p className={styles.p}>{product.description.slice(0, 30)}...</p>
            </div>
            </Link>
        ))}
      </ul>
    </div>
  )
}

export default products
