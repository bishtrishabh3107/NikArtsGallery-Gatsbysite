import React from "react"
import { graphql, StaticQuery } from "gatsby"
import "../../../assets/styles/index.scss"
import { Link } from "gatsby"

function AnimePaintingsHover() {
  const CategoriesHover = graphql`
    query {
      allStrapiPainting(
        filter: {
          categories: { elemMatch: { name: { eq: "Anime Paintings" } } }
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
    <div className="inline-block relative group z-20">
      <div className="font-semibold px-4 py-1 rounded inline-flex items-center">
        <Link to="/animepaintings/">Anime Paintings</Link>
      </div>
      <div className="w-96 absolute hidden bg-white text-black -ml-3 -mt-2 group-hover:block z-20">
        <StaticQuery
          query={CategoriesHover}
          render={data => {
            return (
              <>
                {data.allStrapiPainting.edges.map(({ node }) => (
                  <div key={node.paintingID}>
                    <div className="hover:bg-black hover:text-white text-md z-20 my-1 px-4">
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

export default AnimePaintingsHover
