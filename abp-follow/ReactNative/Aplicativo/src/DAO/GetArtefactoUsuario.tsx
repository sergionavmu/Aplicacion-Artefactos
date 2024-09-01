const apiUrl = process.env.EXPO_PUBLIC_API_URL;
export const asociarArtefactoConUsuario = async (usuarioId, qrCode) => {
    try {
        const response = await fetch(`${apiUrl}/usuarios/${usuarioId}/${qrCode}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ qrCode }),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Artefacto asociado con el usuario ", data);
        return data;
    } catch (error) {
        console.log('Error asociarArtefactoConUsuario al asociar el artefacto con el usuario:', error);
        throw error;
    }
};