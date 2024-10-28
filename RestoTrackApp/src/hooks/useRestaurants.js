import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "seattle",
        },
      });
      setRestaurants(response.data.businesses);
    } catch (error) {
      setErrorMessage("Something wemt wrong");
    }
  };

  useEffect(() => {
    searchApi("indian");
  }, []);

  return [searchApi, restaurants, errorMessage];
};
