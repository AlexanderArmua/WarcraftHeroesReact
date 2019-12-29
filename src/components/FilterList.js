import React from "react";

function FilterList(props) {
  return (
    <div className="form-group">
      <label htmlFor="inputFilter">Filter Heroes</label>
      <input
        type="text"
        id="inputFilter"
        name="inputFilter"
        className="form-control"
        value={props.filterValue}
        onChange={e => {
          props.onChange(e.target.value);
        }}
      />
    </div>
  );
}

export default FilterList;
