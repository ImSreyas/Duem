import { useDispatch, useSelector } from "react-redux";
import { createNewStateChange } from "../../../../store/options";
import { useContext, useState } from "react";
import { refContext } from "../../../../App";
import NewMember from "./NewMember";
import NewCollection from "./NewCollection";

const NewButton = () => {
  const [newCollectionState, setNewCollectionState] = useState(false);
  const [newMemberState, setNewMemberState] = useState(false);

  const createNewState = useSelector(
    (state) => state?.options?.value?.createNew?.state
  );
  // const createNewValue = useSelector((state) => state?.options?.value?.createNew?.value);
  const { createNewRef } = useContext(refContext);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(createNewStateChange());
  };
  const handleNewCollection = () => {
    setNewCollectionState(true);
  };
  const handleNewMember = () => {
    setNewMemberState(true);
  };
  // const handleOptionClick = (e) => {
  //   dispatch(updateCreateNewValue(e.target.innerText));
  // }

  return (
    <>
      <span ref={createNewRef} className="new-btn" onClick={handleButtonClick}>
        new
        <span
          className={createNewState ? "active option-arrow" : "option-arrow"}
        ></span>
        <div
          data-show={createNewState}
          className="option-container-right sort-btn-option-container"
          // onClick={handleOptionClick}
        >
          <div className="options" onClick={handleNewCollection}>
            collection
          </div>
          <div className="options" onClick={handleNewMember}>
            member
          </div>
        </div>
      </span>
      <NewCollection state={[newCollectionState, setNewCollectionState]} />
      <NewMember state={[newMemberState, setNewMemberState]} />
    </>
  );
};

export default NewButton;
