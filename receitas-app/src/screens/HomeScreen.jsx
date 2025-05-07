import React from 'react';
import { FlatList } from 'react-native';
import ReceitaCard from '../components/ReceitaCard';
import { receitas } from '../data/receitas';

export default function HomeScreen({ navigation }) {
  return (
    <FlatList
      data={receitas}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ReceitaCard receita={item} onPress={() => navigation.navigate('Receita', { receita: item })} />
      )}
    />
  );
}
