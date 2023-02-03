/**
 * @generated SignedSource<<4785e1b096c8867aaeb85536455b2a98>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Todos_user$data = {
  readonly todos: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"Todo_todo">;
  } | null> | null;
  readonly " $fragmentType": "Todos_user";
};
export type Todos_user$key = {
  readonly " $data"?: Todos_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"Todos_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Todos_user",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Todo",
      "kind": "LinkedField",
      "name": "todos",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "Todo_todo"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "22fa92a6fe4ebcb7d562a83b2f7b5ff5";

export default node;
