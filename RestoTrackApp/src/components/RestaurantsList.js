import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import RestaurantsDetail from "./RestaurantsDetails";

const RestaurantsList = ({ title, restaurants, navigation }) => {
  if (!restaurants) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        keyExtractor={(resto) => resto.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestoDetail", { id: item.id })
              }
              style={styles.touchable}
            >
              <RestaurantsDetail resto={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 10,
    marginLeft: 15,
  },
  listContent: {
    paddingLeft: 15,
    paddingRight: 5,
  },
  touchable: {
    marginRight: 10,
  },
});

export default withNavigation(RestaurantsList);
