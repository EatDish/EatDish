import React from 'react';
import { List } from 'react-native-paper';

const StepListItem = ({ steps }) => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  const handleItemPress = () => console.log('hi');

  return (
    <List.Section>
      <List.Accordion
        title="Steps"
        left={(props) => <List.Icon {...props} icon="format-list-bulleted-square" />}
        expanded={expanded}
        onPress={handlePress}>
        {steps.items.map((step, idx) => (
          <List.Item
            key={`${idx + step}`}
            onPress={handleItemPress}
            title={step.name}
            right={(props) => <List.Icon {...props} icon="dots-vertical" />}
          />
        ))}
      </List.Accordion>
    </List.Section>
  );
};
export default StepListItem;
