import { createStackNavigator } from "@react-navigation/stack";
import MealsOverviewScreen from "../screens/MealsOverviewScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        contentStyle: { backgroundColor: "#3f2f25" },
      }}
    >
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="MealsOverview"
        component={MealsOverviewScreen}
        // options={({route, navigation}) => {
        //     const catId = route.params.categoryId;
        //     return {
        //       title: catId,
        // };
        // }}
      />
      <Stack.Screen
        name="MealDetails"
        component={MealDetailsScreen}
        options={{
          title: "About the Meal",
          // headerRight: () => {
          //   return <Button title="Tap me" />;
          // },
        }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
