import { createStackNavigator, createAppContainer } from "react-navigation";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";

const MainNavigator = createStackNavigator(
  {
    PostList: { screen: PostList },
    PostDetail: { screen: PostDetail }
  },
  {
    initialRouteName: "PostList",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#2A2E43"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    },
    headerLayoutPreset: "center"
  }
);

export default createAppContainer(MainNavigator);
