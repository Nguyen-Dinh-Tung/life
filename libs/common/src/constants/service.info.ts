export const SERVICE_INFO = {
  AUTH: {
    PORT: +process.env.AUTH_PORT,
    HOST: process.env.MAIN_HOST,
  },
  ACOUNTS: {
    PORT: +process.env.ACOUNT_PORT,
    HOST: process.env.MAIN_HOST,
  },
  LOAD_BALANCING: {
    PORT: +process.env.LOAD_BALANCING_PORT,
    HOST: process.env.MAIN_HOST,
  },
};
