const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://za-it.ru"
    : "http://localhost:3000";

export default baseUrl;
