// config.js

export const CONNECTOR = {
  host: "10.88.0.8",//change this
  port:  6379,//change this
  username: "default",
  password: "password",//change this
  lazyConnect: false
};

export const DEFAULT_REMOVE_CONFIG = {
  removeOnComplete: true,
  removeOnFail: true,
};
