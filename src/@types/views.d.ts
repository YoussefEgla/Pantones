interface Pantones {
  name: string;
  id: string;
  emoji?: string;
  colors: { name: string; color: string }[];
}

interface CollectionsList {
  collections: Pantones[];
}

interface Shades {
  collection: PantonesWithShades;
}
