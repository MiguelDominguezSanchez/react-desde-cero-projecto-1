import React from 'react';
import Parrafo from './components/Parrafo';
import Variables from './components/Variables';
import Eventos from './components/Eventos';
import Contador from './components/Contador';
import Listas from './components/Listas';
import Formaulario from './components/Formaulario';

function App() {
	return (
		<div className="container mt-5">
			<h1>Hola Mundo React</h1>
			{/*
      <Parrafo />
			<Variables />
			<Eventos />
      <Contador />
      <Listas />
      */}
			<Formaulario />
		</div>
	);
}

export default App;
