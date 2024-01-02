import { Form, Link } from "react-router-dom";
import "./style/collection.scss";
import NewButton from "./components/NewButton";
import SortButton from "./components/SortButton";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updater } from "../../../store/collection";

const Collection = () => {
  const dispatch = useDispatch();
  // const [collectionData, setCollectionData] = useState([]);
  const [refresher, setRefresher] = useState(false);
  const collectionData = useSelector((state) => state.collection.value);

  useEffect(() => {
    const getCollections = async () => {
      try {
        // const memberRef = collection(db, "members");
        const data = await getDocs(collection(db, "collections"));
        dispatch(
          updater(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        );
        // collectionData.map(async (collection) => {
        //   const query = memberRef.where("collection_id", "==", collection.id);
        //   const count = await query.count().get();
        //   setCollectionData((prev) => ({ ...prev, count: count.count }));
        // });
      } catch (err) {
        console.log(err);
      }
    };
    getCollections();
  }, [refresher]);

  return (
    <div className="main-body collection-page">
      <div className="tool-bar">
        <div className="search-wrapper">
          <Form>
            <input
              type="text"
              className="search-box"
              placeholder="search collections..."
            />
            <button type="submit" className="search-btn"></button>
          </Form>
        </div>
        <div className="options-wrapper">
          <SortButton />
          <NewButton refresher={setRefresher} />
        </div>
      </div>
      <div className="collection">
        {collectionData.map((collection) => {
          return (
            <Link
              to={"/collection/" + collection?.id}
              key={collection?.id}
              className="collection-card-wrapper"
            >
              <div className="collection-name">{collection.name}</div>
              <div className="collection-member-count">
                <span>{collection.count}</span>
                members
              </div>
              <div className="expand-arrow"></div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Collection;
