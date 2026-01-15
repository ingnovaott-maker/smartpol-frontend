export const dowlandFile = (link: string) => {
	// Configurar la solicitud con el token de autorización
	let access_token = null;
	if (localStorage?.getItem('stateAuth')) {
		const stateAuth = JSON.parse(localStorage.getItem('stateAuth') ?? '')
			?.state;
		access_token = stateAuth?.accessToken;
	}

	const headers = new Headers({
		Authorization: `Bearer ${access_token}`,
	});

	// Realizar la solicitud GET para obtener el blob desde el servidor
	fetch(link, {
		method: 'GET',
		headers: headers,
	})
		.then(response => {
			if (response.ok) {
				// La solicitud fue exitosa, se procede a obtener el blob
				return response.blob();
			} else {
				// La solicitud falló, manejar el error adecuadamente
				throw new Error('Error en la solicitud');
			}
		})
		.then(blob => {
			// Crear un enlace de descarga en el DOM
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = 'personas.xlsx'; // Nombre del archivo que se descargará
			document.body.appendChild(a);
			a.click();
			window.URL.revokeObjectURL(url);
		})
		.catch(error => {
			console.error('Error:', error);
		});
};
