/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type AnalyticsPricingContextCategoryEnum = "ARCHITECTURE" | "BOOKS_AND_PORTFOLIOS" | "DESIGN_DECORATIVE_ART" | "DRAWING_COLLAGE_OTHER_WORK_ON_PAPER" | "FASHION" | "INSTALLATION" | "JEWELRY" | "MIXED_MEDIA" | "OTHER" | "PAINTING" | "PERFORMANCE" | "PHOTOGRAPHY" | "POSTERS" | "PRINT" | "SCULPTURE" | "SOUND" | "TEXTILE" | "VIDEO_FILM_ANIMATION" | "WORK_ON_PAPER" | "%future added value";
export type AnalyticsPricingContextDimensionEnum = "LARGE" | "MEDIUM" | "SMALL" | "%future added value";
export type PricingContext_artwork = {
    readonly listPrice: {
        readonly maxPrice?: {
            readonly minor: number;
        } | null;
        readonly minPrice?: {
            readonly minor: number;
        } | null;
    } | null;
    readonly artists: ReadonlyArray<{
        readonly slug: string;
    } | null> | null;
    readonly category: string | null;
    readonly pricingContext: {
        readonly appliedFiltersDisplay: string | null;
        readonly appliedFilters: {
            readonly dimension: AnalyticsPricingContextDimensionEnum | null;
            readonly category: AnalyticsPricingContextCategoryEnum | null;
        };
        readonly bins: ReadonlyArray<{
            readonly maxPrice: string | null;
            readonly maxPriceCents: number;
            readonly minPrice: string | null;
            readonly minPriceCents: number;
            readonly numArtworks: number;
        }>;
    } | null;
    readonly " $refType": "PricingContext_artwork";
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "minor",
    "args": null,
    "storageKey": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "category",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "PricingContext_artwork",
  "type": "Artwork",
  "metadata": null,
  "argumentDefinitions": [],
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
          "kind": "InlineFragment",
          "type": "PriceRange",
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "maxPrice",
              "storageKey": null,
              "args": null,
              "concreteType": "Money",
              "plural": false,
              "selections": (v0/*: any*/)
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "minPrice",
              "storageKey": null,
              "args": null,
              "concreteType": "Money",
              "plural": false,
              "selections": (v0/*: any*/)
            }
          ]
        }
      ]
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
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "slug",
          "args": null,
          "storageKey": null
        }
      ]
    },
    (v1/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "pricingContext",
      "storageKey": null,
      "args": null,
      "concreteType": "AnalyticsPricingContext",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "appliedFiltersDisplay",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "appliedFilters",
          "storageKey": null,
          "args": null,
          "concreteType": "AnalyticsPriceContextFilterType",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "dimension",
              "args": null,
              "storageKey": null
            },
            (v1/*: any*/)
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "bins",
          "storageKey": null,
          "args": null,
          "concreteType": "AnalyticsHistogramBin",
          "plural": true,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "maxPrice",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "maxPriceCents",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "minPrice",
              "args": null,
              "storageKey": null
            },
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
              "name": "numArtworks",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
})();
(node as any).hash = 'e8a766304c461d6e0254735f3d3ffa4f';
export default node;
