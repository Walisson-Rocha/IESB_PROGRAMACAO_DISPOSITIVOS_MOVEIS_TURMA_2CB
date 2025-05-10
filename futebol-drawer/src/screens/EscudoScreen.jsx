import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Card, Text, Title, Divider } from 'react-native-paper';
import { team } from '../data/teamData';

export default function EscudoScreen() {
  // Criando uma cópia do objeto team para evitar modificações diretas
  const escudoData = { ...team };

  return (
    <View style={styles.container}>
      <Card style={styles.card} mode="elevated">
        <View style={styles.header}>
          <Image source={{ uri: escudoData.escudo }} style={styles.escudo} />
          <Title style={styles.title}>{escudoData.nome}</Title>
        </View>
        <Divider bold style={styles.divider} />
        <View style={styles.infoSection}>
          <Text style={styles.label}>🏁 Fundação:</Text>
          <Text style={styles.value}>{escudoData.fundacao}</Text>

          <Text style={styles.label}>🏟 Estádio:</Text>
          <Text style={styles.value}>{escudoData.estadio}</Text>

          <Text style={styles.label}>🦅 Mascote:</Text>
          <Text style={styles.value}>{escudoData.mascote}</Text>

          <Text style={styles.label}>🎨 Cores:</Text>
          <Text style={styles.value}>{escudoData.cores.join(', ')}</Text>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5'
  },
  card: {
    borderRadius: 16,
    padding: 20
  },
  header: {
    alignItems: 'center',
    marginBottom: 12
  },
  escudo: {
    width: 120,
    height: 120,
    borderRadius: 12,
    marginBottom: 8
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold'
  },
  divider: {
    marginVertical: 8
  },
  infoSection: {
    paddingTop: 8
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 12,
    color: '#d32f2f'
  },
  value: {
    fontSize: 16,
    color: '#333'
  }
});
