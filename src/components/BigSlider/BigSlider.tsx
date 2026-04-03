import bigSlider from './BigSlider.module.scss';
import React from 'react';
import classNames from 'classnames';
import { useSwipeable } from 'react-swipeable';

function prepareSliderImages() {
  const array: string[] = [];
  const imagesPath = './../../public/img/slider/slider_';

  for (let i = 0; i < 5; i++) {
    array.push(imagesPath + i + '.png');
  }

  return array;
}

export const BigSlider = () => {
  const imagesPaths = prepareSliderImages();
  const [imgStartIndex, setImgStartIndex] = React.useState(0);

  const maxIndex = imagesPaths.length - 1;

  const handleNext = () => {
    setImgStartIndex(prev => {
      const next = prev + 1;

      return next > maxIndex ? 0 : next;
    });
  };

  const handlePrev = () => {
    setImgStartIndex(prev => {
      const next = prev - 1;

      return next < 0 ? maxIndex : next;
    });
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className={bigSlider.bigSlider} {...handlers}>
      <div className={bigSlider.sliderContainer}>
        <button
          onClick={handlePrev}
          className={classNames(bigSlider.Button, bigSlider.ButtonLeft)}
        >
          Left
        </button>
        <ul
          className={bigSlider.bigSliderList}
          style={{
            transform: `translateX(-${imgStartIndex * 100}%)`,
            transition: `transform ${0.3}ms`,
          }}
        >
          {imagesPaths.map((image, index) => {
            return (
              <li key={index + 1} className={bigSlider.bigSliderListElement}>
                <img
                  src={image}
                  alt={index.toString()}
                  className={bigSlider.bigSliderImage}
                />
              </li>
            );
          })}
          <li>
            <img src="" alt="" />
          </li>
        </ul>
        <button
          onClick={handleNext}
          className={classNames(bigSlider.Button, bigSlider.ButtonRight)}
        >
          Right
        </button>
      </div>
      <div className={bigSlider.dashes}>
        {Array.from({ length: imagesPaths.length }).map((_, index) => {
          return (
            <span
              className={classNames(bigSlider.dashe, {
                [bigSlider.dasheActive]: index === imgStartIndex,
              })}
              key={index}
            ></span>
          );
        })}
      </div>
    </div>
  );
};
