interface PantoneBox {
  color: string;
  name: string;
  id: string;
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

interface DraggableBox {
  dispatch: { removeColor: Function };
  color: string;
  name: string;
}

interface ColorPicker {
  dispatch: {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    addColor: Function;
    handleSubmit: Function;
  };
  open: boolean;
}
