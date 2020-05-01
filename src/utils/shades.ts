import chroma from "chroma-js";

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
  pantones: Pantones,
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
