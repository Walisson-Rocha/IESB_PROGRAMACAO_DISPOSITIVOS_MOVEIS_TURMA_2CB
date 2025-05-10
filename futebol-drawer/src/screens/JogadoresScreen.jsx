import React from 'react';
import { FlatList, Image, View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { players } from '../data/teamData';

export default function JogadoresScreen() {
  const renderItem = ({ item }) => (
    <Card style={styles.card} mode="outlined">
      <View style={styles.row}>
        <Image source={{ uri: item.imagem }} style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <Text variant="titleMedium">{item.nome}</Text>
          <Text>Número: {item.numero}</Text>
          <Text>Posição: {item.posicao}</Text>
          <Text>Idade: {item.idade}</Text>
        </View>
      </View>
    </Card>
  );

  return (
    <FlatList
      data={players}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item.nome}-${index}`}
      contentContainerStyle={{ padding: 16 }}
    />
  );
}

const styles = StyleSheet.create({
  card: { marginBottom: 16 },
  row: { flexDirection: 'row', alignItems: 'center', padding: 12 },
  avatar: { width: 80, height: 80, borderRadius: 40, marginRight: 16 }
});
