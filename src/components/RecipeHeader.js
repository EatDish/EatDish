import React from 'react';
import { Avatar, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper';
import { ImageBackground, StyleSheet, View } from 'react-native';
// I"m going to be able to rename, fork recipe
const RecipeHeader = ({ recipe }) => {
  console.log('RecipeHeader.js -- recipe:', recipe);
  return (
    <ImageBackground
      style={styles.image}
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK1bPJyZFSVNJArocOLzfbkRMC5_GsbZFUfw&usqp=CAU'
      }}>
      <Card>
        <Card.Title
          title={recipe.dishName}
          right={(props) => (
            <IconButton {...props} icon="silverware-fork-knife" onPress={() => {}} />
          )}
        />
      </Card>
    </ImageBackground>
  );
};
export default RecipeHeader;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end'
  }
});
