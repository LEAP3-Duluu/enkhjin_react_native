import {Text, View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MovieDetail} from '../components/MovieDetail';

import {moviesData} from '../moviesData';
export const Movie = () => {
  console.log('hhha');
  // console.log(moviesData);
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container1}>
        <Text style={styles.text1}>Movies</Text>
        <ScrollView style={styles.scrollView}>
          {moviesData.map((movie, i) => {
            return <MovieDetail movie={movie} key={movie.id}></MovieDetail>;
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.89)',
  },
  container1: {
    marginHorizontal: 11,
  },
  text1: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
