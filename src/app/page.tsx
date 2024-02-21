'use client'

import React from 'react';
import Form from '../core/components/Form'
import List from '../core/components/List'
import Resume from '../core/components/Resume'
import { Provider } from 'react-redux';
import { store } from '@/core/store';

export default function Home() {
	return (
		<Provider store={store}>
			<main>
				<h1>Lista de Tarefas</h1>
				<Resume />
				<Form />

				<List />
			</main>
		</Provider>
	);
}
