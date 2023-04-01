const dayjs = require("dayjs");

const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
dayjs.extend(utc);
dayjs.extend(timezone);

export const timeZone = (city) => {
  return String(dayjs.utc(dayjs()).tz(city).$d);
};

export const localTime = () => {
  return dayjs(new Date().getTime());
};
