import { useEffect, useRef, useState } from "react";
import { Form } from "react-router-dom";
import InputError from "../../common/InputError";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../../config/firebase";
import validate from "./validator";
import CollectionContainer from "./CollectionContainer";

const NewMember = ({ state }) => {
  const [newMemberState, setNewMemberState] = state;
  const [selectedOpt, setSelectedOpt] = useState("");
  const [collectionOptionActive, setCollectionOptionActive] = useState(false);
  const formRef = useRef(null);
  const initialState = {
    name: "",
    address: "",
    phone: "",
    email: "",
    collection: "",
  };
  const [error, setError] = useState(initialState);
  const initialToggleState = {
    name: false,
    address: false,
    phone: false,
    email: false,
    collection: false,
  };
  const [shake, setShake] = useState(initialToggleState);
  const [form, setForm] = useState(initialState);
  const handleClear = () => {
    setForm((prev) => ({...initialState, collection: prev.collection}));
    setError(initialState);
  };
  const handleClose = () => {
    setNewMemberState(false);
  };

  // function to handle create new member
  const handleCreate = async () => {
    if (validate(setError, setShake, form)) {
      try {
        await addDoc(collection(db, "members"), form);
        setNewMemberState(false);
        setForm((prev) => ({...initialState, collection: prev.collection}));
      } catch (err) {
        console.log(err);
      }
    }
  };
  useEffect(() => {
    formRef.current.addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        e.preventDefault();
        handleCreate();
      }
    });
  }, []);

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
          <Form ref={formRef}>
            <input
              placeholder="member name"
              type="text"
              onChange={(e) => {
                setForm((state) => ({ ...state, name: e.target.value }));
              }}
              value={form.name}
            />
            <InputError error={error.name} shake={shake.name} />
            <textarea
              placeholder="address..."
              rows="3"
              onChange={(e) => {
                setForm((state) => ({ ...state, address: e.target.value }));
              }}
              value={form.address}
            />
            <InputError error={error.address} shake={shake.address} />
            <div className="phone-email-wrapper">
              <div className="phone-wrapper">
                <input
                  className="phone"
                  placeholder="phone"
                  type="text"
                  onChange={(e) => {
                    setForm((state) => ({ ...state, phone: e.target.value }));
                  }}
                  value={form.phone}
                />
                <InputError error={error.phone} shake={shake.phone} />
              </div>
              <div className="email-wrapper">
                <input
                  className="email"
                  placeholder="email"
                  type="text"
                  onChange={(e) => {
                    setForm((state) => ({ ...state, email: e.target.value }));
                  }}
                  value={form.email}
                />
                <InputError error={error.email} shake={shake.email} />
              </div>
            </div>
            <div className="select-collection-wrapper">
              <span className="selected-collection">
                {form.collection == ""
                  ? "select a collection"
                  : form.collection}
              </span>
              <span className="select-collection-btn-wrapper">
                <div
                  onClick={() => {
                    setCollectionOptionActive((prev) => !prev);
                  }}
                  tabIndex="0"
                  className="select-collection-btn"
                ></div>
                <CollectionContainer
                  selectedOptState={[selectedOpt, setSelectedOpt]}
                  activeState={[
                    collectionOptionActive,
                    setCollectionOptionActive,
                  ]}
                  setForm={setForm}
                />
              </span>
            </div>
            <InputError error={error.collection} shake={shake.collection} />
            <div className="btn-wrapper">
              <button className="close-btn" onClick={handleClear}>
                clear
              </button>
              <button
                onClick={handleCreate}
                className="submit-btn"
                type="submit"
              >
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
