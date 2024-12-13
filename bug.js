```javascript
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const DATA = Array.from({length: 100}, (_, i) => `Item ${i + 1}`);

const MyComponent = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network request
      setItems(DATA);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={items}
      renderItem={({item}) => <Text>{item}</Text>}
      keyExtractor={item => item}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    width: '100%',
  },
});
export default MyComponent; 
```