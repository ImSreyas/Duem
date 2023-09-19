import { Form, Link } from "react-router-dom";
import "./style/collection.scss";
import NewButton from "./components/NewButton";
import SortButton from "./components/SortButton";

const Collection = () => {
  const collectionData = [
    {
      id: 1,
      name: "college",
      members: 15,
    },
    {
      id: 2,
      name: "faculty",
      members: 20,
    },
    {
      id: 3,
      name: "family",
      members: 7,
    },
    {
      id: 4,
      name: "something",
      members: 9,
    },
    {
      id: 5,
      name: "nothing",
      members: 70,
    },
    {
      id: 6,
      name: "random",
      members: 32,
    },
    {
      id: 7,
      name: "test",
      members: 43,
    },
    {
      id: 8,
      name: "workers",
      members: 15,
    },
    {
      id: 9,
      name: "local",
      members: 20,
    },
    {
      id: 10,
      name: "hostel",
      members: 7,
    },
    {
      id: 11,
      name: "data",
      members: 9,
    },
    {
      id: 12,
      name: "student",
      members: 7,
    },
    {
      id: 13,
      name: "club",
      members: 32,
    },
    {
      id: 14,
      name: "school",
      members: 43,
    },
  ];

  return (
    <div className="main-body collection-page">
      <div className="tool-bar">
        <div className="search-wrapper">
          <Form>
            <input type="text" className="search-box" />
            <button type="submit" className="search-btn"></button>
          </Form>
        </div>
        <div className="options-wrapper">
          <SortButton />
          <NewButton />
        </div>
      </div>
      <div className="collection">
        {collectionData.map((collection) => {
          return (
            <Link
              to={"/" + collection.id}
              key={collection.name}
              className="collection-card-wrapper"
            >
              <div className="collection-name">{collection.name}</div>
              <div className="collection-member-count">
                <span>{collection.members}</span>
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
