// import React, { useState, useEffect } from "react";
// import { View, StyleSheet, Text, FlatList, Image } from "react-native";
// import yelp from "../api/yelp";

// const DetailScreen = ({ navigation }) => {
//   const [result, setResult] = useState(null);
//   const id = navigation.getParam("id");

//   const getRestaurant = async (id) => {
//     const response = await yelp.get(`/${id}`);
//     setResult(response.data);
//   };

//   useEffect(() => {
//     getRestaurant(id);
//   }, []);

//   if (!result) {
//     return null;
//   }
//   return (
//     <View>
//       <Text>{result.name}</Text>
//       <FlatList
//         data={result.photos}
//         keyExtractor={(photo) => photo}
//         renderItem={({ item }) => {
//           return <Image style={styles.image} source={{ uri: item }} />;
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   image: {
//     height: 200,
//     width: 200,
//     margin: 5,
//   },
// });

// export default DetailScreen;

import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import yelp from "../api/yelp";
import * as Linking from "expo-linking";

const DetailScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getRestaurant = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getRestaurant(id);
  }, []);

  if (!result) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  const openInGoogleMaps = () => {
    const address = encodeURIComponent(result.location.address1);
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${address}`;
    Linking.openURL(googleMapsUrl).catch(() => {
      Alert.alert("Error", "Unable to open Google Maps");
    });
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <MaterialIcons
          key={`full-${i}`}
          name="star"
          size={20}
          color="#FFD700"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <MaterialIcons key="half" name="star-half" size={20} color="#FFD700" />
      );
    }

    while (stars.length < 5) {
      stars.push(
        <MaterialIcons
          key={`empty-${stars.length}`}
          name="star-border"
          size={20}
          color="#FFD700"
        />
      );
    }

    return stars;
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.name}>{result.name}</Text>

        <TouchableOpacity
          onPress={openInGoogleMaps}
          style={styles.addressContainer}
        >
          <MaterialIcons
            name="drive-eta"
            size={20}
            color="#1E90FF"
            style={styles.icon}
          />
          <Text style={styles.linkText}>{result.location.address1}</Text>
        </TouchableOpacity>

        <View style={styles.phoneContainer}>
          <MaterialIcons name="phone" size={20} color="#1E90FF" />
          <Text style={styles.details}> {result.display_phone}</Text>
        </View>

        <View style={styles.ratingContainer}>
          <Text style={styles.details}>Rating: </Text>
          {renderStars(result.rating)}
          <Text style={styles.details}> ({result.rating} / 5)</Text>
        </View>
      </ScrollView>

      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
        contentContainerStyle={styles.photoContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 18,
    color: "#888",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginTop: 15,
    textAlign: "center",
  },
  addressContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  phoneContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  icon: {
    marginRight: 5,
  },
  linkText: {
    fontSize: 16,
    color: "#1E90FF",
    textDecorationLine: "underline",
  },
  details: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  photoContainer: {
    alignItems: "center",
    paddingVertical: 15,
  },
  image: {
    height: 250,
    width: 250,
    borderRadius: 8,
    marginVertical: 10,
  },
});

export default DetailScreen;
