import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Global/Layout"
import PaintingPage from "../components/PaintingPage"
import SpiritualScreen from "../components/organ/SpiritualScreen"
import AnimeScreen from "../components/organ/AnimeScreen"
import { motion } from "framer-motion"

export const query = graphql`
  query ($paintinguid: String!) {
    allStrapiPainting(filter: { uid: { in: [$paintinguid] } }) {
      edges {
        node {
          name
          uid
          description
          dimension
          keywords
          paintingID
          price
          date(formatString: "DD MM YYYY")
          image1_Child {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                layout: CONSTRAINED
                transformOptions: { cropFocus: CENTER }
              )
            }
          }
          image2_Child {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                layout: CONSTRAINED
                transformOptions: { cropFocus: CENTER }
              )
            }
          }
        }
      }
    }
    strapiPainting(uid: { in: [$paintinguid] }) {
      name
      description
      keywords
      image1_Child {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            aspectRatio: 2.33333333333
            layout: CONSTRAINED
            transformOptions: { cropFocus: CENTER }
          )
        }
      }
    }
  }
`

const PaintingTemplate = ({ data }) => {
  const painting = data.strapiPainting
  var str = painting.keywords
  var temp = new Array()
  temp = str.split(",")
  const seo = {
    metaTitle: painting.name,
    metaDescription: painting.description,
    keyword1: temp[0],
    keyword2: temp[1],
    keyword3: temp[2],
    keyword4: temp[3],
    keyword5: temp[4],
    keyword6: temp[5],
    keyword7: temp[6],
    keyword8: temp[7],
    keyword9: temp[8],
    keyword10: temp[9],
    keyword11: temp[10],
    keyword12: temp[11],
    keyword13: temp[12],
    keyword14: temp[13],
    keyword15: temp[14],
    shareImage: painting.image1,
  }

  return (
    <Layout seo={seo}>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col">
          <div className="-mt-20 px-2 mb-10">
            {data.allStrapiPainting.edges.map(({ node }) => (
              <div key={node.paintingID}>
                <PaintingPage
                  name={node.name}
                  image1={node.image1_Child.childImageSharp.gatsbyImageData}
                  image2={node.image2_Child.childImageSharp.gatsbyImageData}
                  dimension={node.dimension}
                  description={node.description}
                  price={node.price}
                  date={node.date}
                />
              </div>
            ))}
          </div>
          <SpiritualScreen />
          <hr className="border-2"></hr>
          <AnimeScreen />
        </div>
      </motion.div>
    </Layout>
  )
}

export default PaintingTemplate
