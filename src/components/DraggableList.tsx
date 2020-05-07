import React, { Fragment } from "react";
import { SortableContainer } from "react-sortable-hoc";
import { DraggableBox } from "./";

// @ts-ignore
export default SortableContainer(function DraggableList(props) {
  return (
    <Fragment>
      {
        //@ts-ignore
        props.colors.map((color, i) => (
          <DraggableBox
            {...color}
            key={color.color}
            dispatch={{ removeColor: props.dispatch.removeColor }}
            index={i}
          />
        ))
      }
    </Fragment>
  );
});
