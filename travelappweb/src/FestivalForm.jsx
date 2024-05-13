import React, { useState } from "react";
import { getDatabase, ref, push, set } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

import './Form.css';
const firebaseApp = require('./firebase.js');

const database = getDatabase(firebaseApp.FIREBASE_APP);
const storage = getStorage(firebaseApp.FIREBASE_APP);
const auth = firebaseApp.FIREBASE_AUTH;

const FestivalForm = () => {
    const [name, setName] = useState("");
const [description, setDescription] = useState("");
const [startDate, setStartDate] = useState("");
const [endDate, setEndDate] = useState("");
const [address, setAddress] = useState("");
const [ticketPrice, setTicketPrice] = useState("");
const [images, setImages] = useState([]);

const handleNameChange = (e) => {
  setName(e.target.value);
};

const handleDescriptionChange = (e) => {
  setDescription(e.target.value);
};

const handleStartDateChange = (e) => {
  setStartDate(e.target.value);
};

const handleEndDateChange = (e) => {
  setEndDate(e.target.value);
};

const handleAddressChange = (e) => {
  setAddress(e.target.value);
};

const handleTicketPriceChange = (e) => {
  setTicketPrice(e.target.value);
};

const handleImageChange = (e) => {
  const files = Array.from(e.target.files);
  setImages(files);
};

const handleSubmit = (e) => {
  e.preventDefault();

  const newFestivalRef = push(ref(database, "festival"));

  const newFestival = {
    name: name,
    description: description,
    startDate: startDate,
    endDate: endDate,
    address: address,
    ticketPrice: ticketPrice,
    imageUrls: []
  };

  set(newFestivalRef, newFestival)
    .then(() => {
      const uploadPromises = images.map((image) => {
        const storageReference = storageRef(storage, `images/${newFestivalRef.key}/${image.name}`);
        return uploadBytes(storageReference, image)
          .then(() => getDownloadURL(storageReference))
          .catch((error) => {
            console.error("Error uploading image to Firebase Storage:", error);
            throw error;
          });
      });

      Promise.all(uploadPromises)
        .then((downloadURLs) => {
          const updatedFestival = {
            ...newFestival,
            imageUrls: downloadURLs
          };

          set(ref(database, `festival/${newFestivalRef.key}`), updatedFestival)
            .then(() => {
              console.log("Successfully saved festival and image URLs to Firebase");
              setName("");
              setDescription("");
              setStartDate("");
              setEndDate("");
              setAddress("");
              setTicketPrice("");
              setImages([]);
            })
            .catch((error) => {
              console.error("Error updating festival with image URLs:", error);
            });
        })
        .catch((error) => {
          console.error("Error getting download URLs of uploaded images:", error);
        });
    })
    .catch((error) => {
      console.error("Error saving festival to Firebase:", error);
    });
};

    return (
        <form className="my-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Tên festival:</label>
            <input type="text" id="name" name="name" value={name} onChange={handleNameChange} required />

            <label htmlFor="description">Mô tả:</label>
            <textarea id="description" name="description" value={description} onChange={handleDescriptionChange} required></textarea>

            <label htmlFor="startDate">Ngày bắt đầu:</label>
            <input type="date" id="startDate" name="startDate" value={startDate} onChange={handleStartDateChange} required />

            <label htmlFor="endDate">Ngày kết thúc:</label>
            <input type="date" id="endDate" name="endDate" value={endDate} onChange={handleEndDateChange} required />

            <label htmlFor="address">Địa chỉ:</label>
            <input type="text" id="address" name="address" value={address} onChange={handleAddressChange} required />

            <label htmlFor="ticketPrice">Giá vé:</label>
            <input type="number" id="ticketPrice" name="ticketPrice" value={ticketPrice} onChange={handleTicketPriceChange} required />

            <label htmlFor="images">Hình ảnh:</label>
            <input type="file" id="images" name="images" accept="image/*" multiple onChange={handleImageChange} required />

            <button type="submit">Lưu</button>
        </form>

    );
};

export default FestivalForm;