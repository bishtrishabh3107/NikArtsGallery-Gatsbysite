import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Carousel } from "react-responsive-carousel"
// import ReactMarkdown from "react-markdown"
import { FaInstagram } from "react-icons/fa"
import { HiOutlineBackspace } from "react-icons/hi"
import { Link } from "gatsby"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { motion } from "framer-motion"

function PaintingPage({
  name,
  image1,
  image2,
  description,
  dimension,
  price,
  date,
}) {
  const transition = {
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96],
  }

  const imageVariants = {
    initial: { y: "50%", opacity: 0, transition },
    exit: { y: "50%", opacity: 0, transition },
    enter: { y: "0%", opacity: 1, transition },
  }

  const backVariants = {
    initial: { x: 0, opacity: 1, transition: { delay: 0.5, ...transition } },
    exit: { x: 100, opacity: 0, transition },
    enter: { x: 0, opacity: 1, transition: { delay: 0.5, ...transition } },
  }

  return (
    <div>
      <div className="grid md:grid-cols-2 py-2 xl:py-2 2xl:py-2 border-2 lg:border-4 xl:border-8 2xl:border-8 border-indigo-600 divide-x divide-blue-400 shadow-lg shadow-inner sm:grid-cols-1g">
        <div>
          <div className="product-name-font uppercase text-lg xl:text-xl 2xl:text-5xl font-bold md:mt-6 lg:mt-6 xl:mt-6 xxl:mt-6">
            <h1>{name}</h1>
          </div>

          <motion.div
            className="-mt-24 md:-mt-28 lg:-mt-32 xl:-mt-32 xxl:-mt-32 mx-2 p-3 md:p-4 lg:p-8 xl:p-10 2xl:p-12"
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <motion.div variants={imageVariants}>
              <Carousel
                autoPlay={true}
                swipeable={true}
                showArrows={false}
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                interval={4000}
                showThumbs={false}
              >
                <div>
                  <GatsbyImage image={getImage(image1)} alt={name} />
                </div>
                <div>
                  <GatsbyImage image={getImage(image2)} alt={name} />
                </div>
              </Carousel>
              <div className="flex flex-row justify-center font-bold text-xs lg:text-md xl:text-xl 2xl:text-3xl mt-2">
                <h1>Dimensions:</h1>
                <div className="mx-1 text-yellow-600"> {dimension}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <motion.div initial="exit" animate="enter" exit="exit">
          <motion.div variants={backVariants}>
            <div className="px-3 font-bold py-1 md:py-2 lg:py-4 xl:py-5 2xl:py-6 flex flex-col justify-between">
              <div>
                <h1 className="mb-3 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-12 text-2xl 2xl:text-4xl">
                  <Link to="/">
                    <HiOutlineBackspace />
                  </Link>
                </h1>
                <h1 className="product-description-font text-left lg:text-md xl:text-lg 2xl:text-3xl my-2 md:my-4 lg:my-6 xl:my-8 2xl:my-10">
                  {description}
                </h1>
              </div>
              <div className="flex flex-row justify-evenly text-xs lg:text-md xl:text-lg 2xl:text-3xl">
                <h1>Price:</h1>
                <div className="mx-1 text-green-400">₹ {price}</div>
              </div>
              <div className="flex flex-row justify-evenly text-xs lg:text-md xl:text-lg 2xl:text-3xl my-2 md:my-4 lg:my-6 xl:my-8 2xl:my-10">
                <h1>To buy this Painting contact on:</h1>
                <div className="mx-1 text-green-400 -mt-0.5 lg:-mt-1.5 xl:-mt-1.5 2xl:-mt-1.5">
                  {" "}
                  <a
                    href="https://instagram.com/nikartssss"
                    className="text-blue-700 text-md lg:text-xl xl:text-2xl 2xl:3xl hover:text-blue-500"
                    target="_blank"
                  >
                    <FaInstagram className="instagram-icon" size="1.5em" />
                  </a>
                </div>
              </div>
              <div className="mt-2 text-xs lg:text-md xl:text-md 2xl:text-3xl">
                <h1>Published On: {date} </h1>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default PaintingPage
