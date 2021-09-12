import React from "react"
import AbstractCarousel from "../atom/AbstractCarousel"
import BestSellerCarousel from "../atom/BestSellerCarousel"

function FirstScreen() {
  return (
    <div className="grid grid-cols-2 -mt-24 md:-mt-24 lg:-mt-20 xl:-mt-16 xxl:-mt-16 mb-4 sm:mx-6 md:mx-10 lg:mx-14 xl:mx-16 xxl:mx-20 -mt-2">
      <div className="sm:mr-2 md:mr-4 lg:mr-6 xl:mr-8 xxl:mr-8">
        <BestSellerCarousel />
      </div>
      <div className="sm:mr-2 md:mr-4 lg:mr-6 xl:mr-8 xxl:mr-8">
        <AbstractCarousel />
      </div>
    </div>
  )
}

export default FirstScreen
