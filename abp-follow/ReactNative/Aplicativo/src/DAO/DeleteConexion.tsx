
export const PostConexion = async () => {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;

    try {
        const response = await fetch(`${apiUrl}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',

            },
            //body: JSON.stringify()
        });
        const jsonData = await response.json();
        console.log("Datos eliminados " + jsonData);
        return (jsonData);


    } catch (error) {
        console.log('Error al obtener los datos:', error);
        throw error;
    }

}
