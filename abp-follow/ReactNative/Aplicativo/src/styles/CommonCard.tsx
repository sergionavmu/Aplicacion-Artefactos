import { StyleSheet } from 'react-native';

export const CommonCard = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  descriptionContainer: {
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  card: {
    backgroundColor: 'transparent',
    elevation: 8,
    alignContent:'center',
    padding:10,
    marginTop: 10,
  },
  coverImage: {
    width: '100%',
    height: 350,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 10,
    marginLeft:10,
    marginRight:10,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    padding: 10,
  },
  body: {
    fontSize: 16,
  },
  categoryPointsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
});
