import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Card, Text, Title } from 'react-native-paper';
import { team } from '../data/teamData';

export default function EscudoScreen() {
  return (
    <View style={styles.container}>
      <Card mode="outlined" style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>{team.nome}</Title>
          <Image source={{ uri: team.escudo }} style={styles.escudo} />
          <Text style={styles.info}>Fundação: {team.fundacao}</Text>
          <Text style={styles.info}>Estádio: {team.estadio}</Text>
          <Text style={styles.info}>Mascote: {team.mascote}</Text>
          <Text style={styles.info}>Cores: {team.cores.join(', ')}</Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  card: { padding: 16 },
  escudo: { width: 150, height: 150, alignSelf: 'center', marginVertical: 16 },
  title: { textAlign: 'center', fontSize: 24 },
  info: { marginTop: 6 }
});
