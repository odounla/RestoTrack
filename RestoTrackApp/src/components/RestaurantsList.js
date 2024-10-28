import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import RestaurantsDetail from "./RestaurantsDetails";

const RestaurantsList = ({ title, restaurants }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={restaurants}
        keyExtractor={(resto) => resto.id}
        renderItem={({ item }) => {
          return <RestaurantsDetail resto={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default RestaurantsList;
