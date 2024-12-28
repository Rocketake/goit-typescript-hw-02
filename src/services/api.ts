import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchRequest = async<T> (query: string, page: number): Promise<T> => {
  const response = await axios.get<T>(
    `search/photos?client_id=lXwwKLXNy5kmJdeVbT3gmyfDwbQxQWuX6gG6Be2fpDE&query=${query}&page=${page}&per_page=${20}`
  );
  return response.data;
};
