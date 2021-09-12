import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import AbstractScreen from "../components/organ/AbstractScreen"
import Layout from "../components/Global/Layout"
import "../assets/styles/index.scss"
import { motion } from "framer-motion"
import PaintingMainScreenCard from "../components/atom/PaintingMainScreenCard"
import { BsFillAwardFill } from "react-icons/bs"
import ReactTextTransition, { presets } from "react-text-transition"

const TEXTS = ["BEST SELLERS", "POPULARS", "IN-SPOTLIGHT"]

function BestSellerPaintings() {
  const data = useStaticQuery(query)

  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex(index => index + 1),
      2000 // every 3 seconds
    )
    return () => clearTimeout(intervalId)
  }, [])

  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }

  const thumbnailVariants = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
      scale: 0.5,
      opacity: 0,
      transition: { duration: 1.5, ...transition },
    },
  }

  return (
    <Layout seo={data.strapiGlobal.seo}>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="my-5 lg:my-6 xl:my-8 2xl:my-10">
          <h1 className="flex flex-row justify-start goodsumpire-font uppercase font-extrabold text-sm lg:text-lg xl:text-xl 2xl:text-5xl">
            <ReactTextTransition
              text={TEXTS[index % TEXTS.length]}
              springConfig={presets.wobbly}
            />

            <div className="text-green-500 flex flex-row mx-1">
              <BsFillAwardFill />
              <BsFillAwardFill />
            </div>
          </h1>

          <>
            <motion.div
              className="thumbnails"
              initial="initial"
              animate="enter"
              exit="exit"
              variants={{
                exit: { transition: { staggerChildren: 0.1 } },
              }}
            >
              <div className="sm:mx-6 md:mx-10 lg:mx-14 xl:mx-16 xxl:mx-20 my-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 xxl:grid-cols-8 gap-3 lg:gap-4 xl:gap-5 xxl:gap-6">
                {data.allStrapiPainting.edges.map(({ node }) => (
                  <div key={node.paintingID} className="m-2">
                    <motion.div variants={thumbnailVariants}>
                      <PaintingMainScreenCard
                        uid={node.uid}
                        productID={node.paintingID}
                        image1={
                          node.image1_Child.childImageSharp.gatsbyImageData
                        }
                        name={node.name}
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        </div>
        <hr className="border-2"></hr>
        <AbstractScreen />
      </motion.div>
    </Layout>
  )
}

export default BestSellerPaintings

const query = graphql`
  query {
    strapiGlobal {
      defaultSeo {
        metaTitle
        metaDescription
        shareImage {
          url
        }
      }
    }
    allStrapiPainting(
      filter: { categories: { elemMatch: { name: { eq: "Best Sellers" } } } }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          name
          uid
          paintingID
          image1_Child {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                aspectRatio: 0.9
                layout: CONSTRAINED
                transformOptions: { cropFocus: CENTER }
              )
            }
          }
        }
      }
    }
  }
`
