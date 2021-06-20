import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import { SwipeListView } from 'react-native-swipe-list-view';

const IngredientListItem = ({ ingredients }) => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  const handleItemPress = () => console.log('ingredient clicked');
  const keyData = ingredients.items.map((item, idx) => {
    const obj = { ...item, key: `${idx}` };
    return obj;
  });

  console.log('IngredientListItem.js -- keyData:', keyData);
  return (
    <List.Section>
      <List.Accordion
        title="Ingredients"
        left={(props) => <List.Icon {...props} icon="knife" />}
        expanded={expanded}
        onPress={handlePress}>
        <SwipeListView
          data={keyData}
          renderItem={(data, rowMap) => (
            <View>
              <Text>{data.item.name}</Text>
            </View>
          )}
          renderHiddenItem={(data, rowMap) => (
            <View style={styles.rowBack}>
              <Text style={styles.backText}>Right</Text>
            </View>
          )}
          rightOpenValue={-75}
        />
      </List.Accordion>
    </List.Section>
  );
};

export default IngredientListItem;

const styles = StyleSheet.create({
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15
  },
  backText: {
    color: '#FFF'
  }
});
