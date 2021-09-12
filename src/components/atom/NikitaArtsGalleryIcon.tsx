import React from "react"
import { GiPaintBrush } from "react-icons/gi"
import "../../assets/styles/index.scss"
import { motion } from "framer-motion"
import { Link } from "gatsby"

function NikitaArtsGalleryIcon() {
  return (
    <div>
      <Link to="/">
        <div className=" flex flex-row justify-center -mt-4 sm:-mt-5 md:-mt-6 lg:-mt-6 mb-2 ">
          <h1 className="nikiartsgallery-icon-font mx-1 my-2 text-gray-500 font-bold border-b-2 border-gray-500 lg:text-3xl xl:text-4xl 2xl:text-6xl">
            Nik{" "}
          </h1>
          <h1 className="nikiartsgallery-icon-font mr-1 my-1.5 text-gray-500 font-bold lg:text-3xl xl:text-4xl 2xl:text-6xl">
            Gallery{" "}
          </h1>
          <span className="text-gray-500 mx-1 mt-4 md:mt-4 lg:mt-4 xl:mt-4 lg:mt-1 text-lg md:text-xl lg:text-xl 2xl:text-6xl">
            <motion.div
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              whileHover={{ scale: 1.4 }}
            >
              <GiPaintBrush />
            </motion.div>
          </span>
        </div>
      </Link>
    </div>
  )
}

export default NikitaArtsGalleryIcon
