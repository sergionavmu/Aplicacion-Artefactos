export const GetConexion = async () => {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;

    try {
        const response = await fetch(`${apiUrl}/usuarios`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

            },

        });

        const jsonData = await response.json();
        console.log("Datos recuperados " + JSON.stringify(jsonData));
        return jsonData;


    } catch (error) {
        console.log('Error al obtener los datos:', error);
        throw error;
    }

}
 