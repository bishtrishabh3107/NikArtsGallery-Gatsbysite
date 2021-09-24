import React from "react"
import AbstractCarousel from "../atom/AbstractCarousel"
import BestSellerCarousel from "../atom/BestSellerCarousel"

function FirstScreen() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-3 -mt-24 md:-mt-24 lg:-mt-20 xl:-mt-16 2xl:-mt-16 mb-4 sm:mx-1 md:mx-10 lg:mx-14 xl:mx-16 2xl:mx-20 -mt-2">
      <div className="sm:mr-2 md:mr-4 lg:mr-6 xl:mr-8 2xl:mr-8 mr-2">
        <BestSellerCarousel />
      </div>
      <div className="sm:mr-2 md:mr-4 lg:mr-6 xl:mr-8 2xl:mr-8">
        <AbstractCarousel />
      </div>
    </div>
  )
}

export default FirstScreen
