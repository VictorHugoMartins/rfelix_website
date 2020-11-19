import React from 'react';

import './style.css';

function SecaoEnvios() {
	return (
		<div class="container">
			<div class="secao">
				<div class="secaoEnvios">
				<div class="titulo">
					<h1>ENVIAR SUGESTÃO</h1>
				</div>
				<div class="form">
					<section class="grid grid-template-areas-3">
						<div class="item name">
							<h4 class="campo_titulo">SEU NOME:</h4>
							<input type="text" class="campo_envio" />
						</div>
						<div class="item tipo">
							<h4 class="campo_titulo">NOME DA RECEITA:</h4>
							<input type="text" class="campo_envio" />
						</div>
						<div class="item desc">
							<h4 class="campo_titulo">DESCRIÇÃO:</h4>
							<input type="text" class="campo_envio" />
						</div>
						<div class="item upload">
							<h4 class="campo_titulo">UPLOAD DE ARQUIVO:</h4>
							<div class="inputfile-box">
								<input type="file" id="file" class="inputfile" />
								<label for="file">
									<span id="file-name" class="file-box"></span>
									<span class="file-button">
										<i class="fa fa-upload" aria-hidden="true"></i>
									Selecionar
								</span>
								</label>
							</div>
						</div>
						<div class="item send">
							<div class="div_button">
								<button id="send_button">ENVIAR</button>
							</div>
						</div>
					</section>
				</div>
				</div>
			</div>
		</div>
	);
}

export default SecaoEnvios;