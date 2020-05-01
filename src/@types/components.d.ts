interface PantoneBox {
  color: string;
  name: string;
}

type ColorFormat = "hex" | "rgb" | "rgba";

interface PantoneNavbar {
  dispatch: {
    setAnimateList: React.Dispatch<React.SetStateAction<boolean>>;
    setShade: React.Dispatch<React.SetStateAction<number>>;
    setColorFormat: React.Dispatch<React.SetStateAction<string>>;
  };
  colorFormat: string;
}
