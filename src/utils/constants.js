export const Logo =
  "https://avatars.githubusercontent.com/u/10371543?s=200&v=4";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
  },
};
export const IMG_CDN = "https://image.tmdb.org/t/p/w780";
export const PHOTO_URL =
  "https://cdn-icons-png.flaticon.com/512/14722/14722107.png";
