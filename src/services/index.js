import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col items-center pb-20 bg-white">
      <div className="mt-32 text-6xl font-semibold leading-tight text-neutral-900 md:mt-10 md:text-4xl">
        Service
      </div>
      <div className="flex flex-col px-5 mt-28 md:mt-10 ml-auto mr-auto w-full max-w-[1423px] md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6b3503115099db1a44edd4ad7d3ce38a0579c5dcd2ff4c5664cb899245923756?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b3503115099db1a44edd4ad7d3ce38a0579c5dcd2ff4c5664cb899245923756?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b3503115099db1a44edd4ad7d3ce38a0579c5dcd2ff4c5664cb899245923756?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b3503115099db1a44edd4ad7d3ce38a0579c5dcd2ff4c5664cb899245923756?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b3503115099db1a44edd4ad7d3ce38a0579c5dcd2ff4c5664cb899245923756?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b3503115099db1a44edd4ad7d3ce38a0579c5dcd2ff4c5664cb899245923756?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b3503115099db1a44edd4ad7d3ce38a0579c5dcd2ff4c5664cb899245923756?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b3503115099db1a44edd4ad7d3ce38a0579c5dcd2ff4c5664cb899245923756?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
          className="w-full aspect-[2.44] md:max-w-full"
        />
        <div className="self-center mt-48 text-6xl font-medium leading-7 text-black md:mt-10 md:max-w-full md:text-4xl">
          Visual Communication
        </div>
        <div className="shrink-0 self-center mt-1.5 max-w-full h-1.5 rounded-sm bg-violet-700 bg-opacity-70 w-[606px] md:w-full" />
        <div className="flex gap-5 mt-44 ml-16 max-w-full w-[1031px] md:flex-wrap md:mt-10 md:ml-0">
          <div className="flex-auto my-auto text-5xl font-medium leading-7 text-red-600 md:text-4xl">
            Branding
          </div>
          <div className="flex flex-col text-5xl font-semibold leading-tight text-neutral-900">
            <div className="flex gap-4">
              <div className="grow">App is </div>
              <div className="flex flex-auto gap-0.5 self-start">
                <div className="grow">Available</div>
                <div>Free</div>
              </div>
            </div>
            <div className="self-start mt-6 ml-4 md:ml-2.5">
              On Google Store
            </div>
            <div className="mt-7 text-base leading-7 text-slate-500">
              Increase productivity with a simple to-do app. app for
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
