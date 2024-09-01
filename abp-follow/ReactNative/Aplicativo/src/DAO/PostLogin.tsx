import StoreDatos from "./StoreDatos";

export const PostLogin = async (Usuario) => {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;

    try {
        const response = await fetch(`${apiUrl}/usuarios/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Usuario),
        });

        if (response.ok) {
            const jsonData = await response.json();
            console.log('Datos del usuario:', jsonData);

            // Utiliza la clase StoreDatos para almacenar los datos
            await StoreDatos.storeData(JSON.stringify(jsonData), 'userData');

            return jsonData;
        } else {
            const errorMessage = await response.text();
            console.log('Error del servidor:', errorMessage);
            throw new Error(errorMessage);
        }
    } catch (error) {
        console.log('Error al obtener los datos:', error);
        throw error;
    }
};
