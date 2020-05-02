import React, {
  useState,
  createContext,
  Context,
  ReactElement,
  ReactChildren,
} from "react";
import collection from "../utils/seedcolors";
import { findCollection } from "../utils/misc";
import { collectionWithShades } from "../utils/shades";

let initialCollection = collectionWithShades(collection[0]);
export const CollectionContext: Context<PantonesWithShades> = createContext(
  initialCollection
);

// @ts-ignore
export function CollectionProvider(props) {
  const [currentCollection, setCollection] = useState(initialCollection);

  return (
    <CollectionContext.Provider value={currentCollection}>
      {props.children}
    </CollectionContext.Provider>
  );
}
