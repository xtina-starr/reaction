/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { ArtworkSidebar_artwork$ref } from "./ArtworkSidebar_artwork.graphql";
export type ArtworkSidebar_Test_QueryVariables = {};
export type ArtworkSidebar_Test_QueryResponse = {
    readonly artwork: ({
        readonly " $fragmentRefs": ArtworkSidebar_artwork$ref;
    }) | null;
};
export type ArtworkSidebar_Test_Query = {
    readonly response: ArtworkSidebar_Test_QueryResponse;
    readonly variables: ArtworkSidebar_Test_QueryVariables;
};



/*
query ArtworkSidebar_Test_Query {
  artwork(id: "josef-albers-homage-to-the-square-85") {
    ...ArtworkSidebar_artwork
    __id
  }
}

fragment ArtworkSidebar_artwork on Artwork {
  is_in_auction
  ...ArtworkSidebarArtists_artwork
  ...ArtworkSidebarMetadata_artwork
  ...ArtworkSidebarAuctionPartnerInfo_artwork
  ...ArtworkSidebarCurrentBidInfo_artwork
  ...ArtworkSidebarBidAction_artwork
  ...ArtworkSidebarCommercial_artwork
  ...ArtworkSidebarPartnerInfo_artwork
  ...ArtworkSidebarExtraLinks_artwork
  sale {
    is_closed
    ...AuctionTimer_sale
    __id
  }
  __id
}

fragment ArtworkSidebarArtists_artwork on Artwork {
  cultural_maker
  artists {
    __id
    _id
    id
    name
    href
    ...FollowArtistButton_artist_2eN9lh
  }
  __id
}

fragment ArtworkSidebarMetadata_artwork on Artwork {
  is_biddable
  edition_sets {
    __id
  }
  sale_artwork {
    lot_label
    __id
  }
  ...ArtworkSidebarTitleInfo_artwork
  ...ArtworkSidebarSizeInfo_piece
  ...ArtworkSidebarClassification_artwork
  __id
}

fragment ArtworkSidebarAuctionPartnerInfo_artwork on Artwork {
  _id
  partner {
    _id
    name
    __id
  }
  sale_artwork {
    estimate
    __id
  }
  sale {
    _id
    is_closed
    is_with_buyers_premium
    __id
  }
  __id
}

fragment ArtworkSidebarCurrentBidInfo_artwork on Artwork {
  _id
  sale {
    is_closed
    is_live_open
    __id
  }
  sale_artwork {
    is_with_reserve
    reserve_message
    reserve_status
    current_bid {
      display
    }
    counts {
      bidder_positions
    }
    __id
  }
  myLotStanding(live: true) {
    active_bid {
      is_winning
      __id
    }
    most_recent_bid {
      is_winning
      max_bid {
        display
      }
      __id
    }
  }
  __id
}

fragment ArtworkSidebarBidAction_artwork on Artwork {
  myLotStanding(live: true) {
    most_recent_bid {
      max_bid {
        cents
      }
      __id
    }
  }
  id
  _id
  sale {
    id
    registrationStatus {
      qualified_for_bidding
      __id
    }
    is_preview
    is_open
    is_live_open
    is_closed
    is_registration_closed
    __id
  }
  sale_artwork {
    increments {
      cents
      display
    }
    __id
  }
  __id
}

fragment ArtworkSidebarCommercial_artwork on Artwork {
  id
  _id
  is_acquireable
  is_inquireable
  is_offerable
  price
  sale_message
  shippingInfo
  shippingOrigin
  edition_sets {
    id
    __id
    is_acquireable
    is_offerable
    sale_message
    ...ArtworkSidebarSizeInfo_piece
  }
  __id
}

fragment ArtworkSidebarPartnerInfo_artwork on Artwork {
  partner {
    __id
    name
    href
    locations {
      city
      __id
    }
  }
  __id
}

fragment ArtworkSidebarExtraLinks_artwork on Artwork {
  _id
  is_in_auction
  is_for_sale
  is_acquireable
  is_inquireable
  artists {
    _id
    is_consignable
    __id
  }
  sale {
    _id
    is_closed
    __id
  }
  __id
}

fragment AuctionTimer_sale on Sale {
  live_start_at
  end_at
  __id
}

fragment ArtworkSidebarSizeInfo_piece on Sellable {
  dimensions {
    in
    cm
  }
  edition_of
  ... on Node {
    __id
  }
  ... on EditionSet {
    __id
  }
}

fragment ArtworkSidebarTitleInfo_artwork on Artwork {
  title
  date
  medium
  __id
}

fragment ArtworkSidebarClassification_artwork on Artwork {
  attribution_class {
    short_description
    __id
  }
  __id
}

fragment FollowArtistButton_artist_2eN9lh on Artist {
  __id
  id
  is_followed
  counts {
    follows
  }
  ...FollowArtistPopover_suggested
}

fragment FollowArtistPopover_suggested on Artist {
  related {
    suggested(first: 3, exclude_followed_artists: true) {
      edges {
        node {
          __id
          _id
          ...FollowArtistPopoverRow_artist
        }
      }
    }
  }
  __id
}

fragment FollowArtistPopoverRow_artist on Artist {
  id
  _id
  __id
  name
  image {
    cropped(width: 45, height: 45) {
      url
    }
    __id: id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "josef-albers-homage-to-the-square-85",
    "type": "String!"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "_id",
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
  "alias": null,
  "name": "href",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "is_acquireable",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "is_offerable",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "sale_message",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "dimensions",
  "storageKey": null,
  "args": null,
  "concreteType": "dimensions",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "in",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "cm",
      "args": null,
      "storageKey": null
    }
  ]
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "edition_of",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "display",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cents",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "is_winning",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ArtworkSidebar_Test_Query",
  "id": null,
  "text": "query ArtworkSidebar_Test_Query {\n  artwork(id: \"josef-albers-homage-to-the-square-85\") {\n    ...ArtworkSidebar_artwork\n    __id\n  }\n}\n\nfragment ArtworkSidebar_artwork on Artwork {\n  is_in_auction\n  ...ArtworkSidebarArtists_artwork\n  ...ArtworkSidebarMetadata_artwork\n  ...ArtworkSidebarAuctionPartnerInfo_artwork\n  ...ArtworkSidebarCurrentBidInfo_artwork\n  ...ArtworkSidebarBidAction_artwork\n  ...ArtworkSidebarCommercial_artwork\n  ...ArtworkSidebarPartnerInfo_artwork\n  ...ArtworkSidebarExtraLinks_artwork\n  sale {\n    is_closed\n    ...AuctionTimer_sale\n    __id\n  }\n  __id\n}\n\nfragment ArtworkSidebarArtists_artwork on Artwork {\n  cultural_maker\n  artists {\n    __id\n    _id\n    id\n    name\n    href\n    ...FollowArtistButton_artist_2eN9lh\n  }\n  __id\n}\n\nfragment ArtworkSidebarMetadata_artwork on Artwork {\n  is_biddable\n  edition_sets {\n    __id\n  }\n  sale_artwork {\n    lot_label\n    __id\n  }\n  ...ArtworkSidebarTitleInfo_artwork\n  ...ArtworkSidebarSizeInfo_piece\n  ...ArtworkSidebarClassification_artwork\n  __id\n}\n\nfragment ArtworkSidebarAuctionPartnerInfo_artwork on Artwork {\n  _id\n  partner {\n    _id\n    name\n    __id\n  }\n  sale_artwork {\n    estimate\n    __id\n  }\n  sale {\n    _id\n    is_closed\n    is_with_buyers_premium\n    __id\n  }\n  __id\n}\n\nfragment ArtworkSidebarCurrentBidInfo_artwork on Artwork {\n  _id\n  sale {\n    is_closed\n    is_live_open\n    __id\n  }\n  sale_artwork {\n    is_with_reserve\n    reserve_message\n    reserve_status\n    current_bid {\n      display\n    }\n    counts {\n      bidder_positions\n    }\n    __id\n  }\n  myLotStanding(live: true) {\n    active_bid {\n      is_winning\n      __id\n    }\n    most_recent_bid {\n      is_winning\n      max_bid {\n        display\n      }\n      __id\n    }\n  }\n  __id\n}\n\nfragment ArtworkSidebarBidAction_artwork on Artwork {\n  myLotStanding(live: true) {\n    most_recent_bid {\n      max_bid {\n        cents\n      }\n      __id\n    }\n  }\n  id\n  _id\n  sale {\n    id\n    registrationStatus {\n      qualified_for_bidding\n      __id\n    }\n    is_preview\n    is_open\n    is_live_open\n    is_closed\n    is_registration_closed\n    __id\n  }\n  sale_artwork {\n    increments {\n      cents\n      display\n    }\n    __id\n  }\n  __id\n}\n\nfragment ArtworkSidebarCommercial_artwork on Artwork {\n  id\n  _id\n  is_acquireable\n  is_inquireable\n  is_offerable\n  price\n  sale_message\n  shippingInfo\n  shippingOrigin\n  edition_sets {\n    id\n    __id\n    is_acquireable\n    is_offerable\n    sale_message\n    ...ArtworkSidebarSizeInfo_piece\n  }\n  __id\n}\n\nfragment ArtworkSidebarPartnerInfo_artwork on Artwork {\n  partner {\n    __id\n    name\n    href\n    locations {\n      city\n      __id\n    }\n  }\n  __id\n}\n\nfragment ArtworkSidebarExtraLinks_artwork on Artwork {\n  _id\n  is_in_auction\n  is_for_sale\n  is_acquireable\n  is_inquireable\n  artists {\n    _id\n    is_consignable\n    __id\n  }\n  sale {\n    _id\n    is_closed\n    __id\n  }\n  __id\n}\n\nfragment AuctionTimer_sale on Sale {\n  live_start_at\n  end_at\n  __id\n}\n\nfragment ArtworkSidebarSizeInfo_piece on Sellable {\n  dimensions {\n    in\n    cm\n  }\n  edition_of\n  ... on Node {\n    __id\n  }\n  ... on EditionSet {\n    __id\n  }\n}\n\nfragment ArtworkSidebarTitleInfo_artwork on Artwork {\n  title\n  date\n  medium\n  __id\n}\n\nfragment ArtworkSidebarClassification_artwork on Artwork {\n  attribution_class {\n    short_description\n    __id\n  }\n  __id\n}\n\nfragment FollowArtistButton_artist_2eN9lh on Artist {\n  __id\n  id\n  is_followed\n  counts {\n    follows\n  }\n  ...FollowArtistPopover_suggested\n}\n\nfragment FollowArtistPopover_suggested on Artist {\n  related {\n    suggested(first: 3, exclude_followed_artists: true) {\n      edges {\n        node {\n          __id\n          _id\n          ...FollowArtistPopoverRow_artist\n        }\n      }\n    }\n  }\n  __id\n}\n\nfragment FollowArtistPopoverRow_artist on Artist {\n  id\n  _id\n  __id\n  name\n  image {\n    cropped(width: 45, height: 45) {\n      url\n    }\n    __id: id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ArtworkSidebar_Test_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artwork",
        "storageKey": "artwork(id:\"josef-albers-homage-to-the-square-85\")",
        "args": v0,
        "concreteType": "Artwork",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ArtworkSidebar_artwork",
            "args": null
          },
          v1
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ArtworkSidebar_Test_Query",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artwork",
        "storageKey": "artwork(id:\"josef-albers-homage-to-the-square-85\")",
        "args": v0,
        "concreteType": "Artwork",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "attribution_class",
            "storageKey": null,
            "args": null,
            "concreteType": "AttributionClass",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "short_description",
                "args": null,
                "storageKey": null
              },
              v1
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "is_in_auction",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "artists",
            "storageKey": null,
            "args": null,
            "concreteType": "Artist",
            "plural": true,
            "selections": [
              v1,
              v2,
              v3,
              v4,
              v5,
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
                    "name": "suggested",
                    "storageKey": "suggested(exclude_followed_artists:true,first:3)",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "exclude_followed_artists",
                        "value": true,
                        "type": "Boolean"
                      },
                      {
                        "kind": "Literal",
                        "name": "first",
                        "value": 3,
                        "type": "Int"
                      }
                    ],
                    "concreteType": "ArtistConnection",
                    "plural": false,
                    "selections": [
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
                              v1,
                              v2,
                              v3,
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
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "cropped",
                                    "storageKey": "cropped(height:45,width:45)",
                                    "args": [
                                      {
                                        "kind": "Literal",
                                        "name": "height",
                                        "value": 45,
                                        "type": "Int!"
                                      },
                                      {
                                        "kind": "Literal",
                                        "name": "width",
                                        "value": 45,
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
                                  {
                                    "kind": "ScalarField",
                                    "alias": "__id",
                                    "name": "id",
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
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "is_consignable",
                "args": null,
                "storageKey": null
              }
            ]
          },
          v1,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "is_biddable",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edition_sets",
            "storageKey": null,
            "args": null,
            "concreteType": "EditionSet",
            "plural": true,
            "selections": [
              v1,
              v3,
              v6,
              v7,
              v8,
              v9,
              v10
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
                "kind": "ScalarField",
                "alias": null,
                "name": "lot_label",
                "args": null,
                "storageKey": null
              },
              v1,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "estimate",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "is_with_reserve",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "reserve_message",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "reserve_status",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "current_bid",
                "storageKey": null,
                "args": null,
                "concreteType": "SaleArtworkCurrentBid",
                "plural": false,
                "selections": [
                  v11
                ]
              },
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
                "name": "increments",
                "storageKey": null,
                "args": null,
                "concreteType": "BidIncrementsFormatted",
                "plural": true,
                "selections": [
                  v12,
                  v11
                ]
              }
            ]
          },
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
            "name": "medium",
            "args": null,
            "storageKey": null
          },
          v9,
          v10,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "shippingOrigin",
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
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "partner",
            "storageKey": null,
            "args": null,
            "concreteType": "Partner",
            "plural": false,
            "selections": [
              v2,
              v4,
              v1,
              v5,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "locations",
                "storageKey": null,
                "args": null,
                "concreteType": "Location",
                "plural": true,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "city",
                    "args": null,
                    "storageKey": null
                  },
                  v1
                ]
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
                "kind": "LinkedField",
                "alias": null,
                "name": "registrationStatus",
                "storageKey": null,
                "args": null,
                "concreteType": "Bidder",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "qualified_for_bidding",
                    "args": null,
                    "storageKey": null
                  },
                  v1
                ]
              },
              v2,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "is_with_buyers_premium",
                "args": null,
                "storageKey": null
              },
              v1,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "is_live_open",
                "args": null,
                "storageKey": null
              },
              v3,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "is_closed",
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
                "name": "is_open",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "is_registration_closed",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "live_start_at",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "end_at",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "myLotStanding",
            "storageKey": "myLotStanding(live:true)",
            "args": [
              {
                "kind": "Literal",
                "name": "live",
                "value": true,
                "type": "Boolean"
              }
            ],
            "concreteType": "LotStanding",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "active_bid",
                "storageKey": null,
                "args": null,
                "concreteType": "BidderPosition",
                "plural": false,
                "selections": [
                  v13,
                  v1
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "most_recent_bid",
                "storageKey": null,
                "args": null,
                "concreteType": "BidderPosition",
                "plural": false,
                "selections": [
                  v13,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "max_bid",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "BidderPositionMaxBid",
                    "plural": false,
                    "selections": [
                      v11,
                      v12
                    ]
                  },
                  v1
                ]
              }
            ]
          },
          v3,
          v6,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "is_inquireable",
            "args": null,
            "storageKey": null
          },
          v7,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "price",
            "args": null,
            "storageKey": null
          },
          v8,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "shippingInfo",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "is_for_sale",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
(node as any).hash = 'f514953a26e47af3f318aa2e5a0f52b5';
export default node;
