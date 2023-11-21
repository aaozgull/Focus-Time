import react from 'react';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

import { Color } from '../Utils/Color';
import {spacing} from '../Utils/sizes';
import { RoundedButton } from '../components/RoundedButton';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
        <View style={styles.buttonContainer}>
          <RoundedButton
            title="+"
            size={50}
           onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  buttonContainer: {
    justifyContent: 'center',
  },
  inputContainer: {
    //flex: 0.5,
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    marginRight: spacing.sm,
  },
});
