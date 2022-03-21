import React from "react";
import { View, Text, Image, ScrollView, TextInput } from "react-native";

const App = () => {
  return (
    <ScrollView>
      <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
    </ScrollView>
  );
}

export default App;
// creé assets en android/app/src/main/assets