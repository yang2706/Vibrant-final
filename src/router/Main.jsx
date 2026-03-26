import React, { useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Trending from '../pages/Trending'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Wishlist from '../component/Wishlist'

function Main() {
  const [wishlist, setWishlist] = useState([])

  // Add to wishlist
  const handleAddToWishlist = (product) => {
    setWishlist((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev
      return [...prev, product]
    })
  }

  // Remove from wishlist
  const handleRemoveFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id))
  }

  // Pages with Navbar
  function WithNav() {
    return (
      <div>
        <Navbar wishlistCount={wishlist.length} />
        <Outlet />
      </div>
    )
  }

  // Pages without Navbar (like login)
  function WithoutNav() {
    return (
      <div>
        <Outlet />
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WithNav />}>
          <Route
            path="/"
            element={<Home onAddToWishlist={handleAddToWishlist} wishlist={wishlist} />}
          />
          <Route path="/home" element={<Home onAddToWishlist={handleAddToWishlist} wishlist={wishlist}/>}/>
          <Route path="/shop" element={<Shop />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/wishlist"
            element={
              <Wishlist
                wishlist={wishlist}
                onRemoveFromWishlist={handleRemoveFromWishlist}
              />
            }
          />
        </Route>

        <Route element={<WithoutNav />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Main