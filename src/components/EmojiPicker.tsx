import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EmojiPicker(props: EmojiPicker) {
  const [open, setOpen] = React.useState(false);
  const [emoji, setEmoji] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton size="small" color="primary" onClick={handleClickOpen}>
        {emoji || "E"}
      </IconButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Choose Collection Emoji"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Picker
              onSelect={(emoji) => {
                //@ts-ignore
                props.dispatch.setEmoji(emoji.native);
                //@ts-ignore
                setEmoji(emoji.native);
                handleClose();
              }}
            />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
