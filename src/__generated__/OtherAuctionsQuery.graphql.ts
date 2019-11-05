/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SaleSorts = "CREATED_AT_ASC" | "CREATED_AT_DESC" | "ELIGIBLE_SALE_ARTWORKS_COUNT_ASC" | "ELIGIBLE_SALE_ARTWORKS_COUNT_DESC" | "END_AT_ASC" | "END_AT_DESC" | "NAME_ASC" | "NAME_DESC" | "START_AT_ASC" | "START_AT_DESC" | "TIMELY_AT_NAME_ASC" | "TIMELY_AT_NAME_DESC" | "_ID_ASC" | "_ID_DESC" | "%future added value";
export type OtherAuctionsQueryVariables = {
    sort?: SaleSorts | null;
};
export type OtherAuctionsQueryResponse = {
    readonly salesConnection: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly " $fragmentRefs": FragmentRefs<"OtherAuctions_sales">;
            } | null;
        } | null> | null;
    } | null;
};
export type OtherAuctionsQuery = {
    readonly response: OtherAuctionsQueryResponse;
    readonly variables: OtherAuctionsQueryVariables;
};



/*
query OtherAuctionsQuery(
  $sort: SaleSorts
) {
  salesConnection(sort: $sort) {
    edges {
      node {
        ...OtherAuctions_sales
        id
      }
    }
  }
}

fragment OtherAuctions_sales on Sale {
  ...AuctionCard_sale
}

fragment AuctionCard_sale on Sale {
  cover_image: coverImage {
    cropped(width: 200, height: 180) {
      url
    }
  }
  isBenefit
  isGalleryAuction
  end_at: endAt
  href
  slug
  is_live_open: isLiveOpen
  is_preview: isPreview
  live_start_at: liveStartAt
  registrationStatus {
    internalID
    id
  }
  is_registration_closed: isRegistrationClosed
  name
  start_at: startAt
  is_closed: isClosed
  partner {
    name
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "sort",
    "type": "SaleSorts",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "sort",
    "variableName": "sort"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "OtherAuctionsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "salesConnection",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "SaleConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "SaleEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Sale",
                "plural": false,
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "OtherAuctions_sales",
                    "args": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "OtherAuctionsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "salesConnection",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "SaleConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "SaleEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Sale",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": "cover_image",
                    "name": "coverImage",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Image",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "cropped",
                        "storageKey": "cropped(height:180,width:200)",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "height",
                            "value": 180
                          },
                          {
                            "kind": "Literal",
                            "name": "width",
                            "value": 200
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
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "isBenefit",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "isGalleryAuction",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": "end_at",
                    "name": "endAt",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "href",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "slug",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": "is_live_open",
                    "name": "isLiveOpen",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": "is_preview",
                    "name": "isPreview",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": "live_start_at",
                    "name": "liveStartAt",
                    "args": null,
                    "storageKey": null
                  },
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
                        "name": "internalID",
                        "args": null,
                        "storageKey": null
                      },
                      (v2/*: any*/)
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": "is_registration_closed",
                    "name": "isRegistrationClosed",
                    "args": null,
                    "storageKey": null
                  },
                  (v3/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": "start_at",
                    "name": "startAt",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": "is_closed",
                    "name": "isClosed",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "partner",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Partner",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v2/*: any*/)
                    ]
                  },
                  (v2/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "OtherAuctionsQuery",
    "id": null,
    "text": "query OtherAuctionsQuery(\n  $sort: SaleSorts\n) {\n  salesConnection(sort: $sort) {\n    edges {\n      node {\n        ...OtherAuctions_sales\n        id\n      }\n    }\n  }\n}\n\nfragment OtherAuctions_sales on Sale {\n  ...AuctionCard_sale\n}\n\nfragment AuctionCard_sale on Sale {\n  cover_image: coverImage {\n    cropped(width: 200, height: 180) {\n      url\n    }\n  }\n  isBenefit\n  isGalleryAuction\n  end_at: endAt\n  href\n  slug\n  is_live_open: isLiveOpen\n  is_preview: isPreview\n  live_start_at: liveStartAt\n  registrationStatus {\n    internalID\n    id\n  }\n  is_registration_closed: isRegistrationClosed\n  name\n  start_at: startAt\n  is_closed: isClosed\n  partner {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '41feacf1e4d4e8e64584ae1e2586ecfe';
export default node;
