/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
import { FollowProfileButton_profile$ref } from "./FollowProfileButton_profile.graphql";
declare const _ArtworkDetailsAboutTheWorkFromPartner_artwork$ref: unique symbol;
export type ArtworkDetailsAboutTheWorkFromPartner_artwork$ref = typeof _ArtworkDetailsAboutTheWorkFromPartner_artwork$ref;
export type ArtworkDetailsAboutTheWorkFromPartner_artwork = {
    readonly additional_information: string | null;
    readonly sale: ({
        readonly isBenefit: boolean | null;
        readonly isGalleryAuction: boolean | null;
    }) | null;
    readonly partner: ({
        readonly _id: string;
        readonly id: string;
        readonly type: string | null;
        readonly href: string | null;
        readonly name: string | null;
        readonly initials: string | null;
        readonly locations: ReadonlyArray<({
            readonly city: string | null;
        }) | null> | null;
        readonly is_default_profile_public: boolean | null;
        readonly profile: ({
            readonly id: string;
            readonly icon: ({
                readonly url: string | null;
            }) | null;
            readonly " $fragmentRefs": FollowProfileButton_profile$ref;
        }) | null;
    }) | null;
    readonly " $refType": ArtworkDetailsAboutTheWorkFromPartner_artwork$ref;
};



const node: ConcreteFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "ArtworkDetailsAboutTheWorkFromPartner_artwork",
  "type": "Artwork",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "additional_information",
      "args": [
        {
          "kind": "Literal",
          "name": "format",
          "value": "HTML",
          "type": "Format"
        }
      ],
      "storageKey": "additional_information(format:\"HTML\")"
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
        v0
      ]
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
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "_id",
          "args": null,
          "storageKey": null
        },
        v1,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "type",
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
          "name": "name",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "initials",
          "args": null,
          "storageKey": null
        },
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
            v0
          ]
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "is_default_profile_public",
          "args": null,
          "storageKey": null
        },
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
              "kind": "FragmentSpread",
              "name": "FollowProfileButton_profile",
              "args": null
            },
            v1,
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "icon",
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
                      "value": "square140",
                      "type": "[String]"
                    }
                  ],
                  "storageKey": "url(version:\"square140\")"
                },
                {
                  "kind": "ScalarField",
                  "alias": "__id",
                  "name": "id",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            v0
          ]
        },
        v0
      ]
    },
    v0
  ]
};
})();
(node as any).hash = 'b10480d701a172845d0dccc414c0bd2f';
export default node;
