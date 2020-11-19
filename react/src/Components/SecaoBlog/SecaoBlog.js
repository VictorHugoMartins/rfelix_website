import React from 'react';

import Img from '../../Assets/Blog/img-blog.jpg';

import './style.css';

function SecaoBlog() {
	return (
		<div class="secao">
			<div class="titulo">
				<h1>BLOG</h1>
			</div>

			<div class="coluna-blog">
				<section class="grid grid-template-areas-1">
					<div class="item imagem"><img src={Img} alt="Capa do post" /></div>
					<div class="item titulo-blog"><a href="/#"><h2>O QUE É AUTONOMIA ALIMENTAR?</h2></a></div>
					<div class="item descricao"><h5>29 de agosto de 2020</h5></div>
					<div class="item texto">Essa foto é de 2008. Eu voluntariava no centro comunitário de um campo de refugiados na Palestina. Minha tarefa era organizar um programa de oficinas pras crianças do campo. Eu lembro muito bem desse dia. Estávamos voltando de um piquenique (30 crianças!) no vilarejo do lado do campo. As crianças pediram pro motorista do ônibus aumentar o som e fizemos uma festa improvisada...</div>
					<div class="item advert"><div class="div_button">
						<button id="read_button">LER MAIS</button>
					</div></div>
				</section>
			</div>

			<div class="coluna-blog">
				<section class="grid grid-template-areas-1">
					<div class="item imagem"><img src={Img} alt="Capa do post" /></div>
					<div class="item titulo-blog"><a href="/#"><h2>O QUE É AUTONOMIA ALIMENTAR?</h2></a></div>
					<div class="item descricao"><h5>29 de agosto de 2020</h5></div>
					<div class="item texto">Essa foto é de 2008. Eu voluntariava no centro comunitário de um campo de refugiados na Palestina. Minha tarefa era organizar um programa de oficinas pras crianças do campo. Eu lembro muito bem desse dia. Estávamos voltando de um piquenique (30 crianças!) no vilarejo do lado do campo. As crianças pediram pro motorista do ônibus aumentar o som e fizemos uma festa improvisada...</div>
					<div class="item advert"><div class="div_button">
						<button id="read_button">LER MAIS</button>
					</div></div>
				</section>
			</div>
		</div>
	);
}

export default SecaoBlog;