import { MdDelete } from "react-icons/md";

export default function Wishlist({ wishlist, onRemoveFromWishlist }) {
  return (
    <div className="p-5 mt-12">
      <h1 className="text-xl font-bold mb-4">
        Wish List ({wishlist.length} items)
      </h1>

      {wishlist.length === 0 ? (
        <p>No items yet!</p>
      ) : (
        wishlist.map((item) => (

          <div className="">
            <div
              key={item.id}
              className="flex gap-4 border p-3 rounded mb-3 items-center"
            >
              <img src={item.image} alt={item.name} className="w-34 h-46 object-cover" />

              <div className="flex-1">
                <p className="text-red-500 font-bold">US ${item.price.toFixed(2)}</p>
                <h2>{item.name}</h2>

                <div className="flex gap-2 mt-2">
                  <button className="border px-3 py-1 rounded">Move to bag</button>
                  <button
                    className="border px-3 py-1 rounded bg-red-500 text-white cursor-pointer"
                    onClick={() => onRemoveFromWishlist(item.id)}
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}