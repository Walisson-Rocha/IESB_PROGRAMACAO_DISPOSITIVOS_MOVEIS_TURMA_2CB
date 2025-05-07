import React from 'react';
import { ScrollView, Image } from 'react-native';
import { Text, Title, Paragraph, List } from 'react-native-paper';

export default function ReceitaScreen({ route, navigation }) {
  const { receita } = route.params;

  return (
    <ScrollView style={{ padding: 10 }}>
      <Image source={{ uri: receita.imagem }} style={{ height: 200, borderRadius: 10 }} />
      <Title style={{ marginVertical: 10 }}>{receita.nome}</Title>
      <Paragraph>Tempo de preparo: {receita.tempoPreparo}</Paragraph>
      <Paragraph>Porções: {receita.porcoes}</Paragraph>

      <Title style={{ marginTop: 20 }}>Ingredientes</Title>
      {receita.ingredientes.map((item, idx) => (
        <List.Item key={idx} title={item} left={() => <List.Icon icon="food" />} />
      ))}

      <Title style={{ marginTop: 20 }}>Modo de Preparo</Title>
      {receita.modoPreparo.map((passo, idx) => (
        <List.Item key={idx} title={passo} left={() => <List.Icon icon="check" />} />
      ))}
    </ScrollView>
  );
}
