import { StyleSheet, View,Text } from "react-native";
import { Card, Paragraph } from "react-native-paper";

export default function App() {
  return (
    <View style={styles.container}>
      <Card style={styles.card} type="contained" elevation={5}>
        <Card.Title title="azeaze"/>
        <Card.Content>
          <Paragraph>Hleloo</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "center"
  },
  card: {
    height:200
  },
  cardText: {
    fontSize:300
  }
});
