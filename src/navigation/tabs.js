import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GestureHandler} from '../screens/GestureHandler';

import {Movie} from '../screens/Movie';

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movie" component={Movie} />
      <Tab.Screen name="Gesture Handler" component={GestureHandler} />
    </Tab.Navigator>
  );
};
