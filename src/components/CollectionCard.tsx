import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";
import { collectionCardStyles as useStyles } from "./styles";

export default function MiniCollection(props: CollectionCard) {
  const classes = useStyles();

  const miniPantones = props.colors.map(({ name, color }) => (
    <div
      className={classes.mini}
      style={{ backgroundColor: color }}
      key={name}
    />
  ));

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Link to={`/collection/${props.id}`} className={classes.link}>
          {miniPantones}
        </Link>
      </div>

      <Typography variant="button" className={classes.title}>
        <span>
          <Link to={`/collection/${props.id}`}>{props.name}</Link>
        </span>
        <span>
          <Link to={`/collection/${props.id}`}>{props.emoji}</Link>
        </span>
      </Typography>
      <div style={{ alignSelf: "flex-end" }}>
        <Button
          size="small"
          variant="contained"
          color="primary"
          style={{ margin: "0 5px 0 0" }}
        >
          Edit
        </Button>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={() => props.dispatch.deleteCollection(props.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
