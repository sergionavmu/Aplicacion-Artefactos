const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const GetUsuarioName = async (username) => {
    try {
        const response = await fetch(`${apiUrl}/usuarios/usuario/${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

            },

        });

        const jsonData = await response.json();
        console.log("Datos getUsuarioId recuperados " + jsonData);
        return (jsonData);


    } catch (error) {
        console.log('Error getUsuarioId al obtener los datos:', error);
        throw error;
    }

}