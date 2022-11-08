import {View, StyleSheet, Text, Image} from 'react-native';
// import MaterialIcons from 'react-native-vector-icons';

export const MovieDetail = ({movie}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.posterImage} source={{uri: movie.posterImage}} />
      <View
        style={{
          width: '42%',
          justifyContent: 'space-around',
        }}>
        <Text style={{fontSize: 25, color: 'white'}}>{movie.name}</Text>
        <View style={styles.container1}>
          <Text style={{fontSize: 30, color: '#BA8C94', fontWeight: 'bold'}}>
            {movie.rating}
          </Text>
          <View>
            <Text style={{color: '#A9A9A9'}}>Released:</Text>
            <Text style={{color: '#A9A9A9'}}>{movie.releaseDate}</Text>
          </View>
        </View>
      </View>
      <View style={{width: '21%'}}>
        {/* <MaterialIcons name="like"/> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 150,
    backgroundColor: '#3C3C3C',
    margin: 15,
    borderRadius: 10,
  },
  posterImage: {
    height: '100%',
    width: '27%',
    borderRadius: 10,
  },
  container1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
