import chroma from "chroma-js";
import { seedCollections } from "./";

/**
 * find collection to pass as prop to PantonesView
 */
export function findCollection(id: string): SeedCollection | undefined {
  return seedCollections.find((collection) => {
    return collection.id === id;
  });
}

/**
 * Generate a range for shades
 */
function range(hex: string) {
  const end = "#fff";
  return [chroma(hex).darken(1.4).hex(), hex, end];
}

/**
 * Generate shades
 */
function scale(hex: string, num: number): string[] {
  return chroma.scale(range(hex)).mode("lab").colors(num);
}

/**
 * Generate collection with shades
 */
export function collectionWithShades(
  pantones: SeedCollection,
  levels: number[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
): PantonesWithShades {
  // make new pantone out of the provided one
  let newPantones: PantonesWithShades = {
    name: pantones.name,
    id: pantones.id,
    emoji: pantones.emoji,
    colors: levels.reduce((a, key) => Object.assign(a, { [key]: [] }), {}),
  };

  for (let pantone of pantones.colors) {
    let pantoneScale = scale(pantone.color, 10).reverse();
    for (let i in pantoneScale) {
      newPantones.colors[levels[i]].push({
        name: `${pantone.name} ${levels[i]}`,
        id: `${pantone.name.toLowerCase()}-${levels[i]}`,
        hex: pantoneScale[i],
        rgb: chroma(pantoneScale[i]).css(),
        rgba: chroma(pantoneScale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)"),
      });
    }
  }
  return newPantones;
}

/**
 * Return shades of a pantone
 */
export function filterShades(
  collection: PantonesWithShades,
  colorToFilter: string
) {
  let shades: any = [];
  let allColors = collection.colors;

  for (let key in allColors) {
    shades.push(
      ...allColors[key].filter(
        (color) => color.id.split("-")[0] === colorToFilter
      )
    );
  }

  return shades.slice(1);
}
