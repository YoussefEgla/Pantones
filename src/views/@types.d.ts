interface Collections {
  collections: SeedColletion[];
}

interface Shades {
  collection: PantonesWithShades;
}

interface NewCollection {
  dispatch: {
    addCollection: Function;
  };
}
