import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { Form } from "react-router-dom";
import { db } from "../../../../config/firebase";
import InputError from "../../common/InputError";

const NewCollection = ({ state, refresher }) => {
  const [newCollectionState, setNewCollectionState] = state;
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  const initialState = {
    name: "",
    description: "",
  };
  const [form, setForm] = useState(initialState);
  const handleClear = () => {
    setForm(initialState);
    setError("");
  };
  const handleClose = () => {
    setError("");
    setNewCollectionState(false);
  };
  const submit = () => {
    if (form.name.replace(" ", "") != "") {
      addCollection();
      setError("");
    } else {
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 300);
      setError("collection name cannot be empty");
    }
  };
  const addCollection = async () => {
    try {
      const data = await addDoc(collection(db, "collections"), form);
      setNewCollectionState(false);
      refresher((prev) => !prev);
      handleClear();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
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
          newCollectionState ? "active new-container" : "new-container"
        }
      >
        <div className="nav-bar">
          <span className="label">New Collection</span>
          <span className="close-btn" onClick={handleClose}></span>
        </div>
        <div className="form-container">
          <Form>
            <input
              placeholder="collection name"
              type="text"
              value={form?.name}
              onChange={(e) => {
                setError("");
                setForm((state) => ({
                  ...state,
                  name: e.target.value,
                }));
              }}
            />
            <InputError shake={shake} error={error} />
            <textarea
              placeholder="collection description..."
              rows="9"
              onChange={(e) => {
                setError("");
                setForm((state) => ({
                  ...state,
                  description: e.target.value,
                }));
              }}
              value={form?.description}
            />
            <div className="btn-wrapper">
              <button className="close-btn" onClick={handleClear}>
                clear
              </button>
              <button className="submit-btn" type="submit" onClick={submit}>
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
