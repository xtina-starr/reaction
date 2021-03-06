/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
declare const _ArtworkSidebarTitleInfo_artwork$ref: unique symbol;
export type ArtworkSidebarTitleInfo_artwork$ref = typeof _ArtworkSidebarTitleInfo_artwork$ref;
export type ArtworkSidebarTitleInfo_artwork = {
    readonly title: string | null;
    readonly date: string | null;
    readonly medium: string | null;
    readonly " $refType": ArtworkSidebarTitleInfo_artwork$ref;
};



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "ArtworkSidebarTitleInfo_artwork",
  "type": "Artwork",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "__id",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '3a3e32595a7e874f0bca9e3ce4033193';
export default node;
