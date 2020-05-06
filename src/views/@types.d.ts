interface Collections {
  collections: SeedColletion[];
  dispatch: {
    deleteCollection: Function;
  };
}

interface Shades {
  collection: PantonesWithShades;
}

interface NewCollection {
  dispatch: {
    addCollection: Function;
  };
}
