import React from 'react'
import { products } from '../data'
import Card from '../component/Card'
import Carousel from '../component/Carousel'
import Discount from './Discount'

function Home({ onAddToWishlist, wishlist }) {
  return (
    <div>
      <Discount />
      <Carousel />
      <div className="grid grid-cols-1 ml-2 mr-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
        {products.map((item) => (
          <Card
            key={item.id}
            product={item}
            onAddToWishlist={onAddToWishlist}
            isLiked={wishlist.some((w) => w.id === item.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Home