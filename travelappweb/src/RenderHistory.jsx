import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { getStorage, ref as storageRef, getDownloadURL } from "firebase/storage";
import "./RenderHistory.css";


import { FIREBASE_APP } from "./firebase";

const database = getDatabase(FIREBASE_APP);
const storage = getStorage(FIREBASE_APP);

const RenderHistory = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const historyRef = ref(database, "history");

    onValue(historyRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const historyArray = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value
        }));
        setHistoryData(historyArray);
      } else {
        setHistoryData([]);
      }
    });
  }, []);


  return (
    <div>
      <table className="history-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Address</th>
            <th>Images</th>
          </tr>
        </thead>
        <tbody>
          {historyData.map((history) => (
            <tr key={history.id}>
              <td>{history.name}</td>
              <td>{history.description}</td>
              <td>{history.address}</td>
              <td>
                {history.imageUrls && history.imageUrls.length > 0 && (
                  <div>
                    {history.imageUrls.map((imageUrl) => (
                      <img src={imageUrl} alt="History" key={imageUrl} />
                    ))}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RenderHistory;
