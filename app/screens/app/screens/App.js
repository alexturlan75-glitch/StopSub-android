import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './app/screens/Onboarding';
import ManualPlanEntry from './app/screens/ManualPlanEntry';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Manual Plan Entry" component={ManualPlanEntry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
