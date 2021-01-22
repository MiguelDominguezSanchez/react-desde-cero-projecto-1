import React from 'react';

const Formaulario = () => {
	const [fruta, setFruta] = React.useState('');
	const [Descripcion, setDescripcion] = React.useState('');

	return (
		<div>
			<h2>Formulario</h2>
			<form>
				<input
					type="text"
					placeholder="Ingrese Fruta"
					className="form-control mb-2"
					onChange={(e) => setFruta(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Ingrese Descripción"
					className="form-control mb-2"
					onChange={(e) => setDescripcion(e.target.value)}
				/>
				<button className="btn btn-primary w-100">Agregar</button>
			</form>
		</div>
	);
};

export default Formaulario;
