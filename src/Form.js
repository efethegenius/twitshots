import React, { useState } from "react";

export const Form = ({ newTweet, setNewTweet, handleChange }) => {
  return (
    <div className="tweet-form-container">
      <form className="tweet-form" id="tweet-form">
        <div className="names-input">
          <div className="input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={newTweet.name}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              name="userName"
              id="userName"
              value={newTweet.userName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="input">
          <label htmlFor="tweet">Tweet</label>
          <textarea
            name="tweet"
            id="tweet"
            cols="35"
            rows="4"
            value={newTweet.tweet}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="footer-input">
          <div className="input">
            <label htmlFor="time">Time</label>
            <input
              type="text"
              name="time"
              id="time"
              value={newTweet.time}
              onChange={handleChange}
              placeholder="00:00"
              onFocus={(e) => {
                e.currentTarget.type = "time";
              }}
              onBlur={(e) => {
                e.currentTarget.type = "text";
              }}
            />
          </div>
          <div className="input">
            <label htmlFor="date">Date</label>
            <input
              type="text"
              placeholder="mm/dd/yyyy"
              onFocus={(e) => {
                e.currentTarget.type = "date";
              }}
              onBlur={(e) => {
                e.currentTarget.type = "text";
              }}
              name="date"
              id="date"
              value={newTweet.date}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <label htmlFor="device">Device</label>
            <input
              type="text"
              placeholder="iphone / Android"
              id="device"
              name="device"
              value={newTweet.device}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>

      <p className="creator">
        View my{" "}
        <a
          href="https://efesamuel.netlify.app/"
          target="_blank"
          rel="noreferrer noopener"
        >
          {" "}
          portfolio
        </a>
      </p>
    </div>
  );
};
