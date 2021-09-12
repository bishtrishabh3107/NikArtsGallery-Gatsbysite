import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import AbstractScreen from "../components/organ/AbstractScreen"
import Layout from "../components/Global/Layout"
import "../assets/styles/index.scss"
import { motion } from "framer-motion"
import SpiritualScreen from "../components/organ/SpiritualScreen"

function AbstractPaintings() {
  const data = useStaticQuery(query)

  return (
    <Layout seo={data.strapiGlobal.seo}>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <AbstractScreen />
        <hr className="border-2"></hr>
        <div className="mt-10">
          <SpiritualScreen />
        </div>
      </motion.div>
    </Layout>
  )
}

export default AbstractPaintings

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
  }
`
