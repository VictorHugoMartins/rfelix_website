import React from 'react';

import ImgSlider1 from '../../Assets/Slider/slider1.jpg';
import ImgSlider2 from '../../Assets/Slider/slider2.jpg';
import ImgSlider3 from '../../Assets/Slider/slider3.jpg';

import './style.css';

function Slider1() {
  return (
    <div class="div-slider">
      <ul class="slides-front">
        <input type="radio" name="radio-btn" id="img-1" checked=""/>
        <li class="slide-container">
          <div class="slide">
            <img src={ImgSlider1} alt="Imagem do Slider" />
            <div class="white-background">
              <div class="slider-text">
                <h2>Cansado de Sázon?</h2>
                <h3>Que tal variar um pouco e experimentar pimenta-do-reino, noz-moscada, páprica? Aqui você aprender o melhor uso para cada tempero que a terra dá!</h3>
              </div>
            </div>
          </div>
          <div class="nv">
            <label for="img-3" class="prev">‹</label>
            <label for="img-2" class="next">›</label>
          </div>
        </li>

        <input type="radio" name="radio-btn" id="img-2" />
        <li class="slide-container">
          <div class="slide">
            <img src={ImgSlider2} alt="Imagem do Slider" />
            <div class="white-background">
            <div class="slider-text">
              <h2>Compre nas feiras locais!</h2>
              <h3>Quer ter os melhores preços e ainda saber de verdade, de onde vem o que você come? Então apoie a agricultura familiar!</h3>
              </div>
            </div>
          </div>
          <div class="nv">
            <label for="img-1" class="prev">‹</label>
            <label for="img-3" class="next">›</label>
          </div>
        </li>

        <input type="radio" name="radio-btn" id="img-3" />
        <li class="slide-container">
          <div class="slide">
            <img src={ImgSlider3} alt="Imagem do Slider" />
            <div class="white-background">
            <div class="slider-text">
              <h2>Crie laços com a comunidade!</h2>
              <h3>Precisando de uma desculpa pra ver os vizinhos, amigos e a família? Então que tal testar uma dessas receitas? Ou envie a sua pra gente!</h3>
            </div>
            </div>
          </div>
          <div class="nv">
            <label for="img-2" class="prev">‹</label>
            <label for="img-1" class="next">›</label>
          </div>
        </li>

        <li class="nv-dots">
          <label for="img-1" class="nv-dot" id="img-dot-1">
            <div class="zoom">
            <img src={ImgSlider1} alt="Seleção de imagem" class="img-responsive" />
            </div>
          </label>
          <label for="img-2" class="nv-dot" id="img-dot-2">
            <div class="zoom">
              <img src={ImgSlider2} alt="Seleção de imagem" class="img-responsive" />
            </div>
          </label>
          <label for="img-3" class="nv-dot" id="img-dot-3">
            <div class="zoom">
            <img src={ImgSlider3} alt="Seleção de imagem" class="img-responsive" />
            </div>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Slider1;