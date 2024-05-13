import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { getStorage, ref as storageRef, getDownloadURL } from "firebase/storage";
import "./RenderFestival.css";


import { FIREBASE_APP } from "./firebase";

const database = getDatabase(FIREBASE_APP);
const storage = getStorage(FIREBASE_APP);

const RenderFestival = () => {
  const [festivalData, setFestivalData] = useState([]);

  useEffect(() => {
    const Ref = ref(database, "festival");

    onValue(Ref, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const festivalData = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value
        }));
        setFestivalData(festivalData);
      } else {
        setFestivalData([]);
      }
    });
  }, []);


  return (
    <div>
    <table className="festival-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Address</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Ticket Price</th>
          <th>Images</th>
        </tr>
      </thead>
      <tbody>
        {festivalData.map((festival) => (
          <tr key={festival.id}>
            <td>{festival.name}</td>
            <td>{festival.description}</td>
            <td>{festival.address}</td>
            <td>{festival.startDate}</td>
            <td>{festival.endDate}</td>
            <td>{festival.ticketPrice}</td>
            <td>
              {festival.imageUrls && festival.imageUrls.length > 0 && (
                <div>
                  {festival.imageUrls.map((imageUrl) => (
                    <img src={imageUrl} alt="Festival" key={imageUrl} />
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

export default RenderFestival;
