const apiUrl = process.env.EXPO_PUBLIC_API_URL;
export const GetArtefactos = async () => {
    try {
        const response = await fetch(`${apiUrl}/artefactos`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const jsonData = await response.json();
        console.log("Datos recuperados " + JSON.stringify(jsonData));
        return (jsonData);
    } catch (error) {
        console.log('Error al obtener los datos:', error);
        throw error;
    }
}
