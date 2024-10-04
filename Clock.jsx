import React, { useState, useEffect } from "react";

import { playAlarm } from "./src/utils/audioutils";

export const AnalogClockWithOuterSchedule = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date();
      setTime(currentTime);

      activities.forEach((activity) => {
        if (currentTime.getHours() === activity.end) {
          playAlarm();
          alert(`${activity.name} has ended!`);
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const activities = [
    {
      name: "Sleep",
      start: 22,
      end: 24,
      image: "./src/assets/night.png",
    },
    {
      name: "Sleep",
      start: 0,
      end: 8,
      image: "./src/assets/night.png",
    },
    {
      name: "Breakfast",
      start: 8,
      end: 10,
      image: "./src/assets/Breakfast.png",
    },
    {
      name: "Movies/Series",
      start: 10,
      end: 13,
      image: "./src/assets/Movie.png",
    },
    {
      name: "Afternoon Nap",
      start: 13,
      end: 15,
      image: "./src/assets/nap.png",
    },
    {
      name: "Free Time :)",
      start: 15,
      end: 17,
      image: "./src/assets/Alone.png",
    },

    { name: "Dinner", start: 17, end: 18, image: "./src/assets/Dinner.png" },
    { name: "Internet", start: 18, end: 20, image: "./src/assets/Socials.png" },
    {
      name: "Read Book",
      start: 20,
      end: 22,
      image: "./src/assets/Reading.png",
    },
  ];

  const secondsDegrees = (time.getSeconds() / 60) * 360;
  const minutesDegrees = ((time.getHours() % 2) * 60 + time.getMinutes()) * 3;
  const hoursDegrees = time.getHours() * 15 + time.getMinutes() / 8;

  return (
    <div className="outer-container ">
      <h2 style={{ margin: 10, color: "#ff7b89", textShadow: "1px 0px black" }}>
        Unemployed time table of Hannah Jean :)
      </h2>
      <p style={{ margin: 0 }}></p>
      <h3 style={{ margin: 10, color: "#aac9ce", textShadow: "1px 0px black" }}>
        TODAY'S TIME TABLE
      </h3>
      <div className="clock-container text-blue-900">
        <div className="clock">
          {activities.map((activity, index) => {
            const middle = (activity.start + activity.end) / 2;
            const isRightSide = middle >= 2 && middle <= 12;

            return (
              <div key={index}>
                <div
                  className="activity-segment"
                  style={{
                    transform: `rotate(${activity.start * 15}deg)`,
                    height: "190px",
                    transformOrigin: "bottom center",
                    position: "absolute",
                    width: "1px",
                    bottom: "50%",
                    left: "calc(50% - 0.3px)",
                    backgroundColor: "#a5678e",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: " 50%",
                    left: "40%",
                    fontSize: "15px",
                    fontWeight: "bold",
                    transform: `rotate(${
                      middle * 15.2
                    }deg) translate(0, -135px) rotate(${
                      isRightSide ? "-80deg" : "80deg"
                    })`,
                    whiteSpace: "nowrap",
                    textAlign: "center",
                  }}
                >
                  {activity.name}{" "}
                  <img
                    src={activity.image}
                    alt={activity.name}
                    style={{ width: "24px", height: "24px" }}
                  />
                  <br />
                </span>
              </div>
            );
          })}

          {[...Array(24)].map((_, index) => {
            const hour = ((index + 23) % 24) + 1;
            return (
              <div
                key={index}
                className="hour-marker"
                style={{
                  transform: `rotate(${index * 15}deg)`,
                  height: "100%",
                  width: "1px",
                  position: "absolute",
                  left: "calc(50% - 0.5px)",
                }}
              >
                <div
                  style={{
                    height: "18px",
                    width: "3px",
                    backgroundColor: "#a5678e",
                    borderRadius: "100px",
                    position: "absolute",
                    top: "-10px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "-35px",
                    transform: `rotate(-${index * 15}deg) translate(-50%, 0)`,
                    transformOrigin: "center",
                    fontWeight: "bold",
                    marginTop: "-5px",
                  }}
                >
                  {hour}
                </div>
              </div>
            );
          })}
          <div
            className="hand hour-hand"
            style={{ transform: `rotate(${hoursDegrees}deg)` }}
          />
          <div
            className="hand minute-hand"
            style={{ transform: `rotate(${minutesDegrees}deg)` }}
          />
          <div
            className="hand second-hand"
            style={{ transform: `rotate(${secondsDegrees}deg)` }}
          />
          <div className="center-circle h-20">
            <img
              src="./src/assets/Busy.png"
              style={{ height: "50px", width: "40px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
