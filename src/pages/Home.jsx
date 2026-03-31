import React from 'react'
import { products } from '../data'
import Card from '../component/Card'
import Carousel from '../component/Carousel'
import Discount from './Discount'
import { Link } from 'react-router-dom'

function Home({ onAddToWishlist, onRemoveFromWishlist, wishlist }) {
  const limitedProducts = products.slice(0, 4);
  return (
    <div>
      <Discount />
      <Carousel />
      
        <div className='flex justify-between mt-8 ml-2 mr-2 items-center'>
          <div className='text-4xl font-bold text-black/80'>
              Our new product here!
          </div>
          <Link to="/shop">
          <div className='text-lg font-bold'>
              Shop more
          </div>
          </Link>
        </div>
      

      <div className="grid grid-cols-1 ml-2 mr-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
        {limitedProducts.map((item) => (
          <Card
            key={item.id}
            product={item}
            onAdd2ToWishlist={onAddToWishlist}
            onRemove2FromWishlist={onRemoveFromWishlist}
            isLiked={wishlist.some((w) => w.id === item.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Home