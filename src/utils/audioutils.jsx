export const playAlarm = () => {
  const alarmSound = new Audio(require("./src/assets/alarm.mp3"));
  alarmSound.play();
};

export const stopAlarm = () => {};
