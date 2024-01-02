import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { useLoaderData } from "react-router-dom";

const CollectionData = () => {
  const data = useLoaderData();
  
  return (
    <div className="main-body">
      <div className="name">{data?.name}</div>
      <div className="description">{data?.description}</div>
    </div>
  );
};
export const collectionDetailsLoader = async ({ params }) => {
  const { id } = params;
  const data = await getDoc(doc(db, "collections", id));
  return data.data();
};
export default CollectionData;
