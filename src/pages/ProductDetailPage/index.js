import React from 'react';
import ImageSlider from './components/ImageSlider';

const ProductDetail = () => {
  return (
    <div className="container mt-[60px]">
      <div className="grid grid-cols-12 lg:flex lg:flex-col gap-[30px]">
        <figure className="col-span-4  flex flex-col items-center gap-[20px]">
          <ImageSlider />
        </figure>
        <section className="col-span-8 bg-white dark:bg-dark-header-bg p-[60px] md:p-[16px]">
          <h1 className="text-4xl font-medium">
            Coffee Beans - Espresso Arabica and Robusta Beans
          </h1>
          <div className="flex gap-[60px] mt-[30px] sm:flex-col">
            <ul className="flex flex-col gap-[27px] grow">
              <li className="flex gap-x-[20px]">
                <img src="/icon/document.svg" alt="" className="icon" />
                <p className="text-2xl font-medium">Compare</p>
              </li>
              <li className="flex gap-x-[20px]">
                <img src="/icon/cart.svg" alt="" className="icon" />
                <span>
                  <p className="text-2xl font-medium">Delivery</p>
                  <p className=" ">From $6 for 1-3 days</p>
                </span>
              </li>
              <li className="flex gap-[20px]">
                <img src="/icon/bag.svg" alt="" className="icon" />
                <span>
                  <p className="text-2xl font-medium">Pickup</p>
                  <p>Out of 2 store, today</p>
                </span>
              </li>
            </ul>
            <div className="p-[20px] border-[1px] border-solid border-[#B9BABE] rounded-md mx-auto">
              <span className="flex items-center gap-[10px]">
                <p className="text-2xl font-medium">$500.00</p>
                <p className="text-2xl text-[#67B044] py-[2px] px-[8px] bg-[#e0eeda]">
                  10%
                </p>
              </span>
              <p className="text-4xl font-medium mt-[20px]">$540.00</p>
              <div className="mt-[20px] flex gap-[20px]">
                <button className="text-3xl font-medium rounded-md bg-[#FFB700] px-[50px] py-[10px]">
                  Add to cart
                </button>
                <button className="border-[1px] border-solid border-[#B9BABE] p-[11px] rounded-md">
                  <img src="/icon/heart.svg" alt="" className="icon" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-[30px]">
            <h2 className="text-3xl font-medium">Description</h2>
            <p className="mt-[20px] text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vero
              perspiciatis iste odio excepturi voluptates, quod dolor pariatur
              nulla ducimus, quos molestiae assumenda ab. Rerum quidem eum
              provident architecto pariatur.
            </p>
          </div>
        </section>
      </div>
      <h2 className="mt-[50px] text-5xl font-bold">Similar Items</h2>
      <div className="mt-[30px] mb-[100px] grid grid-cols-4 gap-[20px]">
        <section className="col-span-1 bg-white dark:bg-dark-header-bg rounded-lg overflow-hidden p-[20px] cursor-pointer">
          <img src="/image/iphone-1.jpg" alt="" />
          <h3 className="text-3xl font-medium mt-[24px]">
            Chuột không dây siêu nhẹ Pulsar X2H Mini Shinobu - Pulsar x Demon
            Slayer Limited Edition
          </h3>
          <p className="mt-[20px]">3.410.000₫</p>
        </section>
        <section className="col-span-1 bg-white dark:bg-dark-header-bg rounded-lg overflow-hidden p-[20px]">
          <img src="/image/iphone-1.jpg" alt="" />
          <h3 className="text-3xl font-medium mt-[24px]">
            Chuột không dây siêu nhẹ Pulsar X2H Mini Shinobu - Pulsar x Demon
            Slayer Limited Edition
          </h3>
          <p className="mt-[20px]">3.410.000₫</p>
        </section>
        <section className="col-span-1 bg-white dark:bg-dark-header-bg rounded-lg overflow-hidden p-[20px]">
          <img src="/image/iphone-1.jpg" alt="" />
          <h3 className="text-3xl font-medium mt-[24px]">
            Chuột không dây siêu nhẹ Pulsar X2H Mini Shinobu - Pulsar x Demon
            Slayer Limited Edition
          </h3>
          <p className="mt-[20px]">3.410.000₫</p>
        </section>
        <section className="col-span-1 bg-white dark:bg-dark-header-bg rounded-lg overflow-hidden p-[20px]">
          <img src="/image/iphone-1.jpg" alt="" />
          <h3 className="text-3xl font-medium mt-[24px]">
            Chuột không dây siêu nhẹ Pulsar X2H Mini Shinobu - Pulsar x Demon
            Slayer Limited Edition
          </h3>
          <p className="mt-[20px]">3.410.000₫</p>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
