import React from "react"
import { graphql, StaticQuery } from "gatsby"
import "../../../assets/styles/index.scss"
import { Link } from "gatsby"

function AbstractPaintingsHover() {
  const CategoriesHover = graphql`
    query {
      allStrapiPainting(
        filter: {
          categories: { elemMatch: { name: { eq: "Abstract Paintings" } } }
        }
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

  return (
    <div className="inline-block relative group z-50">
      <div className="font-semibold px-4 py-1 rounded inline-flex items-center">
        <Link to="/spiritualpaintings/">Abstract Paintings</Link>
      </div>
      <div className="w-96 absolute hidden bg-white text-black -ml-3 -mt-2 group-hover:block z-50">
        <StaticQuery
          query={CategoriesHover}
          render={data => {
            return (
              <>
                {data.allStrapiPainting.edges.map(({ node }) => (
                  <div key={node.paintingID}>
                    <div className="hover:bg-black hover:text-white text-md z-50 my-1 px-4">
                      <Link to={`/paintings/${node.uid}`}>{node.name}</Link>
                    </div>
                  </div>
                ))}
              </>
            )
          }}
        />
      </div>
    </div>
  )
}

export default AbstractPaintingsHover
