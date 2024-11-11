// import React, { useState } from "react";
// import { View, StyleSheet, Text, Button, ScrollView } from "react-native";
// import SearchBar from "../components/SearchBar";
// import useRestaurants from "../hooks/useRestaurants";
// import RestaurantsList from "../components/RestaurantsList";

// const SearchScreen = ({ navigation }) => {
//   const [term, setTerm] = useState("");
//   const [searchApi, restaurants, errorMessage] = useRestaurants();

//   const filterRestaurantsByPrice = (price) => {
//     // price ==='$' || '$$' || '$$$'

//     return restaurants.filter((resto) => {
//       return resto.price === price;
//     });
//   };
//   return (
//     <>
//       <SearchBar
//         term={term}
//         onTermChange={(newTerm) => setTerm(newTerm)}
//         onTermSubmit={() => searchApi(term)}
//       />
//       {errorMessage ? <Text>{errorMessage}</Text> : null}
//       {/* <Text>We are found {restaurants.length} restaurants</Text> */}
//       <ScrollView>
//         <RestaurantsList
//           restaurants={filterRestaurantsByPrice("$")}
//           title="Budget Bites"
//           navigation={navigation}
//         />
//         <RestaurantsList
//           restaurants={filterRestaurantsByPrice("$$")}
//           title="Mid-Range Munch"
//           navigation={navigation}
//         />
//         <RestaurantsList
//           restaurants={filterRestaurantsByPrice("$$$")}
//           title="Luxury Eats"
//           navigation={navigation}
//         />
//       </ScrollView>
//     </>
//   );
// };

// const styles = StyleSheet.create({});

// export default SearchScreen;
//===================================================================================
import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantsList from "../components/RestaurantsList";

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const filterRestaurantsByPrice = (price) => {
    return restaurants.filter((resto) => resto.price === price);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}

      <ScrollView showsVerticalScrollIndicator={false}>
        <RestaurantsList
          restaurants={filterRestaurantsByPrice("$")}
          title="Budget Bites"
          navigation={navigation}
        />
        <RestaurantsList
          restaurants={filterRestaurantsByPrice("$$")}
          title="Mid-Range Munch"
          navigation={navigation}
        />
        <RestaurantsList
          restaurants={filterRestaurantsByPrice("$$$")}
          title="Luxury Eats"
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  errorMessage: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
});

export default SearchScreen;

// import React, { useState, useEffect } from "react";
// import { View, StyleSheet, Text, ScrollView } from "react-native";
// import SearchBar from "../components/SearchBar";
// import useRestaurants from "../hooks/useRestaurants";
// import RestaurantsList from "../components/RestaurantsList";

// const SearchScreen = ({ navigation }) => {
//   const location = navigation.getParam("location", "Seattle"); // Default to Seattle
//   const term = navigation.getParam("term", "Pizza"); // Default to Pizza

//   const [searchApi, restaurants, errorMessage] = useRestaurants(location, term);

//   return (
//     <View style={styles.container}>
//       <SearchBar
//         term={term}
//         onTermChange={(newTerm) => searchApi(newTerm, location)}
//         onTermSubmit={() => searchApi(term, location)}
//       />
//       {errorMessage ? (
//         <Text style={styles.errorMessage}>{errorMessage}</Text>
//       ) : null}

//       <ScrollView showsVerticalScrollIndicator={false}>
//         <RestaurantsList
//           restaurants={restaurants}
//           title="Results"
//           navigation={navigation}
//         />
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 10,
//   },
//   errorMessage: {
//     color: "red",
//     fontSize: 16,
//     textAlign: "center",
//     marginVertical: 10,
//   },
// });

// export default SearchScreen;
