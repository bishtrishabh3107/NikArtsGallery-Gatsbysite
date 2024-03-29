import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Global/Layout"
import "../assets/styles/index.scss"
import SpiritualScreen from "../components/organ/SpiritualScreen"
import ModernScreen from "../components/organ/ModernScreen"
import AbstractScreen from "../components/organ/AbstractScreen"
import AnimeScreen from "../components/organ/AnimeScreen"
import { motion } from "framer-motion"
import FirstScreen from "../components/organ/FirstScreen"

const IndexPage = () => {
  const data = useStaticQuery(query)

  return (
    <Layout seo={data.strapiGlobal.seo}>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <FirstScreen />

        <hr className="border-2"></hr>

        <SpiritualScreen />

        <hr className="border-2"></hr>

        <ModernScreen />

        <hr className="border-2"></hr>

        <AbstractScreen />

        <hr className="border-2"></hr>

        <AnimeScreen />

        <hr></hr>
      </motion.div>
    </Layout>
  )
}

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

export default IndexPage
