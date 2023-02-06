import React from "react";
import PropTypes from "prop-types";

function Grid({ items, render, onReorder }) {
  const allowDrop = (ev) => {
    ev.preventDefault();
  };

  const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
  };

  const drop = (ev) => {
    ev.preventDefault();
    let eventData = ev.dataTransfer.getData("text");
    const targetElement = document.getElementById(eventData);

    let dropzone = ev.target;
    while (!dropzone.classList.contains("dropzone")) {
      dropzone = dropzone.parentNode;
    }

    const sourceIndex = items.findIndex(
      (i) => `chart_id_${i.id}` === dropzone.id
    );
    const targetIndex = items.findIndex(
      (i) => `chart_id_${i.id}` === targetElement.id
    );

    if (targetIndex === sourceIndex) {
      return false;
    }

    const temp = items[targetIndex];
    items[targetIndex] = items[sourceIndex];
    items[sourceIndex] = temp;

    onReorder(items);
  };

  return (
    <div className="grid-container">
      {items.map((item, key) => (
        <div
          onDrop={drop}
          onDragOver={allowDrop}
          id={`chart_id_${item.id}`}
          className={`dropzone`}
        >
          <div
            id={`chart_id_${item.id}`}
            className="grid-item"
            draggable="true"
            onDragStart={drag}
          >
            {render(item)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Grid;
