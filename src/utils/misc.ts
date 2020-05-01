import collections from "./seedcolors";

/**
 * find collection to pass as prop to PantonesView
 */
export function findCollection(id: string): Pantones | undefined {
  return collections.find((collection) => {
    return collection.id === id;
  });
}
