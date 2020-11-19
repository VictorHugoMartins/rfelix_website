import React from 'react';

import Img1 from '../../Assets/Galeria/img1.jpg';
import Img2 from '../../Assets/Galeria/img2.jpg';
import Img3 from '../../Assets/Galeria/img3.jpg';
import Img4 from '../../Assets/Galeria/img4.jpg';
import Img5 from '../../Assets/Galeria/img5.jpg';
import Img6 from '../../Assets/Galeria/img6.jpg';
import Img7 from '../../Assets/Galeria/img7.jpg';
import Img8 from '../../Assets/Galeria/img8.jpg';
import Img9 from '../../Assets/Galeria/img9.jpg';

import './style.css'

function SecaoGaleria() {
	return (
		<div class="secao">
			<div class="receitas">
				<div class="titulo">
					<h1>RECEITAS</h1>
				</div>
				<ul id="lista">
					<li class="item">
						<a href="#img1">
							<img src={Img8} alt="Foto da receita" />
						</a>
					</li>
					<li class="item">
						<img src={Img2} alt="Foto da receita" />
					</li>
					<li class="item">
						<img src={Img3} alt="Foto da receita" />
					</li>
					<li class="item">
						<img src={Img4} alt="Foto da receita" />
					</li>
					<li class="item">
						<img src={Img5} alt="Foto da receita" />
					</li>
					<li class="item">
						<img src={Img6} alt="Foto da receita" />
					</li>
					<li class="item">
						<img src={Img7} alt="Foto da receita" />
					</li>
					<li class="item">
						<img src={Img1} alt="Foto da receita" />
					</li>
					<li class="item">
						<img src={Img9} alt="Foto da receita" />
					</li>
				</ul>

				<a href="#_" class="lightbox" id="img1">
					<div class="conteudo_lb">
						<img src={Img8} alt="Imagem da Lightbox" />
						<h1>QUIBE ASSADO DE BERINJELA</h1>
						<h3>Cuzcuz com grão-de-bico e couve-flor assada,
                purê de abóbora com gengibre, molho de salsa e amêndoas</h3>
					</div>
				</a>

			</div>
		</div>



	);
}

export default SecaoGaleria;