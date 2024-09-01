const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const CheckUser = async (username: string, password: string) => {
    try {
        const response = await fetch(`${apiUrl}/usuarios/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const userData = await response.json();
            console.log('Datos del usuario:', userData);
            return userData; // Puedes devolver los datos del usuario o simplemente un éxito.
        } else {
            const errorMessage = await response.text();
            console.error('Error al autentificar el usuario. Código de estado:', response.status, 'Mensaje:', errorMessage);
            throw new Error('Error al autentificar el usuario: ' + errorMessage);
        }
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
        console.log('Solicitud:', JSON.stringify({ username, password }));
        throw error;
    }
};
