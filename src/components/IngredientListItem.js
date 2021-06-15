import React from 'react';
import { List } from 'react-native-paper';

const IngredientListItem = ({ ingredients }) => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  const handleItemPress = () => console.log('ingredient clicked');

  return (
    <List.Section>
      <List.Accordion
        title="Ingredients"
        left={(props) => <List.Icon {...props} icon="knife" />}
        expanded={expanded}
        onPress={handlePress}>
        {ingredients.items.map((ingredient, idx) => (
          <List.Item
            key={`${idx + ingredient}`}
            onPress={handleItemPress}
            title={`         ${ingredient.amount}   ${ingredient.name}`}
            right={(props) => <List.Icon {...props} icon="dots-vertical" />}
          />
        ))}
      </List.Accordion>
    </List.Section>
  );
};

export default IngredientListItem;
