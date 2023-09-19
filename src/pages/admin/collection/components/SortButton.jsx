import { useState } from "react";

const SortButton = () => {
  const [sort, setSort] = useState("sort");

  return (
    <span className="sort-btn">
      {sort}
      <span className="option-arrow"></span>
      <container className="option-container-right sort-btn-option-container">
        <div className="options">recent</div>
        <div className="options selected">alphabetical</div>
        <div className="options">most members</div>
        <div className="options">most due</div>
      </container>
    </span>
  );
};

export default SortButton;
