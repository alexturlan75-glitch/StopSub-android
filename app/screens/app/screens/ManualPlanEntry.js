import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const ManualPlanEntry = () => {
  const [plan, setPlan] = useState('');
  const [price, setPrice] = useState('');

  const handleSave = () => {
    // You will add save logic later
    alert('Plan saved!');
  };

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text style={{ fontSize: 20, marginBottom: 16 }}>Add a Subscription</Text>
      <TextInput
        placeholder="Plan Name"
        value={plan}
        onChangeText={setPlan}
        style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}
      />
      <TextInput
        placeholder="Monthly Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}
      />
      <Button title="Save Plan" onPress={handleSave} />
    </View>
  );
};

export default ManualPlanEntry;
