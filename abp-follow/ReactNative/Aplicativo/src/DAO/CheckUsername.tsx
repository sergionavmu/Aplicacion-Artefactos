const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const authenticateUserName = async (name : string, surname: string, email : string ,username : string, password: string) => {
    try {
        const response = await fetch(`${apiUrl}/usuarios`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, surname, email, username, password}),
        });

        if (response.ok) {
            const userData = await response.json();
            console.log('Datos del usuario:', userData);
            return userData; 
        } else {
            const errorMessage = await response.text();
            console.error('Error al autentificar el usuario. Código de estado:', response.status, 'Mensaje:', errorMessage);
            throw new Error('Error al autentificar el usuario: ' + errorMessage);
        }
    } catch (error) {
        console.log('El nombre del usuario ya existe:', error);
        console.log('Solicitud:', JSON.stringify({ username}));
        throw error;
    }
};
