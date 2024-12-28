import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchRequest = async (query, page) => {
  const response = await axios.get(
    `search/photos?client_id=lXwwKLXNy5kmJdeVbT3gmyfDwbQxQWuX6gG6Be2fpDE&query=${query}&page=${page}&per_page=${20}`
  );
  return response.data;
};
