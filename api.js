const api = 'http://172.16.104.33:3000/hola';

export async function subir(element) {
    try {
        const response = await fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(element)
        });
        return response;
    } catch (error) {
        console.error('Error al subir los datos:', error);
        return {}; 
    }
}