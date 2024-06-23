import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <ImageBackground
      className="w-[100%] h-[100%]"
      source={require("./assets/img/money500.jpg")}
      imageStyle={{ opacity: 0.3 }}
    >
      <SafeAreaView className="flex-1">
        <StatusBar style="auto" />
        <HomeScreen />
      </SafeAreaView>
    </ImageBackground>
  );
}
