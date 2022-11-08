import {createStackNavigator} from '@react-navigation/stack';
import {MovieDetail} from '../components/MovieDetail';

//import screens
import {Home} from '../screens/Movie';
import {Profile} from '../screens/Profile';

const Stack = createStackNavigator();

export const MyStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};
