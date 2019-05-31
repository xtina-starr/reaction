import { Box } from "@artsy/palette"
import { CollectionApp_collection } from "__generated__/CollectionApp_collection.graphql"
import { AppContainer } from "Apps/Components/AppContainer"
import { track } from "Artsy/Analytics"
import * as Schema from "Artsy/Analytics/Schema"
import { ArtistCollectionsRailContent as ArtistCollectionsRail } from "Components/Artist/ArtistCollectionsRail"
import { FrameWithRecentlyViewed } from "Components/FrameWithRecentlyViewed"
import { RelatedCollectionsRailContent as RelatedCollectionsRail } from "Components/RelatedCollectionsRail"
import { BreadCrumbList } from "Components/v2/Seo"
import { HttpError } from "found"
import React, { Component } from "react"
import { Link, Meta, Title } from "react-head"
import { createFragmentContainer, graphql } from "react-relay"
import { data as sd } from "sharify"
import truncate from "trunc-html"
import { CollectionFilterFragmentContainer as CollectionFilterContainer } from "./Components/Collection/CollectionFilterContainer"
import { CollectionFilterFragmentContainer as CollectionHeader } from "./Components/Collection/Header"
import { SeoProductsForArtworks } from "./Components/Seo/SeoProductsForArtworks"

interface CollectionAppProps {
  collection: CollectionApp_collection
}

@track({
  context_module: Schema.ContextModule.CollectionDescription,
})
export class CollectionApp extends Component<CollectionAppProps> {
  collectionNotFound = collection => {
    if (!collection) {
      throw new HttpError(404)
    }
  }

  componentWillMount() {
    this.collectionNotFound(this.props.collection)
  }

  render() {
    const { collection } = this.props
    const { title, slug, headerImage, description, artworks } = collection

    const collectionHref = `${sd.APP_URL}/collection/${slug}`
    const metadataDescription = description
      ? `Buy, bid, and inquire on ${title} on Artsy. ` +
        truncate(description, 158).text
      : `Buy, bid, and inquire on ${title} on Artsy.`

    const artistId =
      collection.query.artist_id || collection.query.artist_ids[0]
    console.log("artist_id:", collection.query.artist_id)
    console.log("artist_ids:", collection.query.artist_ids)
    return (
      <AppContainer>
        <FrameWithRecentlyViewed>
          <Title>{`${title} - For Sale on Artsy`}</Title>
          <Meta name="description" content={metadataDescription} />
          <Meta property="og:url" content={collectionHref} />
          <Meta property="og:image" content={headerImage} />
          <Meta property="og:description" content={metadataDescription} />
          <Meta property="twitter:description" content={metadataDescription} />
          <Link rel="canonical" href={collectionHref} />
          <BreadCrumbList
            items={[
              { path: "/collections", name: "Collections" },
              { path: `/collection/${slug}`, name: title },
            ]}
          />
          <SeoProductsForArtworks artworks={artworks} />

          <CollectionHeader
            collection={collection}
            artworks={artworks as any}
          />
          <Box>
            <CollectionFilterContainer collection={collection} />
          </Box>
          <Box>
            {artistId ? (
              <ArtistCollectionsRail artistID={artistId} />
            ) : (
              <RelatedCollectionsRail category={collection.category} />
            )}
          </Box>
        </FrameWithRecentlyViewed>
      </AppContainer>
    )
  }
}

export const CollectionAppFragmentContainer = createFragmentContainer(
  CollectionApp,
  {
    collection: graphql`
      fragment CollectionApp_collection on MarketingCollection
        @argumentDefinitions(
          aggregations: {
            type: "[ArtworkAggregation]"
            defaultValue: [MERCHANDISABLE_ARTISTS, MEDIUM, MAJOR_PERIOD, TOTAL]
          }
          medium: { type: "String", defaultValue: "*" }
          major_periods: { type: "[String]" }
          partner_id: { type: "ID" }
          for_sale: { type: "Boolean" }
          at_auction: { type: "Boolean" }
          acquireable: { type: "Boolean" }
          offerable: { type: "Boolean" }
          inquireable_only: { type: "Boolean" }
          sort: { type: "String", defaultValue: "-partner_updated_at" }
          price_range: { type: "String" }
          height: { type: "String" }
          width: { type: "String" }
          color: { type: "String" }
          page: { type: "Int" }
        ) {
        id
        slug
        title
        description
        headerImage
        category
        credit
        query {
          artist_ids
          artist_id
          gene_id
        }
        artworks(
          aggregations: $aggregations
          include_medium_filter_in_aggregation: true
        ) {
          ...Header_artworks
          ...SeoProductsForArtworks_artworks
        }

        ...CollectionFilterContainer_collection
          @arguments(
            medium: $medium
            major_periods: $major_periods
            for_sale: $for_sale
            sort: $sort
            acquireable: $acquireable
            offerable: $offerable
            at_auction: $at_auction
            inquireable_only: $inquireable_only
            price_range: $price_range
            height: $height
            width: $width
            color: $color
            page: $page
          )
      }
    `,
  }
)
