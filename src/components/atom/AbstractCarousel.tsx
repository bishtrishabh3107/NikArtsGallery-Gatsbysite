import React from "react"
import { graphql, StaticQuery } from "gatsby"
import "../../assets/styles/index.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Carousel } from "react-responsive-carousel"
import { Link } from "gatsby"
import ReactTextTransition, { presets } from "react-text-transition"

const TEXTS = ["ABSTRACTS", "SYNOPSYS", "ILLUSTRATIONS"]

function AbstractCarousel() {
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
          query={AbstractCarouselQuery}
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
                    <div key={node.paintingID}>
                      <div className="">
                        <Link
                          className="flex flex-col"
                          to={`/paintings/${node.uid}`}
                        >
                          <div className="p-2 md:p-4 lg:p-6 xl:p-8 2xl:p-10">
                            <GatsbyImage
                              image={getImage(node.image1_Child)}
                              alt={node.name}
                            />
                          </div>
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

export default AbstractCarousel

const AbstractCarouselQuery = graphql`
  {
    allStrapiPainting(
      filter: {
        categories: { elemMatch: { name: { eq: "Abstract Paintings" } } }
      }
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
                layout: CONSTRAINED
                width: 500
                height: 600
                transformOptions: { cropFocus: CENTER }
              )
            }
          }
        }
      }
    }
  }
`
