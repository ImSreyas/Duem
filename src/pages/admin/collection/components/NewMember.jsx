import { Form } from "react-router-dom";

const NewMember = ({state}) => {
  const [newMemberState, setNewMemberState] = state;
  const collection = "select a collection";
  const handleClose = () => {
    setNewMemberState(false);
  };
  return (
    <div
      className={
        newMemberState
          ? "active new-container-wrapper"
          : "new-container-wrapper"
      }
    >
      <div
        className={newMemberState ? "active new-container" : "new-container"}
      >
        <div className="nav-bar">
          <span className="label">New member</span>
          <span className="close-btn" onClick={handleClose}></span>
        </div>
        <div className="form-container">
          <Form>
            <input placeholder="member name" type="text" />
            <textarea placeholder="address..." rows="3" />
            <div className="phone-email-wrapper">
              <input className="phone" placeholder="phone" type="text" />
              <input className="email" placeholder="email" type="text" />
            </div>
            <div className="select-collection-wrapper">
              <span className="selected-collection">{collection}</span>
              <span className="select-collection-btn"></span>
            </div>
            <div className="btn-wrapper">
              <button className="close-btn" onClick={handleClose}>
                close
              </button>
              <button className="submit-btn" type="submit">
                create
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default NewMember