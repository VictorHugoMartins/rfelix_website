import React from 'react';

import ImgInstagram from '../../Assets/Footer/instagram.png';
import ImgFacebook from '../../Assets/Footer/facebook.png';
import ImgLinkedin from '../../Assets/Footer/linkedin.png';

import './style.css';

function Footer() {
	return (
		<div>
			<footer>
				<div class="rodape">
					<div class="col">
						<h3>
							<a href="/#" id="titulo">Ruan Felix</a>
						</h3>
						<div id="text">Copyright © 2020 Ruan Felix.</div>
						<div id="text">Todos os direitos reservados.</div>

						<div class="social-media">
							<a href="https://br.linkedin.com/"><img src={ImgLinkedin} alt="" /></a>
							<a href="https://www.instagram.com/"><img src={ImgInstagram} alt="" /></a>
							<a href="https://www.facebook.com/"><img src={ImgFacebook} alt="" /></a>
						</div>
					</div>
				</div>
			</footer>
		</div>

	);
}

export default Footer;