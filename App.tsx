import React from "react";
import { Provider } from "react-native-paper";
import Principal from "./src/pages";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <Provider>
      <SafeAreaProvider>
        <Principal />
      </SafeAreaProvider>
    </Provider>
  );
}
