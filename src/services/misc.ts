import collections from "./seedcolors";

/**
 * find collection to pass as prop to PantonesView
 */
export function findCollection(id: string): SeedCollection | undefined {
  return collections.find((collection) => {
    return collection.id === id;
  });
}
