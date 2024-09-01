import AsyncStorage from '@react-native-async-storage/async-storage';

class StoreDatos {
    static async storeData(value, key) {
        try {
          await AsyncStorage.setItem(key, value);
        } catch (e) {
          console.error('Error al guardar los datos:', e);
          // Puedes manejar la alerta aquí o lanzar una excepción según tus necesidades
          throw e;
        }
    }
    
    static async getData(key) {
        try {
            const value = await AsyncStorage.getItem(key);
            return value;
        } catch (e) {
            console.error('Error al leer los datos:', e);
            // Puedes manejar la alerta aquí o lanzar una excepción según tus necesidades
            throw e;
        }
    }
}

export default StoreDatos;
