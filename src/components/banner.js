import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

const Banner = () => {
  return (
    <section className='main'>
      <div className='container'>
        <div className='row'>
          <h2>
            <div className='line'>
              <span>Выберите продукт,</span>
            </div>
            <div className='line'>
              <span>который вы хотите интегрировать...</span>
            </div>
          </h2>
          <div className='btn-row'>
            <a href='/'>
              Узнать больше о нас <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
