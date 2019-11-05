/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type FollowArtistInput = {
    readonly artistID: string;
    readonly unfollow?: boolean | null;
    readonly clientMutationId?: string | null;
};
export type PopularArtistsFollowArtistMutationVariables = {
    input: FollowArtistInput;
    excludedArtistIds: ReadonlyArray<string | null>;
};
export type PopularArtistsFollowArtistMutationResponse = {
    readonly followArtist: {
        readonly popular_artists: ReadonlyArray<{
            readonly related: {
                readonly artistsConnection: {
                    readonly edges: ReadonlyArray<{
                        readonly node: {
                            readonly slug: string;
                            readonly internalID: string;
                            readonly id: string;
                            readonly name: string | null;
                            readonly image: {
                                readonly cropped: {
                                    readonly url: string | null;
                                } | null;
                            } | null;
                        } | null;
                    } | null> | null;
                } | null;
            } | null;
        } | null> | null;
        readonly artist: {
            readonly id: string;
            readonly related: {
                readonly suggestedConnection: {
                    readonly edges: ReadonlyArray<{
                        readonly node: {
                            readonly slug: string;
                            readonly internalID: string;
                            readonly id: string;
                            readonly name: string | null;
                            readonly image: {
                                readonly cropped: {
                                    readonly url: string | null;
                                } | null;
                            } | null;
                        } | null;
                    } | null> | null;
                } | null;
            } | null;
        } | null;
    } | null;
};
export type PopularArtistsFollowArtistMutation = {
    readonly response: PopularArtistsFollowArtistMutationResponse;
    readonly variables: PopularArtistsFollowArtistMutationVariables;
};



/*
mutation PopularArtistsFollowArtistMutation(
  $input: FollowArtistInput!
  $excludedArtistIds: [String]!
) {
  followArtist(input: $input) {
    popular_artists: popularArtists(size: 1, excludeFollowedArtists: true, excludeArtistIDs: $excludedArtistIds) {
      related {
        artistsConnection {
          edges {
            node {
              slug
              internalID
              id
              name
              image {
                cropped(width: 100, height: 100) {
                  url
                }
              }
            }
          }
        }
      }
      id
    }
    artist {
      id
      related {
        suggestedConnection(first: 1, excludeFollowedArtists: true, excludeArtistIDs: $excludedArtistIds) {
          edges {
            node {
              slug
              internalID
              id
              name
              image {
                cropped(width: 100, height: 100) {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "FollowArtistInput!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "excludedArtistIds",
    "type": "[String]!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "Variable",
  "name": "excludeArtistIDs",
  "variableName": "excludedArtistIds"
},
v3 = {
  "kind": "Literal",
  "name": "excludeFollowedArtists",
  "value": true
},
v4 = [
  (v2/*: any*/),
  (v3/*: any*/),
  {
    "kind": "Literal",
    "name": "size",
    "value": 1
  }
],
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v6 = [
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
            "kind": "ScalarField",
            "alias": null,
            "name": "slug",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "internalID",
            "args": null,
            "storageKey": null
          },
          (v5/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
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
                "kind": "LinkedField",
                "alias": null,
                "name": "cropped",
                "storageKey": "cropped(height:100,width:100)",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "height",
                    "value": 100
                  },
                  {
                    "kind": "Literal",
                    "name": "width",
                    "value": 100
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
          }
        ]
      }
    ]
  }
],
v7 = {
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
      "name": "artistsConnection",
      "storageKey": null,
      "args": null,
      "concreteType": "ArtistConnection",
      "plural": false,
      "selections": (v6/*: any*/)
    }
  ]
},
v8 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "artist",
  "storageKey": null,
  "args": null,
  "concreteType": "Artist",
  "plural": false,
  "selections": [
    (v5/*: any*/),
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
          "name": "suggestedConnection",
          "storageKey": null,
          "args": [
            (v2/*: any*/),
            (v3/*: any*/),
            {
              "kind": "Literal",
              "name": "first",
              "value": 1
            }
          ],
          "concreteType": "ArtistConnection",
          "plural": false,
          "selections": (v6/*: any*/)
        }
      ]
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "PopularArtistsFollowArtistMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "followArtist",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "FollowArtistPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": "popular_artists",
            "name": "popularArtists",
            "storageKey": null,
            "args": (v4/*: any*/),
            "concreteType": "Artist",
            "plural": true,
            "selections": [
              (v7/*: any*/)
            ]
          },
          (v8/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PopularArtistsFollowArtistMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "followArtist",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "FollowArtistPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": "popular_artists",
            "name": "popularArtists",
            "storageKey": null,
            "args": (v4/*: any*/),
            "concreteType": "Artist",
            "plural": true,
            "selections": [
              (v7/*: any*/),
              (v5/*: any*/)
            ]
          },
          (v8/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "PopularArtistsFollowArtistMutation",
    "id": null,
    "text": "mutation PopularArtistsFollowArtistMutation(\n  $input: FollowArtistInput!\n  $excludedArtistIds: [String]!\n) {\n  followArtist(input: $input) {\n    popular_artists: popularArtists(size: 1, excludeFollowedArtists: true, excludeArtistIDs: $excludedArtistIds) {\n      related {\n        artistsConnection {\n          edges {\n            node {\n              slug\n              internalID\n              id\n              name\n              image {\n                cropped(width: 100, height: 100) {\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n      id\n    }\n    artist {\n      id\n      related {\n        suggestedConnection(first: 1, excludeFollowedArtists: true, excludeArtistIDs: $excludedArtistIds) {\n          edges {\n            node {\n              slug\n              internalID\n              id\n              name\n              image {\n                cropped(width: 100, height: 100) {\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '30b3d6895fd89ed0d424f390384962ac';
export default node;
