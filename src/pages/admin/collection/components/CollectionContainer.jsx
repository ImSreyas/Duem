import { useSelector } from "react-redux";

const CollectionContainer = ({
  activeState: [active, setActive],
  selectedOptState: [selectedOpt, setSelectedOpt],
  setForm,
}) => {
  const collection = useSelector((state) => state.collection.value);
  const handleSelect = (e) => {
    setSelectedOpt(e.target.getAttribute("data-id"));
    setForm((prev) => ({
      ...prev,
      collection: e.target.innerText != "null" ? e.target.innerText : "",
    }));
    setActive(false);
  };

  return (
    <div data-active={active} className="collection-container-wrapper">
      <input type="text" placeholder="search..." className="search-input" />
      <div className="collection-options-container">
        {collection.map((collection) => (
          <div
            onClick={handleSelect}
            data-select={selectedOpt == collection.id}
            data-id={collection.id}
            className="collection-item"
            key={collection?.id}
          >
            {collection?.name ? collection?.name : "null"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionContainer;
