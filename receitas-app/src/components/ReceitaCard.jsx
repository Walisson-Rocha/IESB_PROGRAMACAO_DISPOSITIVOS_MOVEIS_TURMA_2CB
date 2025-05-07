import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export default function ReceitaCard({ receita, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={{ margin: 10 }}>
        <Card.Cover source={{ uri: receita.imagem }} />
        <Card.Content>
          <Title>{receita.nome}</Title>
          <Paragraph>{receita.tempoPreparo} | Porções: {receita.porcoes}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}
