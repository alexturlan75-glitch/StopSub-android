import React from 'react';
import { View, Text, Button } from 'react-native';

const Onboarding = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 24, marginBottom: 16 }}>Welcome to StopSub!</Text>
    <Text style={{ marginBottom: 32 }}>
      Let's help you manage your subscriptions and save money.
    </Text>
    <Button
      title="Get Started"
      onPress={() => navigation.navigate('Manual Plan Entry')}
    />
  </View>
);

export default Onboarding;
