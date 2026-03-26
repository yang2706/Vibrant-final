import { useState, useEffect } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'

export default function Card({ product, onAddToWishlist, isLiked }) {
  const [liked, setLiked] = useState(isLiked || false)

  // Sync with parent wishlist
  useEffect(() => {
    setLiked(isLiked || false)
  }, [isLiked])

  const changeIcon = () => {
    setLiked(!liked)
    if (!liked) {
      onAddToWishlist(product)
    }
    
  }

  return (
    <div className="bg-white rounded-xl cursor-pointer shadow hover:shadow-lg transition p-3 relative">
      {/* Discount */}
      {product.discount && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          {product.discount}
        </span>
      )}

      {/* Image */}
      <div className="bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* Info */}
      <div className="mt-3">
        <p className="text-red-500 font-semibold">
          US ${product.price.toFixed(2)}
          {product.oldPrice && (
            <span className="text-gray-400 line-through text-sm ml-1">
              US ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </p>
        <h3 className="text-sm mt-1 font-medium">{product.name}</h3>
      </div>

      {/* Heart */}
      <div
        className="absolute bottom-3 right-3 text-xl cursor-pointer"
        onClick={changeIcon}
      >
        {liked ? <FaHeart /> : <FaRegHeart />}
      </div>
    </div>
  )
}