const apiUrl = process.env.EXPO_PUBLIC_API_URL;
export const artefactosDeUsuario = async (usuarioId) => {
    try {
        const response = await fetch(`${apiUrl}/usuarios/${usuarioId}/artefactos`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Artefactos obtenidos del usuario ", data);
        return data;
    } catch (error) {
        console.log('Error obtenerArtefactosDeUsuario al obtener los artefactos del usuario:', error);
        throw error;
    }
};
