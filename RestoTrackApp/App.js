import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SearchScreen from "./src/screens/SearchScreen";
import DetailScreen from "./src/screens/DetailScreen";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),

  mainFlow: createMaterialBottomTabNavigator({
    SearchResto: createStackNavigator({
      RestoSearch: SearchScreen,
      RestoDetail: DetailScreen,
    }),

    Account: AccountScreen,
  }),
});

export default createAppContainer(switchNavigator);
