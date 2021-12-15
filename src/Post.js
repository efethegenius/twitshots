import React, { useState, createRef } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaMoon } from "react-icons/fa";
import { Form } from "./Form";
import avatar from "./avatar.jpg";
import { useScreenshot } from "use-react-screenshot";

export const Post = () => {
  const [newTweet, setNewTweet] = useState({
    name: "",
    userName: "",
    tweet: "",
    time: "",
    date: "",
    device: "",
  });
  const [file, setFile] = useState("");
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewTweet({ ...newTweet, [name]: value });
  };
  const handleImgChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleToggle = () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.contains("dark-mode")
      ? localStorage.setItem("darkMode", "enabled")
      : localStorage.setItem("darkMode", "disabled");
  };

  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  return (
    <div className="post-container">
      <div className="full-twitpost">
        <div className="moon">
          <p>twitshot</p>
          <FaMoon onClick={handleToggle} />
        </div>
        <div className="post-wrapper">
          <div className="user-details-header">
            <div className="user-details">
              <img
                src={file === "" ? avatar : file}
                alt=""
                className="avatar"
              />
              <div className="user-names">
                <h4>{newTweet.name === "" ? "John Doe" : newTweet.name}</h4>
                <p>
                  @{newTweet.userName === "" ? "JohnDoe" : newTweet.userName}
                </p>
              </div>
            </div>
            <BiDotsHorizontalRounded className="three-dots" />
          </div>
          <div className="post-text-container">
            <p>
              {newTweet.tweet === ""
                ? "A peck of pickled peppers Peter Piper picked; If Peter Piper picked a peck of pickled peppers, Where's the peck of pickled peppers Peter Piper picked?"
                : newTweet.tweet}
            </p>
          </div>
          <div className="post-details-container">
            <p>{newTweet.time === "" ? "00:00" : newTweet.time}</p>
            <p>•</p>
            <p>{newTweet.date === "" ? "15/12/2021" : newTweet.date}</p>
            <p>•</p>
            <p className="phone-type">
              {newTweet.device === ""
                ? "Twitter for IPhone"
                : "Twitter for " + newTweet.device}
            </p>
          </div>
        </div>
        <div className="picture-container">
          <label htmlFor="picture" className="picture-label">
            Upload a profile picture
          </label>
          <input
            type="file"
            onChange={handleImgChange}
            className="picture"
            name="picture"
          />
          {/* <img src={file} /> */}
        </div>
        <Form
          newTweet={newTweet}
          setNewTweet={setNewTweet}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};
