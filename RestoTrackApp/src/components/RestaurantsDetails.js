import React from "react";

import { View, Image, Text, StyleSheet } from "react-native";

const RestaurantsDetail = ({ resto }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: resto.image_url }} />
      <Text style={styles.name}> {resto.name}</Text>
      <Text>
        {" "}
        {resto.rating} Stars, {resto.review_count} Reviewers
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  name: {
    fontWeight: "bold",
  },
});

export default RestaurantsDetail;
