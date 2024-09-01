const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const GetArtefactoByQR = async (qrCode) => {
    try {
        const response = await fetch(`${apiUrl}/codigoQr/${qrCode}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const artefacto = await response.json();
        console.log("Artefacto GetArtefactoByQR recuperado ", artefacto);
        return artefacto;
    } catch (error) {
        console.log('Error GetArtefactoByQR al obtener los datos:', error);
        throw error;
    }
    }
