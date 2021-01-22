import React from 'react';

const Variables = () => {
	const saludo = 'Hola desde constante';
	const imagen =
		'https://yt3.ggpht.com/NMx-SgBr6qEAJe-3MlLmTIUfRcZmjR5yqjonZxfuNBNZ9ocepf0LYzs8rV6hRRs7_kzfE0qonw=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj';

	return (
		<div>
			<h2>Nuevo Componente {saludo}</h2>
			<img src={imagen} alt="" />
		</div>
	);
};

export default Variables;
