import { useState } from "react";

const NewButton = () => {
    const [createNew, setCreateNew] = useState("new");
  return (
    <span className="new-btn">
      {createNew}
      <span className="option-arrow"></span>
    </span>
  );
};

export default NewButton;
