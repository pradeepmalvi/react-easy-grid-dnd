import React from "react";
import PropTypes from "prop-types";
import Grid from "./Grid";
import "./index.css";

function index({ items, render, onReorder }) {
  return <Grid items={items} onReorder={onReorder} render={render} />;
}

index.propTypes = {
  items: PropTypes.array,
  render: PropTypes.func,
  onReorder: PropTypes.func,
};

export default index;
