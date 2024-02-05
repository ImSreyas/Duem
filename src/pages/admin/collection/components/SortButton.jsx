import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortStateChange, updateSortValue } from "../../../../store/options";
import { refContext } from "../../../../App";

const SortButton = () => {
  const sortValue = useSelector((state) => state?.options?.value?.sort?.value);
  const sortState = useSelector((state) => state?.options?.value?.sort?.state);
  const dispatch = useDispatch();
  const { sortRef } = useContext(refContext);
  // console.log(sortState);
  const handleOnChange = () => {
    dispatch(sortStateChange());
  };
  const handleOptionClick = (e) => {
    const val = ["none", "recent", "alphabetical", "members", "due"];
    if (val.includes(e.target.innerText)) {
      dispatch(updateSortValue(e.target.innerText));
    }
  };

  return (
    <span ref={sortRef} className="sort-btn" onClick={handleOnChange}>
      {sortValue || "sort"}
      <span
        className={sortState ? "active option-arrow" : "option-arrow"}
      ></span>
      <div
        data-show={sortState}
        className="option-container-right sort-btn-option-container"
        onClick={handleOptionClick}
      >
        {sortValue != "sort" ? (
          <div className={sortValue == "sort" ? "options selected" : "options"}>
            none
          </div>
        ) : null}
        <div className={sortValue == "recent" ? "options selected" : "options"}>
          recent
        </div>
        <div
          className={
            sortValue == "alphabetical" ? "options selected" : "options"
          }
        >
          alphabetical
        </div>
        <div
          className={sortValue == "members" ? "options selected" : "options"}
        >
          members
        </div>
        <div
          className={sortValue == "due" ? "options selected" : "options"}
        >
          due
        </div>
      </div>
    </span>
  );
};

export default SortButton;
