// import React, { useContext } from "react";
// import { View, StyleSheet, Text } from "react-native";
// import { Button } from "react-native-elements";
// import { SafeAreaView } from "react-navigation";
// import Spacer from "../components/Spacer";
// import { Context as AuthContext } from "../context/AuthContext";

// const AccountScreen = () => {
//   const { signout } = useContext(AuthContext);
//   return (
//     <SafeAreaView forceInset={{ top: "always" }}>
//       <Text style={{ fontSize: 48 }}>AccountScreen</Text>
//       <Spacer>
//         <Button title="Sign Out" onPress={signout} />
//       </Spacer>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({});

// export default AccountScreen;

import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, Button, TextInput, Alert } from "react-native";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext);
  const [location, setLocation] = useState("Seattle"); // Default location
  const [term, setTerm] = useState("Pizza"); // Default search term

  const savePreferences = () => {
    // Save preferences or navigate with preferences
    navigation.navigate("Search", { location, term });
  };

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 48 }}>Account Screen</Text>
      <Spacer>
        <Text>Preferred Location:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter location"
          value={location}
          onChangeText={setLocation}
        />
      </Spacer>
      <Spacer>
        <Text>Preferred Search Term:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter search term"
          value={term}
          onChangeText={setTerm}
        />
      </Spacer>
      <Spacer>
        <Button title="Save Preferences" onPress={savePreferences} />
      </Spacer>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
});

export default AccountScreen;
