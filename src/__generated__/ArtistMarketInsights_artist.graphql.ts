/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
declare const _ArtistMarketInsights_artist$ref: unique symbol;
export type ArtistMarketInsights_artist$ref = typeof _ArtistMarketInsights_artist$ref;
export type ArtistMarketInsights_artist = {
    readonly _id: string;
    readonly collections: ReadonlyArray<string | null> | null;
    readonly highlights: ({
        readonly partners: ({
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly categories: ReadonlyArray<({
                        readonly id: string;
                    }) | null> | null;
                }) | null;
            }) | null> | null;
        }) | null;
    }) | null;
    readonly auctionResults: ({
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly price_realized: ({
                    readonly display: string | null;
                }) | null;
                readonly organization: string | null;
                readonly sale_date: string | null;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly " $refType": ArtistMarketInsights_artist$ref;
};



const node: ConcreteFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "ArtistMarketInsights_artist",
  "type": "Artist",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "partner_category",
      "type": "[String]",
      "defaultValue": [
        "blue-chip",
        "top-established",
        "top-emerging"
      ]
    }
  ],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "_id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "collections",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "highlights",
      "storageKey": null,
      "args": null,
      "concreteType": "ArtistHighlights",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "partners",
          "storageKey": null,
          "args": [
            {
              "kind": "Literal",
              "name": "display_on_partner_profile",
              "value": true,
              "type": "Boolean"
            },
            {
              "kind": "Literal",
              "name": "first",
              "value": 10,
              "type": "Int"
            },
            {
              "kind": "Variable",
              "name": "partner_category",
              "variableName": "partner_category",
              "type": "[String]"
            },
            {
              "kind": "Literal",
              "name": "represented_by",
              "value": true,
              "type": "Boolean"
            }
          ],
          "concreteType": "PartnerArtistConnection",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "edges",
              "storageKey": null,
              "args": null,
              "concreteType": "PartnerArtistEdge",
              "plural": true,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "node",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "Partner",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "categories",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "Category",
                      "plural": true,
                      "selections": [
                        {
                          "kind": "ScalarField",
                          "alias": null,
                          "name": "id",
                          "args": null,
                          "storageKey": null
                        },
                        v0
                      ]
                    },
                    v0
                  ]
                },
                v0
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "auctionResults",
      "storageKey": "auctionResults(first:1,recordsTrusted:true,sort:\"PRICE_AND_DATE_DESC\")",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 1,
          "type": "Int"
        },
        {
          "kind": "Literal",
          "name": "recordsTrusted",
          "value": true,
          "type": "Boolean"
        },
        {
          "kind": "Literal",
          "name": "sort",
          "value": "PRICE_AND_DATE_DESC",
          "type": "AuctionResultSorts"
        }
      ],
      "concreteType": "AuctionResultConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "AuctionResultEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "AuctionResult",
              "plural": false,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "price_realized",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "AuctionResultPriceRealized",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "display",
                      "args": [
                        {
                          "kind": "Literal",
                          "name": "format",
                          "value": "0a",
                          "type": "String"
                        }
                      ],
                      "storageKey": "display(format:\"0a\")"
                    }
                  ]
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "organization",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "sale_date",
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "format",
                      "value": "YYYY",
                      "type": "String"
                    }
                  ],
                  "storageKey": "sale_date(format:\"YYYY\")"
                },
                v0
              ]
            }
          ]
        }
      ]
    },
    v0
  ]
};
})();
(node as any).hash = 'dee342713999d33f48569233295b10b8';
export default node;
