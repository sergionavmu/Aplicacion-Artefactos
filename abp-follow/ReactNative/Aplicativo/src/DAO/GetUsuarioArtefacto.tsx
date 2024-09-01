const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const getUsuarioArtefacto = async (usuarioId, artefactoId) => {
    try {
        const response = await fetch(`${apiUrl}/usuarios/${usuarioId}/artefactos/${artefactoId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error al obtener el artefacto del usuario:', error);
        throw error;
    }
};
