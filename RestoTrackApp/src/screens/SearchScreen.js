import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantsList from "../components/RestaurantsList";

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const filterRestaurantsByPrice = (price) => {
    // price ==='$' || '$$' || '$$$'

    return restaurants.filter((resto) => {
      return resto.price === price;
    });
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We are found {restaurants.length} restaurants</Text>
      <RestaurantsList
        restaurants={filterRestaurantsByPrice("$")}
        title="Budget Bites"
      />
      <RestaurantsList
        restaurants={filterRestaurantsByPrice("$$")}
        title="Mid-Range Munch"
      />
      <RestaurantsList
        restaurants={filterRestaurantsByPrice("$$$")}
        title="Luxury Eats"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
