import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Title } from 'react-native-paper'
import CarCard from '../components/CarCard'

export default function ListaScreen({ navigation }) {
  const carros = [
    { nome: 'Gol', ano: '2012', cor: 'Azul', fabricante: 'Volkswagen' },
    { nome: 'Civic', ano: '2018', cor: 'Preto', fabricante: 'Honda' },
    { nome: 'Uno', ano: '2020', cor: 'Branco', fabricante: 'Fiat' },
  ]

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Carros Disponíveis</Title>
      <FlatList
        data={carros}
        keyExtractor={(item, index) => `${item.nome}-${index}`}
        renderItem={({ item }) => (
          <CarCard carro={item} onPress={() => navigation.navigate('ItemScreen', { item })} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  title: { margin: 16, textAlign: 'center', fontSize: 20 },
})
