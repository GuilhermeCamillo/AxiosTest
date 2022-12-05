import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import axios from "axios";
import { Text } from "react-native-paper";

const Principal = () => {
  const [albums, setAlbums] = useState<
    { userId: number; id: number; title: string }[]
  >([]);

  const getAllAlbums = () => {
    axios.get(`https://jsonplaceholder.typicode.com/albums`).then((res) => {
      const persons = res.data;
      setAlbums(persons);
    });
  };

  useEffect(() => {
    getAllAlbums();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Principal</Text>
      <FlatList
        data={albums}
        renderItem={({ item, index }) => <Text key={item.id}>{item.title}</Text>}
      />
    </View>
  );
};

export default Principal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A3A3A3",
    padding: 60,
  },
});
