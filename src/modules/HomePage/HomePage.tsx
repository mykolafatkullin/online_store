import { BigSlider } from '../../components/BigSlider';
import homePage from './HomePage.module.scss';
import classNames from 'classnames';

export const HomePage = () => {
  return (
    <>
      <h1 className={classNames('font-h1', homePage.HomePageTitle)}>
        Welcome to Nice Gadgets store!
      </h1>
      <BigSlider />
      <div>Slider brand new</div>
      <div>Categories</div>
      <div>HotPrices</div>
    </>
  );
};
