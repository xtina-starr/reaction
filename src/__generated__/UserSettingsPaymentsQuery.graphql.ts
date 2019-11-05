/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserSettingsPaymentsQueryVariables = {};
export type UserSettingsPaymentsQueryResponse = {
    readonly me: {
        readonly " $fragmentRefs": FragmentRefs<"UserSettingsPayments_me">;
    } | null;
};
export type UserSettingsPaymentsQuery = {
    readonly response: UserSettingsPaymentsQueryResponse;
    readonly variables: UserSettingsPaymentsQueryVariables;
};



/*
query UserSettingsPaymentsQuery {
  me {
    ...UserSettingsPayments_me
    id
  }
}

fragment UserSettingsPayments_me on Me {
  id
  internalID
  creditCards(first: 100) {
    edges {
      node {
        id
        internalID
        brand
        last_digits: lastDigits
        expiration_year: expirationYear
        expiration_month: expirationMonth
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "internalID",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UserSettingsPaymentsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "me",
        "storageKey": null,
        "args": null,
        "concreteType": "Me",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "UserSettingsPayments_me",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UserSettingsPaymentsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "me",
        "storageKey": null,
        "args": null,
        "concreteType": "Me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "creditCards",
            "storageKey": "creditCards(first:100)",
            "args": (v2/*: any*/),
            "concreteType": "CreditCardConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "CreditCardEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CreditCard",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      (v1/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "brand",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": "last_digits",
                        "name": "lastDigits",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": "expiration_year",
                        "name": "expirationYear",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": "expiration_month",
                        "name": "expirationMonth",
                        "args": null,
                        "storageKey": null
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
              },
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
                    "name": "endCursor",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasNextPage",
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
            "name": "creditCards",
            "args": (v2/*: any*/),
            "handle": "connection",
            "key": "UserSettingsPayments_creditCards",
            "filters": []
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "UserSettingsPaymentsQuery",
    "id": null,
    "text": "query UserSettingsPaymentsQuery {\n  me {\n    ...UserSettingsPayments_me\n    id\n  }\n}\n\nfragment UserSettingsPayments_me on Me {\n  id\n  internalID\n  creditCards(first: 100) {\n    edges {\n      node {\n        id\n        internalID\n        brand\n        last_digits: lastDigits\n        expiration_year: expirationYear\n        expiration_month: expirationMonth\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '979a38cba2d2f95be025a730d894ca44';
export default node;
