import React, { useState } from "react"
import { motion } from "framer-motion"
import "../../../assets/styles/index.scss"
import { graphql, StaticQuery } from "gatsby"
import { Link } from "gatsby"
import SpiritualPaintingsHover from "./SpiritualPaintingsHover"
import ModernPaintingsHover from "./ModernPaintingsHover"
import AbstractPaintingsHover from "./AbstractPaintingsHover"
import AnimePaintingsHover from "./AnimePaintingsHover"
import BestSellerPaintingsHover from "./BestSellerPaintingsHover"

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
)

const MenuButton = ({ onClick, isOpen }) => {
  return (
    <motion.button
      className="menu-button"
      onClick={onClick}
      animate={isOpen ? "open" : "closed"}
      initial={false}
    >
      <svg
        width="23"
        height="23"
        style={{ margin: "4px 0 0 2px" }}
        viewBox="0 0 23 23"
      >
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </motion.button>
  )
}

const leftMenu = ["1", "2", "3", "4", "5", "6"]
const rightMenu = ["1", "2", "3", "4", "5", "6"]

const slideVerticalAnimation = {
  open: {
    rotateX: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      mass: 0.8,
      type: "spring",
    },
    display: "block",
  },
  close: {
    rotateX: -15,
    y: -330,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
    transitionEnd: {
      display: "none",
    },
  },
}

const slideHorizontalAnimation = {
  left: {
    x: -30,
    transition: {
      duration: 0.3,
    },
  },
  right: {
    x: -310,
    transition: {
      duration: 0.3,
    },
  },
}

export const ToogleMenu = () => {
  const [isOpen, toggleDropdown] = useState(false)
  const [isLeftMenu, toggleMenu] = useState(false)
  const leftMenuHeight = (leftMenu.length + 1) * 70
  const rightMenuHeight = (rightMenu.length + 1) * 70
  const height = isLeftMenu ? leftMenuHeight : rightMenuHeight

  return (
    <div className="wrapper">
      <MenuButton onClick={() => toggleDropdown(!isOpen)} isOpen={isOpen} />

      <motion.div
        className="dropdown-container"
        style={{ height }}
        initial="close"
        animate={isOpen ? "open" : "close"}
        variants={slideVerticalAnimation}
      >
        <motion.div
          className="dropdown"
          initial="left"
          animate={isLeftMenu ? "left" : "right"}
          variants={slideHorizontalAnimation}
        >
          <motion.div className="menu menu-categories">
            <h4 onClick={() => toggleMenu(!isLeftMenu)}>Navigate To &#8594;</h4>
            <ul className="item-list">
              <StaticQuery
                query={MonthsSpecialQuery}
                render={data => {
                  return (
                    <>
                      {data.allStrapiPainting.edges.map(({ node }) => (
                        <li key={node.paintingID} className="item2">
                          <Link to={`/paintings/${node.uid}`}>{node.name}</Link>
                        </li>
                      ))}
                    </>
                  )
                }}
              />
            </ul>
          </motion.div>
          <motion.div className="menu menu-sizes">
            <h4 onClick={() => toggleMenu(!isLeftMenu)}>
              &#8592; BEST SELLERS
            </h4>
            <ul className="item-list">
              <li key="1" className="item">
                <AbstractPaintingsHover />
              </li>
              <li key="2" className="item">
                <SpiritualPaintingsHover />
              </li>
              <li key="3" className="item">
                <ModernPaintingsHover />
              </li>
              <li key="4" className="item">
                <AnimePaintingsHover />
              </li>
              <li key="5" className="item">
                <BestSellerPaintingsHover />
              </li>
              <li key="6" className="item">
                <a href="https://instagram.com/nikartssss" target="_blank">
                  Sell your Paintings
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

const MonthsSpecialQuery = graphql`
  {
    allStrapiPainting(
      filter: { categories: { elemMatch: { name: { eq: "Best Sellers" } } } }
      limit: 6
      sort: { fields: createdAt, order: ASC }
    ) {
      edges {
        node {
          name
          uid
          paintingID
        }
      }
    }
  }
`
