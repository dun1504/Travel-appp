import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { getStorage, ref as storageRef, getDownloadURL } from "firebase/storage";

import { FIREBASE_APP } from "./firebase";

const database = getDatabase(FIREBASE_APP);
const storage = getStorage(FIREBASE_APP);

const Render = () => {
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
      {historyData.map((history) => (
        <div key={history.id}>
          <h3>{history.name}</h3>
          <p>{history.description}</p>
          <p>{history.address}</p>
          
          <div>
            {history.imageUrls && history.imageUrls.length > 0 && (
              <div>
                {history.imageUrls.map((imageUrl)=>(
                    <img src={imageUrl} alt="History" key={imageUrl} />
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Render;
