import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SpiritualScreen from "../components/organ/SpiritualScreen"
import Layout from "../components/Global/Layout"
import "../assets/styles/index.scss"
import { motion } from "framer-motion"
import FirstScreen from "../components/organ/FirstScreen"

function SpiritualPaintings() {
  const data = useStaticQuery(query)

  return (
    <Layout seo={data.strapiGlobal.seo}>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <SpiritualScreen />
        <hr className="border-2"></hr>
        <div className="mt-20">
          <FirstScreen />
        </div>
      </motion.div>
    </Layout>
  )
}

export default SpiritualPaintings

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
