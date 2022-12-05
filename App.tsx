import React from "react";
import { Provider } from "react-native-paper";
import Principal from "./src/pages";

export default function App() {
  return (
    <Provider>
      <Principal />
    </Provider>
  );
}
