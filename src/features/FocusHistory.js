import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Color } from '../Utils/Color';
import { fontSizes, spacing } from '../Utils/sizes';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return <Text style={styles.title}>Things we've focused on:</Text>;
  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>"Things we've focused on:"</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  item: {
    fontSize: fontSizes.md,
    color: Color.white,
    paddingTop: spacing.sm,
  },
  title: {
    color: Color.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
});
