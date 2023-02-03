/**
 * @generated SignedSource<<277731ce9ac986b2875911c20b23a4ff>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Header_user$data = {
  readonly id: string;
  readonly " $fragmentType": "Header_user";
};
export type Header_user$key = {
  readonly " $data"?: Header_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"Header_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Header_user",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "6bd1850fd3c260b57da6783c0375a2c6";

export default node;
