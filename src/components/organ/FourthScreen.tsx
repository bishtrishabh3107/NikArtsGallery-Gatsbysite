import React from "react"
import { graphql, StaticQuery } from "gatsby"
import "../../assets/styles/index.scss"
import PaintingMainScreenCard from "../atom/PaintingMainScreenCard"
import { motion } from "framer-motion"
import { MdHighQuality } from "react-icons/md"
import ReactTextTransition, { presets } from "react-text-transition"

const TEXTS = ["ABSTRACT PAINTINGS", "ILLUSTRATION PAINTINGS"]

function FourthScreen() {
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
    <div className="my-5 my-5">
      <h1 className="flex flex-row justify-center goodsumpire-font uppercase font-extrabold text-sm lg:text-lg xl:text-xl xxl:text-8xl">
        <ReactTextTransition
          text={TEXTS[index % TEXTS.length]}
          springConfig={presets.wobbly}
        />
        <div className="text-green-500 flex flex-row mx-1 mt-1">
          <MdHighQuality />
          <MdHighQuality />
        </div>
      </h1>

      <StaticQuery
        query={FourthScreenQuery}
        render={data => {
          return (
            <>
              <motion.div
                className="thumbnails"
                initial="initial"
                animate="enter"
                exit="exit"
                variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
              >
                <div className="sm:mx-2 md:mx-4 lg:mx-10 my-5 grid grid-cols-3 gap-2 xl:grid-cols-4 xxl:grid-cols-5">
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
          )
        }}
      />
    </div>
  )
}

export default FourthScreen

const FourthScreenQuery = graphql`
  {
    allStrapiPainting(
      filter: {
        categories: { elemMatch: { name: { eq: "Abstract Paintings" } } }
      }
      limit: 6
      sort: { fields: date, order: ASC }
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
