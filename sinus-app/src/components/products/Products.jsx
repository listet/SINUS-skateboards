import './products.css'
import products from '../../assets/data.js'
import ProductCard from '../productCard/ProductCard.jsx'

function Products() {
    return (
        <section className='grid-section'>
            {
                products.map((product, index) => {
                    return <ProductCard
                        product={product}
                        key={index} />
                })
            }

        </section>
    )
}

export default Products
