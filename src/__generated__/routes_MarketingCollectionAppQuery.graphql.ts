/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { CollectionApp_collection$ref } from "./CollectionApp_collection.graphql";
export type routes_MarketingCollectionAppQueryVariables = {
    readonly slug: string;
    readonly medium?: string | null;
    readonly major_periods?: ReadonlyArray<string | null> | null;
    readonly for_sale?: boolean | null;
    readonly sort?: string | null;
    readonly at_auction?: boolean | null;
    readonly acquireable?: boolean | null;
    readonly offerable?: boolean | null;
    readonly inquireable_only?: boolean | null;
    readonly price_range?: string | null;
    readonly height?: string | null;
    readonly width?: string | null;
    readonly color?: string | null;
    readonly page?: number | null;
};
export type routes_MarketingCollectionAppQueryResponse = {
    readonly collection: ({
        readonly " $fragmentRefs": CollectionApp_collection$ref;
    }) | null;
};
export type routes_MarketingCollectionAppQuery = {
    readonly response: routes_MarketingCollectionAppQueryResponse;
    readonly variables: routes_MarketingCollectionAppQueryVariables;
};



/*
query routes_MarketingCollectionAppQuery(
  $slug: String!
  $medium: String
  $major_periods: [String]
  $for_sale: Boolean
  $sort: String
  $at_auction: Boolean
  $acquireable: Boolean
  $offerable: Boolean
  $inquireable_only: Boolean
  $price_range: String
  $height: String
  $width: String
  $color: String
  $page: Int
) {
  collection: marketingCollection(slug: $slug) {
    ...CollectionApp_collection_3tWJc4
    __id: id
  }
}

fragment CollectionApp_collection_3tWJc4 on MarketingCollection {
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
    __id: id
  }
  relatedCollections {
    ...RelatedCollectionsRail_collections
    __id: id
  }
  artworks(aggregations: [MERCHANDISABLE_ARTISTS, MEDIUM, MAJOR_PERIOD, TOTAL], include_medium_filter_in_aggregation: true, sort: "-decayed_merch", size: 12) {
    ...Header_artworks
    ...SeoProductsForArtworks_artworks
    __id
  }
  linkedCollections {
    ...CollectionsHubRails_linkedCollections
  }
  ...CollectionFilterContainer_collection_3tWJc4
  __id: id
}

fragment RelatedCollectionsRail_collections on MarketingCollection {
  ...RelatedCollectionEntity_collection
  __id: id
}

fragment Header_artworks on FilterArtworks {
  ...DefaultHeader_headerArtworks
  merchandisable_artists {
    id
    _id
    name
    imageUrl
    birthday
    nationality
    ...FollowArtistButton_artist
    __id
  }
  __id
}

fragment SeoProductsForArtworks_artworks on FilterArtworks {
  artworks_connection(first: 30, after: "") {
    edges {
      node {
        __id
        availability
        category
        date
        href
        is_acquireable
        is_price_range
        listPrice {
          __typename
          ... on PriceRange {
            minPriceCents
            maxPriceCents
          }
          ... on ExactPrice {
            priceCents
          }
        }
        price_currency
        title
        artists {
          name
          __id
        }
        image {
          url(version: "larger")
          __id: id
        }
        meta {
          description
        }
        partner(shallow: true) {
          name
          type
          profile {
            icon {
              url(version: "larger")
              __id: id
            }
            __id
          }
          locations(size: 1) {
            address
            address_2
            city
            state
            country
            postal_code
            phone
            __id
          }
          __id
        }
      }
    }
  }
  __id
}

fragment CollectionsHubRails_linkedCollections on MarketingCollectionGroup {
  groupType
  ...FeaturedCollectionsRails_collectionGroup
  ...OtherCollectionsRail_collectionGroup
}

fragment CollectionFilterContainer_collection_3tWJc4 on MarketingCollection {
  artworks(aggregations: [MERCHANDISABLE_ARTISTS, MEDIUM, MAJOR_PERIOD, TOTAL], include_medium_filter_in_aggregation: true, sort: "-decayed_merch", size: 12) {
    aggregations {
      slice
      counts {
        id
        name
        count
        __id
      }
    }
    __id
  }
  ...CollectionRefetch_collection_3tWJc4
  __id: id
}

fragment CollectionRefetch_collection_3tWJc4 on MarketingCollection {
  slug
  filtered_artworks: artworks(aggregations: [TOTAL], medium: $medium, major_periods: $major_periods, for_sale: $for_sale, at_auction: $at_auction, acquireable: $acquireable, offerable: $offerable, inquireable_only: $inquireable_only, size: 0, sort: $sort, price_range: $price_range, height: $height, width: $width, color: $color, page: $page) {
    ...CollectArtworkGrid_filtered_artworks
    __id
  }
  __id: id
}

fragment CollectArtworkGrid_filtered_artworks on FilterArtworks {
  __id
  artworks: artworks_connection(first: 30, after: "") {
    pageInfo {
      hasNextPage
      endCursor
    }
    pageCursors {
      ...Pagination_pageCursors
    }
    ...ArtworkGrid_artworks
    edges {
      node {
        __id
      }
    }
  }
}

fragment Pagination_pageCursors on PageCursors {
  around {
    cursor
    page
    isCurrent
  }
  first {
    cursor
    page
    isCurrent
  }
  last {
    cursor
    page
    isCurrent
  }
  previous {
    cursor
    page
  }
}

fragment ArtworkGrid_artworks on ArtworkConnection {
  edges {
    node {
      __id
      id
      href
      image {
        aspect_ratio
        __id: id
      }
      ...GridItem_artwork
    }
  }
}

fragment GridItem_artwork on Artwork {
  _id
  title
  image_title
  image {
    placeholder
    url(version: "large")
    aspect_ratio
    __id: id
  }
  href
  ...Metadata_artwork
  ...Save_artwork
  ...Badge_artwork
  __id
}

fragment Metadata_artwork on Artwork {
  ...Details_artwork
  ...Contact_artwork
  href
  __id
}

fragment Save_artwork on Artwork {
  __id
  _id
  id
  is_saved
  title
}

fragment Badge_artwork on Artwork {
  is_biddable
  is_acquireable
  is_offerable
  href
  sale {
    is_preview
    display_timely_at
    __id
  }
  __id
}

fragment Details_artwork on Artwork {
  href
  title
  date
  sale_message
  cultural_maker
  artists(shallow: true) {
    __id
    href
    name
  }
  collecting_institution
  partner(shallow: true) {
    name
    href
    __id
  }
  sale {
    is_auction
    is_closed
    __id
  }
  sale_artwork {
    counts {
      bidder_positions
    }
    highest_bid {
      display
      __id: id
    }
    opening_bid {
      display
    }
    __id
  }
  __id
}

fragment Contact_artwork on Artwork {
  href
  is_inquireable
  sale {
    is_auction
    is_live_open
    is_open
    is_closed
    __id
  }
  partner(shallow: true) {
    type
    __id
  }
  sale_artwork {
    highest_bid {
      display
      __id: id
    }
    opening_bid {
      display
    }
    counts {
      bidder_positions
    }
    __id
  }
  __id
}

fragment FeaturedCollectionsRails_collectionGroup on MarketingCollectionGroup {
  groupType
  name
  members {
    id
    slug
    title
    description
    price_guidance
    thumbnail
    __id: id
  }
}

fragment OtherCollectionsRail_collectionGroup on MarketingCollectionGroup {
  groupType
  name
  members {
    ...OtherCollectionEntity_member
    __id: id
  }
}

fragment OtherCollectionEntity_member on MarketingCollection {
  slug
  thumbnail
  title
  __id: id
}

fragment DefaultHeader_headerArtworks on FilterArtworks {
  hits {
    href
    id
    image {
      small: resized(height: 160) {
        url
        width
        height
      }
      large: resized(height: 220) {
        url
        width
        height
      }
      __id: id
    }
    __id
  }
  __id
}

fragment FollowArtistButton_artist on Artist {
  __id
  id
  is_followed
  counts {
    follows
  }
}

fragment RelatedCollectionEntity_collection on MarketingCollection {
  headerImage
  slug
  title
  price_guidance
  artworks(size: 3, sort: "-decayed_merch") {
    hits {
      artist {
        name
        __id
      }
      title
      image {
        url(version: "small")
        __id: id
      }
      __id
    }
    __id
  }
  __id: id
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "slug",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "medium",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "major_periods",
    "type": "[String]",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "for_sale",
    "type": "Boolean",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "sort",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "at_auction",
    "type": "Boolean",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "acquireable",
    "type": "Boolean",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "offerable",
    "type": "Boolean",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "inquireable_only",
    "type": "Boolean",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "price_range",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "height",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "width",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "color",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "page",
    "type": "Int",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug",
    "type": "String!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": "__id",
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "headerImage",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "category",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "slug",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "price_guidance",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "Literal",
  "name": "sort",
  "value": "-decayed_merch",
  "type": "String"
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__id",
  "args": null,
  "storageKey": null
},
v13 = [
  v11,
  v12
],
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "href",
  "args": null,
  "storageKey": null
},
v15 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "url",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "width",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "height",
    "args": null,
    "storageKey": null
  }
],
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "_id",
  "args": null,
  "storageKey": null
},
v17 = [
  {
    "kind": "Literal",
    "name": "after",
    "value": "",
    "type": "String"
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 30,
    "type": "Int"
  }
],
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "date",
  "args": null,
  "storageKey": null
},
v19 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "is_acquireable",
  "args": null,
  "storageKey": null
},
v20 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "url",
    "args": [
      {
        "kind": "Literal",
        "name": "version",
        "value": "larger",
        "type": "[String]"
      }
    ],
    "storageKey": "url(version:\"larger\")"
  },
  v2
],
v21 = [
  {
    "kind": "Literal",
    "name": "shallow",
    "value": true,
    "type": "Boolean"
  }
],
v22 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v23 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v24 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "page",
  "args": null,
  "storageKey": null
},
v25 = [
  v23,
  v24,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "isCurrent",
    "args": null,
    "storageKey": null
  }
],
v26 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "display",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "routes_MarketingCollectionAppQuery",
  "id": null,
  "text": "query routes_MarketingCollectionAppQuery(\n  $slug: String!\n  $medium: String\n  $major_periods: [String]\n  $for_sale: Boolean\n  $sort: String\n  $at_auction: Boolean\n  $acquireable: Boolean\n  $offerable: Boolean\n  $inquireable_only: Boolean\n  $price_range: String\n  $height: String\n  $width: String\n  $color: String\n  $page: Int\n) {\n  collection: marketingCollection(slug: $slug) {\n    ...CollectionApp_collection_3tWJc4\n    __id: id\n  }\n}\n\nfragment CollectionApp_collection_3tWJc4 on MarketingCollection {\n  id\n  slug\n  title\n  description\n  headerImage\n  category\n  credit\n  query {\n    artist_ids\n    artist_id\n    gene_id\n    __id: id\n  }\n  relatedCollections {\n    ...RelatedCollectionsRail_collections\n    __id: id\n  }\n  artworks(aggregations: [MERCHANDISABLE_ARTISTS, MEDIUM, MAJOR_PERIOD, TOTAL], include_medium_filter_in_aggregation: true, sort: \"-decayed_merch\", size: 12) {\n    ...Header_artworks\n    ...SeoProductsForArtworks_artworks\n    __id\n  }\n  linkedCollections {\n    ...CollectionsHubRails_linkedCollections\n  }\n  ...CollectionFilterContainer_collection_3tWJc4\n  __id: id\n}\n\nfragment RelatedCollectionsRail_collections on MarketingCollection {\n  ...RelatedCollectionEntity_collection\n  __id: id\n}\n\nfragment Header_artworks on FilterArtworks {\n  ...DefaultHeader_headerArtworks\n  merchandisable_artists {\n    id\n    _id\n    name\n    imageUrl\n    birthday\n    nationality\n    ...FollowArtistButton_artist\n    __id\n  }\n  __id\n}\n\nfragment SeoProductsForArtworks_artworks on FilterArtworks {\n  artworks_connection(first: 30, after: \"\") {\n    edges {\n      node {\n        __id\n        availability\n        category\n        date\n        href\n        is_acquireable\n        is_price_range\n        listPrice {\n          __typename\n          ... on PriceRange {\n            minPriceCents\n            maxPriceCents\n          }\n          ... on ExactPrice {\n            priceCents\n          }\n        }\n        price_currency\n        title\n        artists {\n          name\n          __id\n        }\n        image {\n          url(version: \"larger\")\n          __id: id\n        }\n        meta {\n          description\n        }\n        partner(shallow: true) {\n          name\n          type\n          profile {\n            icon {\n              url(version: \"larger\")\n              __id: id\n            }\n            __id\n          }\n          locations(size: 1) {\n            address\n            address_2\n            city\n            state\n            country\n            postal_code\n            phone\n            __id\n          }\n          __id\n        }\n      }\n    }\n  }\n  __id\n}\n\nfragment CollectionsHubRails_linkedCollections on MarketingCollectionGroup {\n  groupType\n  ...FeaturedCollectionsRails_collectionGroup\n  ...OtherCollectionsRail_collectionGroup\n}\n\nfragment CollectionFilterContainer_collection_3tWJc4 on MarketingCollection {\n  artworks(aggregations: [MERCHANDISABLE_ARTISTS, MEDIUM, MAJOR_PERIOD, TOTAL], include_medium_filter_in_aggregation: true, sort: \"-decayed_merch\", size: 12) {\n    aggregations {\n      slice\n      counts {\n        id\n        name\n        count\n        __id\n      }\n    }\n    __id\n  }\n  ...CollectionRefetch_collection_3tWJc4\n  __id: id\n}\n\nfragment CollectionRefetch_collection_3tWJc4 on MarketingCollection {\n  slug\n  filtered_artworks: artworks(aggregations: [TOTAL], medium: $medium, major_periods: $major_periods, for_sale: $for_sale, at_auction: $at_auction, acquireable: $acquireable, offerable: $offerable, inquireable_only: $inquireable_only, size: 0, sort: $sort, price_range: $price_range, height: $height, width: $width, color: $color, page: $page) {\n    ...CollectArtworkGrid_filtered_artworks\n    __id\n  }\n  __id: id\n}\n\nfragment CollectArtworkGrid_filtered_artworks on FilterArtworks {\n  __id\n  artworks: artworks_connection(first: 30, after: \"\") {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    pageCursors {\n      ...Pagination_pageCursors\n    }\n    ...ArtworkGrid_artworks\n    edges {\n      node {\n        __id\n      }\n    }\n  }\n}\n\nfragment Pagination_pageCursors on PageCursors {\n  around {\n    cursor\n    page\n    isCurrent\n  }\n  first {\n    cursor\n    page\n    isCurrent\n  }\n  last {\n    cursor\n    page\n    isCurrent\n  }\n  previous {\n    cursor\n    page\n  }\n}\n\nfragment ArtworkGrid_artworks on ArtworkConnection {\n  edges {\n    node {\n      __id\n      id\n      href\n      image {\n        aspect_ratio\n        __id: id\n      }\n      ...GridItem_artwork\n    }\n  }\n}\n\nfragment GridItem_artwork on Artwork {\n  _id\n  title\n  image_title\n  image {\n    placeholder\n    url(version: \"large\")\n    aspect_ratio\n    __id: id\n  }\n  href\n  ...Metadata_artwork\n  ...Save_artwork\n  ...Badge_artwork\n  __id\n}\n\nfragment Metadata_artwork on Artwork {\n  ...Details_artwork\n  ...Contact_artwork\n  href\n  __id\n}\n\nfragment Save_artwork on Artwork {\n  __id\n  _id\n  id\n  is_saved\n  title\n}\n\nfragment Badge_artwork on Artwork {\n  is_biddable\n  is_acquireable\n  is_offerable\n  href\n  sale {\n    is_preview\n    display_timely_at\n    __id\n  }\n  __id\n}\n\nfragment Details_artwork on Artwork {\n  href\n  title\n  date\n  sale_message\n  cultural_maker\n  artists(shallow: true) {\n    __id\n    href\n    name\n  }\n  collecting_institution\n  partner(shallow: true) {\n    name\n    href\n    __id\n  }\n  sale {\n    is_auction\n    is_closed\n    __id\n  }\n  sale_artwork {\n    counts {\n      bidder_positions\n    }\n    highest_bid {\n      display\n      __id: id\n    }\n    opening_bid {\n      display\n    }\n    __id\n  }\n  __id\n}\n\nfragment Contact_artwork on Artwork {\n  href\n  is_inquireable\n  sale {\n    is_auction\n    is_live_open\n    is_open\n    is_closed\n    __id\n  }\n  partner(shallow: true) {\n    type\n    __id\n  }\n  sale_artwork {\n    highest_bid {\n      display\n      __id: id\n    }\n    opening_bid {\n      display\n    }\n    counts {\n      bidder_positions\n    }\n    __id\n  }\n  __id\n}\n\nfragment FeaturedCollectionsRails_collectionGroup on MarketingCollectionGroup {\n  groupType\n  name\n  members {\n    id\n    slug\n    title\n    description\n    price_guidance\n    thumbnail\n    __id: id\n  }\n}\n\nfragment OtherCollectionsRail_collectionGroup on MarketingCollectionGroup {\n  groupType\n  name\n  members {\n    ...OtherCollectionEntity_member\n    __id: id\n  }\n}\n\nfragment OtherCollectionEntity_member on MarketingCollection {\n  slug\n  thumbnail\n  title\n  __id: id\n}\n\nfragment DefaultHeader_headerArtworks on FilterArtworks {\n  hits {\n    href\n    id\n    image {\n      small: resized(height: 160) {\n        url\n        width\n        height\n      }\n      large: resized(height: 220) {\n        url\n        width\n        height\n      }\n      __id: id\n    }\n    __id\n  }\n  __id\n}\n\nfragment FollowArtistButton_artist on Artist {\n  __id\n  id\n  is_followed\n  counts {\n    follows\n  }\n}\n\nfragment RelatedCollectionEntity_collection on MarketingCollection {\n  headerImage\n  slug\n  title\n  price_guidance\n  artworks(size: 3, sort: \"-decayed_merch\") {\n    hits {\n      artist {\n        name\n        __id\n      }\n      title\n      image {\n        url(version: \"small\")\n        __id: id\n      }\n      __id\n    }\n    __id\n  }\n  __id: id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "routes_MarketingCollectionAppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "collection",
        "name": "marketingCollection",
        "storageKey": null,
        "args": v1,
        "concreteType": "MarketingCollection",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "CollectionApp_collection",
            "args": [
              {
                "kind": "Variable",
                "name": "acquireable",
                "variableName": "acquireable",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "at_auction",
                "variableName": "at_auction",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "color",
                "variableName": "color",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "for_sale",
                "variableName": "for_sale",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "height",
                "variableName": "height",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "inquireable_only",
                "variableName": "inquireable_only",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "major_periods",
                "variableName": "major_periods",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "medium",
                "variableName": "medium",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "offerable",
                "variableName": "offerable",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "page",
                "variableName": "page",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "price_range",
                "variableName": "price_range",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "sort",
                "variableName": "sort",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "width",
                "variableName": "width",
                "type": null
              }
            ]
          },
          v2
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "routes_MarketingCollectionAppQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "collection",
        "name": "marketingCollection",
        "storageKey": null,
        "args": v1,
        "concreteType": "MarketingCollection",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "credit",
            "args": null,
            "storageKey": null
          },
          v3,
          v4,
          v5,
          v6,
          v7,
          v8,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "query",
            "storageKey": null,
            "args": null,
            "concreteType": "MarketingCollectionQuery",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "artist_ids",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "artist_id",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "gene_id",
                "args": null,
                "storageKey": null
              },
              v2
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "relatedCollections",
            "storageKey": null,
            "args": null,
            "concreteType": "MarketingCollection",
            "plural": true,
            "selections": [
              v6,
              v8,
              v4,
              v9,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "artworks",
                "storageKey": "artworks(size:3,sort:\"-decayed_merch\")",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "size",
                    "value": 3,
                    "type": "Int"
                  },
                  v10
                ],
                "concreteType": "FilterArtworks",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "hits",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Artwork",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "artist",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Artist",
                        "plural": false,
                        "selections": v13
                      },
                      v4,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "image",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Image",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "url",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "version",
                                "value": "small",
                                "type": "[String]"
                              }
                            ],
                            "storageKey": "url(version:\"small\")"
                          },
                          v2
                        ]
                      },
                      v12
                    ]
                  },
                  v12
                ]
              },
              v2
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "artworks",
            "storageKey": "artworks(aggregations:[\"MERCHANDISABLE_ARTISTS\",\"MEDIUM\",\"MAJOR_PERIOD\",\"TOTAL\"],include_medium_filter_in_aggregation:true,size:12,sort:\"-decayed_merch\")",
            "args": [
              {
                "kind": "Literal",
                "name": "aggregations",
                "value": [
                  "MERCHANDISABLE_ARTISTS",
                  "MEDIUM",
                  "MAJOR_PERIOD",
                  "TOTAL"
                ],
                "type": "[ArtworkAggregation]"
              },
              {
                "kind": "Literal",
                "name": "include_medium_filter_in_aggregation",
                "value": true,
                "type": "Boolean"
              },
              {
                "kind": "Literal",
                "name": "size",
                "value": 12,
                "type": "Int"
              },
              v10
            ],
            "concreteType": "FilterArtworks",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "hits",
                "storageKey": null,
                "args": null,
                "concreteType": "Artwork",
                "plural": true,
                "selections": [
                  v14,
                  v3,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "image",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Image",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": "small",
                        "name": "resized",
                        "storageKey": "resized(height:160)",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "height",
                            "value": 160,
                            "type": "Int"
                          }
                        ],
                        "concreteType": "ResizedImageUrl",
                        "plural": false,
                        "selections": v15
                      },
                      {
                        "kind": "LinkedField",
                        "alias": "large",
                        "name": "resized",
                        "storageKey": "resized(height:220)",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "height",
                            "value": 220,
                            "type": "Int"
                          }
                        ],
                        "concreteType": "ResizedImageUrl",
                        "plural": false,
                        "selections": v15
                      },
                      v2
                    ]
                  },
                  v12
                ]
              },
              v12,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "merchandisable_artists",
                "storageKey": null,
                "args": null,
                "concreteType": "Artist",
                "plural": true,
                "selections": [
                  v3,
                  v16,
                  v11,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "imageUrl",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "birthday",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "nationality",
                    "args": null,
                    "storageKey": null
                  },
                  v12,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "is_followed",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "counts",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ArtistCounts",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "follows",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "artworks_connection",
                "storageKey": "artworks_connection(after:\"\",first:30)",
                "args": v17,
                "concreteType": "ArtworkConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ArtworkEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Artwork",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "listPrice",
                            "storageKey": null,
                            "args": null,
                            "concreteType": null,
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "__typename",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "type": "ExactPrice",
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "priceCents",
                                    "args": null,
                                    "storageKey": null
                                  }
                                ]
                              },
                              {
                                "kind": "InlineFragment",
                                "type": "PriceRange",
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "minPriceCents",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "maxPriceCents",
                                    "args": null,
                                    "storageKey": null
                                  }
                                ]
                              }
                            ]
                          },
                          v12,
                          v7,
                          v18,
                          v14,
                          v19,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "is_price_range",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "availability",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "price_currency",
                            "args": null,
                            "storageKey": null
                          },
                          v4,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "artists",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Artist",
                            "plural": true,
                            "selections": v13
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "image",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Image",
                            "plural": false,
                            "selections": v20
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "meta",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "ArtworkMeta",
                            "plural": false,
                            "selections": [
                              v5
                            ]
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "partner",
                            "storageKey": "partner(shallow:true)",
                            "args": v21,
                            "concreteType": "Partner",
                            "plural": false,
                            "selections": [
                              v11,
                              v22,
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "profile",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "Profile",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "icon",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "Image",
                                    "plural": false,
                                    "selections": v20
                                  },
                                  v12
                                ]
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "locations",
                                "storageKey": "locations(size:1)",
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "size",
                                    "value": 1,
                                    "type": "Int"
                                  }
                                ],
                                "concreteType": "Location",
                                "plural": true,
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "address",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "address_2",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "city",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "state",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "country",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "postal_code",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "phone",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  v12
                                ]
                              },
                              v12
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "aggregations",
                "storageKey": null,
                "args": null,
                "concreteType": "ArtworksAggregationResults",
                "plural": true,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "slice",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "counts",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AggregationCount",
                    "plural": true,
                    "selections": [
                      v3,
                      v11,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "count",
                        "args": null,
                        "storageKey": null
                      },
                      v12
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "linkedCollections",
            "storageKey": null,
            "args": null,
            "concreteType": "MarketingCollectionGroup",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "groupType",
                "args": null,
                "storageKey": null
              },
              v11,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "members",
                "storageKey": null,
                "args": null,
                "concreteType": "MarketingCollection",
                "plural": true,
                "selections": [
                  v3,
                  v8,
                  v4,
                  v5,
                  v9,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "thumbnail",
                    "args": null,
                    "storageKey": null
                  },
                  v2
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": "filtered_artworks",
            "name": "artworks",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "acquireable",
                "variableName": "acquireable",
                "type": "Boolean"
              },
              {
                "kind": "Literal",
                "name": "aggregations",
                "value": [
                  "TOTAL"
                ],
                "type": "[ArtworkAggregation]"
              },
              {
                "kind": "Variable",
                "name": "at_auction",
                "variableName": "at_auction",
                "type": "Boolean"
              },
              {
                "kind": "Variable",
                "name": "color",
                "variableName": "color",
                "type": "String"
              },
              {
                "kind": "Variable",
                "name": "for_sale",
                "variableName": "for_sale",
                "type": "Boolean"
              },
              {
                "kind": "Variable",
                "name": "height",
                "variableName": "height",
                "type": "String"
              },
              {
                "kind": "Variable",
                "name": "inquireable_only",
                "variableName": "inquireable_only",
                "type": "Boolean"
              },
              {
                "kind": "Variable",
                "name": "major_periods",
                "variableName": "major_periods",
                "type": "[String]"
              },
              {
                "kind": "Variable",
                "name": "medium",
                "variableName": "medium",
                "type": "String"
              },
              {
                "kind": "Variable",
                "name": "offerable",
                "variableName": "offerable",
                "type": "Boolean"
              },
              {
                "kind": "Variable",
                "name": "page",
                "variableName": "page",
                "type": "Int"
              },
              {
                "kind": "Variable",
                "name": "price_range",
                "variableName": "price_range",
                "type": "String"
              },
              {
                "kind": "Literal",
                "name": "size",
                "value": 0,
                "type": "Int"
              },
              {
                "kind": "Variable",
                "name": "sort",
                "variableName": "sort",
                "type": "String"
              },
              {
                "kind": "Variable",
                "name": "width",
                "variableName": "width",
                "type": "String"
              }
            ],
            "concreteType": "FilterArtworks",
            "plural": false,
            "selections": [
              v12,
              {
                "kind": "LinkedField",
                "alias": "artworks",
                "name": "artworks_connection",
                "storageKey": "artworks_connection(after:\"\",first:30)",
                "args": v17,
                "concreteType": "ArtworkConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "pageInfo",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "hasNextPage",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "endCursor",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "pageCursors",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "PageCursors",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "around",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "PageCursor",
                        "plural": true,
                        "selections": v25
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "first",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "PageCursor",
                        "plural": false,
                        "selections": v25
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "last",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "PageCursor",
                        "plural": false,
                        "selections": v25
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "previous",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "PageCursor",
                        "plural": false,
                        "selections": [
                          v23,
                          v24
                        ]
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ArtworkEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Artwork",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "artists",
                            "storageKey": "artists(shallow:true)",
                            "args": v21,
                            "concreteType": "Artist",
                            "plural": true,
                            "selections": [
                              v12,
                              v14,
                              v11
                            ]
                          },
                          v12,
                          v14,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "image",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Image",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "aspect_ratio",
                                "args": null,
                                "storageKey": null
                              },
                              v2,
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "placeholder",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "url",
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "version",
                                    "value": "large",
                                    "type": "[String]"
                                  }
                                ],
                                "storageKey": "url(version:\"large\")"
                              }
                            ]
                          },
                          v16,
                          v4,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "image_title",
                            "args": null,
                            "storageKey": null
                          },
                          v18,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "sale_message",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "cultural_maker",
                            "args": null,
                            "storageKey": null
                          },
                          v3,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "collecting_institution",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "partner",
                            "storageKey": "partner(shallow:true)",
                            "args": v21,
                            "concreteType": "Partner",
                            "plural": false,
                            "selections": [
                              v11,
                              v14,
                              v12,
                              v22
                            ]
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "sale",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Sale",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "is_auction",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "is_closed",
                                "args": null,
                                "storageKey": null
                              },
                              v12,
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "is_live_open",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "is_open",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "is_preview",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "display_timely_at",
                                "args": null,
                                "storageKey": null
                              }
                            ]
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "sale_artwork",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SaleArtwork",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "counts",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "SaleArtworkCounts",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "bidder_positions",
                                    "args": null,
                                    "storageKey": null
                                  }
                                ]
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "highest_bid",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "SaleArtworkHighestBid",
                                "plural": false,
                                "selections": [
                                  v26,
                                  v2
                                ]
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "opening_bid",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "SaleArtworkOpeningBid",
                                "plural": false,
                                "selections": [
                                  v26
                                ]
                              },
                              v12
                            ]
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "is_inquireable",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "is_saved",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "is_biddable",
                            "args": null,
                            "storageKey": null
                          },
                          v19,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "is_offerable",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          v2
        ]
      }
    ]
  }
};
})();
(node as any).hash = 'b21f6802a79c0dcb05287f36264e96f9';
export default node;
