/**
 * @generated SignedSource<<c43e265560fc57cd1bfa1b9d2d306ae7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Todo_todo$data = {
  readonly id: string;
  readonly isCompleted: boolean;
  readonly title: string;
  readonly " $fragmentType": "Todo_todo";
};
export type Todo_todo$key = {
  readonly " $data"?: Todo_todo$data;
  readonly " $fragmentSpreads": FragmentRefs<"Todo_todo">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Todo_todo",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isCompleted",
      "storageKey": null
    }
  ],
  "type": "Todo",
  "abstractKey": null
};

(node as any).hash = "25957f6f23172f8d839ea26e93d987d7";

export default node;
