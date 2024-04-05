import React from 'react'

function ProductCard({ product, index }) {
    return (
        <article className='productCard'>
            <section className='productCard__top-container'>
                <div className='productCard__div'>
                    {
                        product.category === 'skateboard' || product.category === 'wheel' ?
                            <h2 className='productCard__title'>{product.title}</h2> :
                            <h2 className='productCard__title'>{product.category}</h2>

                    }

                    <p className='productCard__info'>{product.shortDesc}</p>
                </div>
                <button className='productCard-btn'></button>
            </section>
        </article>
    )
}

export default ProductCard
