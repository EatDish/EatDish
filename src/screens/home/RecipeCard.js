import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function RecipeCard({ recipeInfo }) {
  const navigation = useNavigation();
  return (
    <Card>
      <TouchableOpacity onPress={() => navigation.navigate('Recipe', { recipe: recipeInfo })}>
        <Card.Cover
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK1bPJyZFSVNJArocOLzfbkRMC5_GsbZFUfw&usqp=CAU'
          }}
        />
        <Card.Title title={recipeInfo.dishName} subtitle={recipeInfo.cuisine} />
        <Card.Content>
          <Paragraph>
            {recipeInfo.prepTime ? recipeInfo.prepTime + recipeInfo.cookTime : recipeInfo.cookTime}{' '}
            minutes
          </Paragraph>
          <Paragraph>Forks</Paragraph>
          <Paragraph>Stars</Paragraph>
          <Paragraph>User</Paragraph>
        </Card.Content>
      </TouchableOpacity>
    </Card>
  );
}
