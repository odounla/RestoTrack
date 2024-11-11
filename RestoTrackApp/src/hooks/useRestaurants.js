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
      // setErrorMessage("Something wemt wrong");
      if (error.response) {
        console.log("Error Status:", error.response.status); // Log the status code
        console.log("Error Data:", error.response.data); // Log the response data
        if (error.response.status === 429) {
          setErrorMessage("Rate limit exceeded. Please try again later.");
        } else {
          setErrorMessage("Something went wrong");
        }
      } else {
        console.log("Error:", error.message);
        setErrorMessage("Something went wrong");
      }
    }
  };

  useEffect(() => {
    searchApi("pizza");
  }, []);

  return [searchApi, restaurants, errorMessage];
};

// import { useEffect, useState } from "react";
// import yelp from "../api/yelp";

// export default (defaultLocation, defaultTerm) => {
//   const [restaurants, setRestaurants] = useState([]);
//   const [errorMessage, setErrorMessage] = useState("");

//   const searchApi = async (
//     searchTerm = defaultTerm,
//     location = defaultLocation
//   ) => {
//     try {
//       const response = await yelp.get("/search", {
//         params: {
//           limit: 50,
//           term: searchTerm,
//           location: location,
//         },
//       });
//       setRestaurants(response.data.businesses);
//     } catch (error) {
//       if (error.response) {
//         console.log("Error Status:", error.response.status);
//         console.log("Error Data:", error.response.data);
//         if (error.response.status === 429) {
//           setErrorMessage("Rate limit exceeded. Please try again later.");
//         } else {
//           setErrorMessage("Something went wrong");
//         }
//       } else {
//         console.log("Error:", error.message);
//         setErrorMessage("Something went wrong");
//       }
//     }
//   };

//   useEffect(() => {
//     searchApi(); // Call with default values on load
//   }, []);

//   return [searchApi, restaurants, errorMessage];
// };
