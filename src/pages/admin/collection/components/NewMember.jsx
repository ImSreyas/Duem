import { useState } from "react";
import { Form } from "react-router-dom";

const NewMember = ({ state }) => {
  const [newMemberState, setNewMemberState] = state;
  const initialState = {
    name: "",
    address: "",
    phone: "",
    email: "",
    collection: "select a collection",
  };
  const [form, setForm] = useState(initialState);
  const handleClear = () => {
    setForm(initialState);
  };
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
            <input
              placeholder="member name"
              type="text"
              onChange={(e) => {
                setForm((state) => ({ ...state, name: e.target.value }));
              }}
              value={form.name}
            />
            <textarea
              placeholder="address..."
              rows="3"
              onChange={(e) => {
                setForm((state) => ({ ...state, address: e.target.value }));
              }}
              value={form.address}
            />
            <div className="phone-email-wrapper">
              <input
                className="phone"
                placeholder="phone"
                type="text"
                onChange={(e) => {
                  setForm((state) => ({ ...state, phone: e.target.value }));
                }}
                value={form.phone}
              />
              <input
                className="email"
                placeholder="email"
                type="text"
                onChange={(e) => {
                  setForm((state) => ({ ...state, email: e.target.value }));
                }}
                value={form.email}
              />
            </div>
            <div className="select-collection-wrapper">
              <span className="selected-collection">{form.collection}</span>
              <span className="select-collection-btn"></span>
            </div>
            <div className="btn-wrapper">
              <button className="close-btn" onClick={handleClear}>
                clear
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
};

export default NewMember;
