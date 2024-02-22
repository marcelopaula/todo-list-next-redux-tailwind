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
			<header className='bg-white py-4 mb-5'>
				<h1 className='text-center text-xl font-semibold'>Lista de Tarefas</h1> 
			</header>
			<main className='max-w-screen-md mx-auto'>
				<Resume />
				<Form />
				<List />
			</main>
		</Provider>
	);
}
