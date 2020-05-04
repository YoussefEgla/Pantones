interface SeedCollection {
  name: string;
  id: string;
  emoji?: string;
  colors: { name: string; color: string }[];
}

interface Collections {
  collections: SeedColletion[];
}

interface Shades {
  collection: PantonesWithShades;
}
