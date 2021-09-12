import React from "react"
import { graphql, StaticQuery } from "gatsby"
import "../../assets/styles/index.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Carousel } from "react-responsive-carousel"
import ReactTextTransition, { presets } from "react-text-transition"
import { Link } from "gatsby"

const TEXTS = ["BEST SELLERS", "POPULARS", "IN-SPOTLIGHT"]

function BestSellerCarousel() {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex(index => index + 1),
      2000 // every 3 seconds
    )
    return () => clearTimeout(intervalId)
  }, [])
  return (
    <div className="mt-4">
      <h1 className="flex flex-row justify-center goodsumpire-font uppercase font-extrabold text-sm lg:text-lg xl:text-xl 2xl:text-5xl">
        <ReactTextTransition
          text={TEXTS[index % TEXTS.length]}
          springConfig={presets.wobbly}
        />
      </h1>
      <div className="-mt-24">
        <StaticQuery
          query={BestSellerCarouselQuery}
          render={data => {
            return (
              <>
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
                  {data.allStrapiPainting.edges.map(({ node }) => (
                    <div
                      key={node.paintingID}
                      className="border-2 xl:border-4 2xl:border-4 border-pink-400"
                    >
                      <div className="p-1 lg:p-2 xl:p-4 2xl:p-5">
                        <Link
                          className="flex flex-col"
                          to={`/paintings/${node.uid}`}
                        >
                          <GatsbyImage
                            image={getImage(node.image1_Child)}
                            alt={node.name}
                          />
                        </Link>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </>
            )
          }}
        />
      </div>
    </div>
  )
}

export default BestSellerCarousel

const BestSellerCarouselQuery = graphql`
  {
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
