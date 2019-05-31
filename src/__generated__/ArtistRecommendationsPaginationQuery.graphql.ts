/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { ArtistRecommendations_artist$ref } from "./ArtistRecommendations_artist.graphql";
export type ArtistRecommendationsPaginationQueryVariables = {
    readonly count: number;
    readonly cursor?: string | null;
    readonly artistID: string;
};
export type ArtistRecommendationsPaginationQueryResponse = {
    readonly artist: ({
        readonly " $fragmentRefs": ArtistRecommendations_artist$ref;
    }) | null;
};
export type ArtistRecommendationsPaginationQuery = {
    readonly response: ArtistRecommendationsPaginationQueryResponse;
    readonly variables: ArtistRecommendationsPaginationQueryVariables;
};



/*
query ArtistRecommendationsPaginationQuery(
  $count: Int!
  $cursor: String
  $artistID: String!
) {
  artist(id: $artistID) {
    ...ArtistRecommendations_artist_1G22uz
    __id
  }
}

fragment ArtistRecommendations_artist_1G22uz on Artist {
  id
  name
  related {
    artists(first: $count, after: $cursor, min_forsale_artworks: 7) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          ...RecommendedArtist_artist
          __id
          __typename
        }
        cursor
      }
    }
  }
  __id
}

fragment RecommendedArtist_artist on Artist {
  id
  _id
  name
  formatted_nationality_and_birthday
  href
  image {
    cropped(width: 100, height: 100) {
      url
    }
    __id: id
  }
  artworks_connection(first: 20, sort: PUBLISHED_AT_DESC, filter: IS_FOR_SALE) {
    edges {
      node {
        __id
        image {
          aspect_ratio
          __id: id
        }
        ...FillwidthItem_artwork
      }
    }
  }
  ...FollowArtistButton_artist
  __id
}

fragment FillwidthItem_artwork on Artwork {
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

fragment FollowArtistButton_artist on Artist {
  __id
  id
  is_followed
  counts {
    follows
  }
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
  _id
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "artistID",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "artistID",
    "type": "String!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__id",
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": "__id",
  "name": "id",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "href",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "_id",
  "args": null,
  "storageKey": null
},
v8 = [
  {
    "kind": "Literal",
    "name": "shallow",
    "value": true,
    "type": "Boolean"
  }
],
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "display",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ArtistRecommendationsPaginationQuery",
  "id": null,
  "text": "query ArtistRecommendationsPaginationQuery(\n  $count: Int!\n  $cursor: String\n  $artistID: String!\n) {\n  artist(id: $artistID) {\n    ...ArtistRecommendations_artist_1G22uz\n    __id\n  }\n}\n\nfragment ArtistRecommendations_artist_1G22uz on Artist {\n  id\n  name\n  related {\n    artists(first: $count, after: $cursor, min_forsale_artworks: 7) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      edges {\n        node {\n          id\n          ...RecommendedArtist_artist\n          __id\n          __typename\n        }\n        cursor\n      }\n    }\n  }\n  __id\n}\n\nfragment RecommendedArtist_artist on Artist {\n  id\n  _id\n  name\n  formatted_nationality_and_birthday\n  href\n  image {\n    cropped(width: 100, height: 100) {\n      url\n    }\n    __id: id\n  }\n  artworks_connection(first: 20, sort: PUBLISHED_AT_DESC, filter: IS_FOR_SALE) {\n    edges {\n      node {\n        __id\n        image {\n          aspect_ratio\n          __id: id\n        }\n        ...FillwidthItem_artwork\n      }\n    }\n  }\n  ...FollowArtistButton_artist\n  __id\n}\n\nfragment FillwidthItem_artwork on Artwork {\n  image {\n    placeholder\n    url(version: \"large\")\n    aspect_ratio\n    __id: id\n  }\n  href\n  ...Metadata_artwork\n  ...Save_artwork\n  ...Badge_artwork\n  __id\n}\n\nfragment FollowArtistButton_artist on Artist {\n  __id\n  id\n  is_followed\n  counts {\n    follows\n  }\n}\n\nfragment Metadata_artwork on Artwork {\n  ...Details_artwork\n  ...Contact_artwork\n  href\n  __id\n}\n\nfragment Save_artwork on Artwork {\n  __id\n  _id\n  id\n  is_saved\n  title\n}\n\nfragment Badge_artwork on Artwork {\n  is_biddable\n  is_acquireable\n  is_offerable\n  href\n  sale {\n    is_preview\n    display_timely_at\n    __id\n  }\n  __id\n}\n\nfragment Details_artwork on Artwork {\n  href\n  title\n  date\n  sale_message\n  cultural_maker\n  artists(shallow: true) {\n    __id\n    href\n    name\n  }\n  collecting_institution\n  partner(shallow: true) {\n    name\n    href\n    __id\n  }\n  sale {\n    is_auction\n    is_closed\n    __id\n  }\n  sale_artwork {\n    counts {\n      bidder_positions\n    }\n    highest_bid {\n      display\n      __id: id\n    }\n    opening_bid {\n      display\n    }\n    __id\n  }\n  __id\n}\n\nfragment Contact_artwork on Artwork {\n  _id\n  href\n  is_inquireable\n  sale {\n    is_auction\n    is_live_open\n    is_open\n    is_closed\n    __id\n  }\n  partner(shallow: true) {\n    type\n    __id\n  }\n  sale_artwork {\n    highest_bid {\n      display\n      __id: id\n    }\n    opening_bid {\n      display\n    }\n    counts {\n      bidder_positions\n    }\n    __id\n  }\n  __id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ArtistRecommendationsPaginationQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artist",
        "storageKey": null,
        "args": v1,
        "concreteType": "Artist",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ArtistRecommendations_artist",
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "cursor",
                "variableName": "cursor",
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
    "name": "ArtistRecommendationsPaginationQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artist",
        "storageKey": null,
        "args": v1,
        "concreteType": "Artist",
        "plural": false,
        "selections": [
          v3,
          v4,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "related",
            "storageKey": null,
            "args": null,
            "concreteType": "ArtistRelatedData",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "artists",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "after",
                    "variableName": "cursor",
                    "type": "String"
                  },
                  {
                    "kind": "Variable",
                    "name": "first",
                    "variableName": "count",
                    "type": "Int"
                  },
                  {
                    "kind": "Literal",
                    "name": "min_forsale_artworks",
                    "value": 7,
                    "type": "Int"
                  }
                ],
                "concreteType": "ArtistConnection",
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
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ArtistEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Artist",
                        "plural": false,
                        "selections": [
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
                                "alias": null,
                                "name": "cropped",
                                "storageKey": "cropped(height:100,width:100)",
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "height",
                                    "value": 100,
                                    "type": "Int!"
                                  },
                                  {
                                    "kind": "Literal",
                                    "name": "width",
                                    "value": 100,
                                    "type": "Int!"
                                  }
                                ],
                                "concreteType": "CroppedImageUrl",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "url",
                                    "args": null,
                                    "storageKey": null
                                  }
                                ]
                              },
                              v5
                            ]
                          },
                          v3,
                          v4,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "formatted_nationality_and_birthday",
                            "args": null,
                            "storageKey": null
                          },
                          v6,
                          v7,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "artworks_connection",
                            "storageKey": "artworks_connection(filter:\"IS_FOR_SALE\",first:20,sort:\"PUBLISHED_AT_DESC\")",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "filter",
                                "value": "IS_FOR_SALE",
                                "type": "[ArtistArtworksFilters]"
                              },
                              {
                                "kind": "Literal",
                                "name": "first",
                                "value": 20,
                                "type": "Int"
                              },
                              {
                                "kind": "Literal",
                                "name": "sort",
                                "value": "PUBLISHED_AT_DESC",
                                "type": "ArtworkSorts"
                              }
                            ],
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
                                        "name": "partner",
                                        "storageKey": "partner(shallow:true)",
                                        "args": v8,
                                        "concreteType": "Partner",
                                        "plural": false,
                                        "selections": [
                                          v4,
                                          v6,
                                          v2,
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "type",
                                            "args": null,
                                            "storageKey": null
                                          }
                                        ]
                                      },
                                      v2,
                                      v6,
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "title",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "date",
                                        "args": null,
                                        "storageKey": null
                                      },
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
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "artists",
                                        "storageKey": "artists(shallow:true)",
                                        "args": v8,
                                        "concreteType": "Artist",
                                        "plural": true,
                                        "selections": [
                                          v2,
                                          v6,
                                          v4
                                        ]
                                      },
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
                                          v5,
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
                                          v2,
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
                                              v9,
                                              v5
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
                                              v9
                                            ]
                                          },
                                          v2
                                        ]
                                      },
                                      v7,
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "is_inquireable",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      v3,
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
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "is_acquireable",
                                        "args": null,
                                        "storageKey": null
                                      },
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
                          },
                          v2,
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
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "__typename",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "cursor",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "name": "artists",
                "args": [
                  {
                    "kind": "Variable",
                    "name": "after",
                    "variableName": "cursor",
                    "type": "String"
                  },
                  {
                    "kind": "Variable",
                    "name": "first",
                    "variableName": "count",
                    "type": "Int"
                  },
                  {
                    "kind": "Literal",
                    "name": "min_forsale_artworks",
                    "value": 7,
                    "type": "Int"
                  }
                ],
                "handle": "connection",
                "key": "ArtistRecommendations_artists",
                "filters": [
                  "min_forsale_artworks"
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
(node as any).hash = '81b251cfdc19341bfd53bfcc653ebdc9';
export default node;
