import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import FlatPagination from "material-ui-flat-pagination";

export default function Pagination(props) {
  const limit = props.limit;
  const offset = props.offset;
  const total = props.total;
  const onClick = props.onClick;

  return (
    <div>
      <CssBaseline />
      <FlatPagination limit={limit} offset={offset} total={total} onClick={onClick} />
    </div>
  );
}

Pagination.propTypes = {
  limit: PropTypes.number,
  offset: PropTypes.number,
  total: PropTypes.number,
  onClick: PropTypes.func,
};
