const environment = import.meta.env.VITE_ENVIRONMENT;
const host = environment === "development"
  ? import.meta.env.VITE_DEVELOPMENT_API_URL
  : import.meta.env.VITE_PRODUCTION_API_URL;

export default host;
