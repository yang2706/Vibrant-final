import React from 'react'
import { products } from '../data'
import Card from '../component/Card'

function Shop({ onAddToWishlist,onRemoveFromWishlist, wishlist }) {
  return (
    <div className='mt-20'>
      <div className='text-2xl ml-2'>All products</div>
      <div className="grid grid-cols-1 ml-2 mr-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
        {products.map((item) => (
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

export default Shop