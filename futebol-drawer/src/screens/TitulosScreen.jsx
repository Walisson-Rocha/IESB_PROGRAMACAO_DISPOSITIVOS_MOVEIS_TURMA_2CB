import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { titles } from '../data/teamData';

export default function TitulosScreen() {
  const renderItem = ({ item }) => (
    <Card style={styles.card} mode="outlined">
      <Card.Content>
        <Text variant="titleMedium">{item.nome}</Text>
        <Text>Anos: {item.anos.join(', ')}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <FlatList
      data={titles}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item.nome}-${index}`}
      contentContainerStyle={{ padding: 16 }}
    />
  );
}

const styles = StyleSheet.create({
  card: { marginBottom: 16 }
});
