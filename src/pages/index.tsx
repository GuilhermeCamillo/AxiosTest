import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import axios from "axios";
import {
  Button,
  Card,
  Paragraph,
  Avatar,
  Badge,
  Appbar,
  ActivityIndicator,
} from "react-native-paper";

const url = "https://jsonplaceholder.typicode.com";

const Principal = () => {
  const [albums, setAlbums] = useState<
    { userId: number; id: number; title: string }[]
  >([]);

  const [loading, setLoading] = useState<boolean>(true);

  const getAllAlbums = () => {
    try {
      axios.get(`${url}/albums`).then((res) => {
        const persons = res.data;
        setAlbums(persons);
      });
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllAlbums();
  }, []);

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Albums" />
      </Appbar.Header>
      <View style={styles.container}>
        {loading && <ActivityIndicator animating={true} color="#1251C7" />}
        <FlatList
          data={albums}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <Card key={index} style={styles.card}>
              <Card.Content>
                <Avatar.Text size={24} label={String(item.userId)} />
                <Badge>{item.id}</Badge>
                <Paragraph>{item.title}</Paragraph>
              </Card.Content>
            </Card>
          )}
        />
        <View style={styles.containerButtons}>
          <Button mode="contained" onPress={() => setAlbums([])}>
            Apagar Albums
          </Button>
          <Button mode="contained" onPress={() => getAllAlbums()}>
            Gerar Albums
          </Button>
        </View>
      </View>
    </>
  );
};

export default Principal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 16,
  },
  card: {
    backgroundColor: "#A3A3A3",
    marginBottom: 10,
    borderRadius: 8,
    padding: 16,
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
