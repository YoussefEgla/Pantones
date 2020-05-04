interface PantonesWithShades {
  name: string;
  id: string;
  emoji?: string;
  colors: {
    [key: number]: {
      name: string;
      id: string;
      hex: string;
      rgb: string;
      rgba: string;
    }[];
  };
}

interface SeedCollection {
  name: string;
  id: string;
  emoji?: string;
  colors: { name: string; color: string }[];
}
