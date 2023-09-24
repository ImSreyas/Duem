import { Form } from "react-router-dom";

const NewCollection = ({ state }) => {
  const [newCollectionState, setNewCollectionState] = state;
  const handleClose = () => {
    setNewCollectionState(false);
  };
  return (
    <div
      className={
        newCollectionState
          ? "active new-container-wrapper"
          : "new-container-wrapper"
      }
    >
      <div
        className={
          newCollectionState
            ? "active new-container"
            : "new-container"
        }
      >
        <div className="nav-bar">
          <span className="label">New Collection</span>
          <span className="close-btn" onClick={handleClose}></span>
        </div>
        <div className="form-container">
          <Form>
            <input placeholder="collection name" type="text" />
            <textarea placeholder="collection description..." rows="9" />
            <div className="btn-wrapper">
              <button className="close-btn" onClick={handleClose}>close</button>
              <button className="submit-btn" type="submit">
                create
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
