import React from "react";

import { HashLink } from "react-router-hash-link";
const Home = () => {
  return (
    <div>
      <div className="flex flex-col bg-white">
        <div className="flex flex-col pb-11 w-full bg-white border-b border-solid border-zinc-100 max-md:max-w-full">
          <div className="flex flex-col items-center px-20 w-full max-md:px-5 max-md:max-w-full">
            <div className="mt-20 w-full max-w-[1187px] max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow mt-12 font-semibold max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col items-start pl-14 max-md:pl-5 max-md:max-w-full">
                      <div className="text-5xl text-neutral-900 max-md:max-w-full max-md:text-4xl">
                        The Reason you
                        <br /> made it here, <br />
                        Is the Solution
                        <br /> we cater You
                      </div>
                      <div className="mt-12 ml-6 text-lg leading-8 text-slate-500 max-md:mt-10 max-md:max-w-full">
                        Leveraging IT solutions and creative marketing
                        strategies
                        <br />
                        enhancing business efficiency, outreach, and growth.
                      </div>
                      <div className="flex gap-5 justify-between items-start mt-4 ml-5 w-full text-base leading-5 text-center capitalize max-md:flex-wrap max-md:max-w-full">
                        <div className="flex gap-5 justify-between self-end mt-8">
                          <div className="justify-center px-12 py-5 text-white bg-violet-700 rounded max-md:px-5">
                            let’s talk
                          </div>
                          <div className="justify-center px-9 py-5 text-black rounded border border-solid border-slate-500 border-opacity-10 max-md:px-5">
                            Know more
                          </div>
                        </div>
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ebd5e0b2e4ef84b4e6b7f0babbc54916f537ac65937473d5a2378b3e92275a39?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ebd5e0b2e4ef84b4e6b7f0babbc54916f537ac65937473d5a2378b3e92275a39?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ebd5e0b2e4ef84b4e6b7f0babbc54916f537ac65937473d5a2378b3e92275a39?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ebd5e0b2e4ef84b4e6b7f0babbc54916f537ac65937473d5a2378b3e92275a39?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ebd5e0b2e4ef84b4e6b7f0babbc54916f537ac65937473d5a2378b3e92275a39?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ebd5e0b2e4ef84b4e6b7f0babbc54916f537ac65937473d5a2378b3e92275a39?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ebd5e0b2e4ef84b4e6b7f0babbc54916f537ac65937473d5a2378b3e92275a39?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ebd5e0b2e4ef84b4e6b7f0babbc54916f537ac65937473d5a2378b3e92275a39?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
                          className="shrink-0 self-start w-10 aspect-square"
                          alt='img'
                        />
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cf5e2ea13bef0467621bcdfb67e24db06baa0a3d7a795cc97568ff6ea9fc9046?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf5e2ea13bef0467621bcdfb67e24db06baa0a3d7a795cc97568ff6ea9fc9046?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf5e2ea13bef0467621bcdfb67e24db06baa0a3d7a795cc97568ff6ea9fc9046?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf5e2ea13bef0467621bcdfb67e24db06baa0a3d7a795cc97568ff6ea9fc9046?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf5e2ea13bef0467621bcdfb67e24db06baa0a3d7a795cc97568ff6ea9fc9046?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf5e2ea13bef0467621bcdfb67e24db06baa0a3d7a795cc97568ff6ea9fc9046?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf5e2ea13bef0467621bcdfb67e24db06baa0a3d7a795cc97568ff6ea9fc9046?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf5e2ea13bef0467621bcdfb67e24db06baa0a3d7a795cc97568ff6ea9fc9046?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
                      className="mt-14 aspect-square w-[30px] max-md:mt-10"
                      alt="img"
                    />
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6d852893e4be19833250def3dddc1ad0409784296772b5462abb73ac97cfbf1a?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d852893e4be19833250def3dddc1ad0409784296772b5462abb73ac97cfbf1a?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d852893e4be19833250def3dddc1ad0409784296772b5462abb73ac97cfbf1a?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d852893e4be19833250def3dddc1ad0409784296772b5462abb73ac97cfbf1a?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d852893e4be19833250def3dddc1ad0409784296772b5462abb73ac97cfbf1a?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d852893e4be19833250def3dddc1ad0409784296772b5462abb73ac97cfbf1a?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d852893e4be19833250def3dddc1ad0409784296772b5462abb73ac97cfbf1a?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d852893e4be19833250def3dddc1ad0409784296772b5462abb73ac97cfbf1a?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
                      className="self-center mt-12 aspect-[1.1] w-[22px] max-md:mt-10"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/105aa147bbc5c1828c716f24079f2b7d3576a1832f9322ddf75d7751b717cc7e?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/105aa147bbc5c1828c716f24079f2b7d3576a1832f9322ddf75d7751b717cc7e?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/105aa147bbc5c1828c716f24079f2b7d3576a1832f9322ddf75d7751b717cc7e?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/105aa147bbc5c1828c716f24079f2b7d3576a1832f9322ddf75d7751b717cc7e?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/105aa147bbc5c1828c716f24079f2b7d3576a1832f9322ddf75d7751b717cc7e?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/105aa147bbc5c1828c716f24079f2b7d3576a1832f9322ddf75d7751b717cc7e?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/105aa147bbc5c1828c716f24079f2b7d3576a1832f9322ddf75d7751b717cc7e?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/105aa147bbc5c1828c716f24079f2b7d3576a1832f9322ddf75d7751b717cc7e?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
                    className="w-full aspect-[0.75] max-md:mt-10 max-md:max-w-full"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="mt-18 text-xl font-medium leading-7 text-center text-red-600 max-md:mt-10">
              # services
            </div>
            <div
              className="mt-10 text-5xl font-semibold text-center text-neutral-900 max-md:max-w-full max-md:text-4xl"
              id="services"
            >
              Service That Help you
            </div>
            <div className="mt-4 text-5xl font-semibold text-center text-neutral-900 max-md:text-4xl">
              Grow
            </div>
            <div className="flex flex-col items-center bg-white">
              <div className="flex flex-col ml-auto mr-auto w-full max-w-[1423px] md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6b3503115099db1a44edd4ad7d3ce38a0579c5dcd2ff4c5664cb899245923756?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b3503115099db1a44edd4ad7d3ce38a0579c5dcd2ff4c5664cb899245923756?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b3503115099db1a44edd4ad7d3ce38a0579c5dcd2ff4c5664cb899245923756?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b3503115099db1a44edd4ad7d3ce38a0579c5dcd2ff4c5664cb899245923756?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b3503115099db1a44edd4ad7d3ce38a0579c5dcd2ff4c5664cb899245923756?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b3503115099db1a44edd4ad7d3ce38a0579c5dcd2ff4c5664cb899245923756?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b3503115099db1a44edd4ad7d3ce38a0579c5dcd2ff4c5664cb899245923756?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b3503115099db1a44edd4ad7d3ce38a0579c5dcd2ff4c5664cb899245923756?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
                  className="w-full aspect-[2.44] md:max-w-full"
                  alt="img"
                />
              </div>
            </div>
            <div className="flex gap-1 self-start mt-20 ml-36 text-3xl font-medium leading-7 max-md:mt-10 max-md:ml-2.5">
              <div className="grow text-red-600" id="about">
                # Why
              </div>
              <div className="flex-auto text-neutral-900"> Choose US ?</div>
            </div>
            <div className="flex gap-5 mt-3.5 w-full max-md:flex-wrap max-md:max-w-full">
              <div className="flex-auto max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto font-semibold max-md:mt-10 max-md:max-w-full">
                      <div className="text-2xl leading-[61px] text-neutral-900 max-md:max-w-full">
                        Our strategy driven approach with unparalleled IT
                        expertise and innovative results straight from the
                        creative minds of our cubicle makes us gain long term
                        impact for you.
                      </div>
                      <div className="mt-12 mr-14 text-base leading-7 text-neutral-500 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                        A cult built by teaming up creative minds brings forth
                        unparalleled innovation. By merging diverse talents, we
                        foster unique and groundbreaking ideas. This
                        collaboration cultivates a dynamic environment of
                        continuous creativity. Together, we transform visionary
                        concepts into impactful realities.
                      </div>
                      <div className="justify-center items-center text-center px-7 py-5 mt-9 max-w-full text-base leading-7 text-white bg-violet-700 border border-solid shadow-sm border-violet-700 border-opacity-10 rounded-[29px] w-[216px] max-md:px-5">
                        Let’s Talk
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full"
                    id="services"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/224c01f548a9a14479f5e72dfda8e73c34c1e2161caf11bc6c8c63aaddef81d3?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
                      className="grow w-full aspect-[0.98] max-md:mt-6 max-md:max-w-full"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-16 py-14 mt-16 w-full bg-purple-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="self-end text-5xl font-semibold text-center text-neutral-900 max-md:mr-2.5 max-md:max-w-full">
            Woahh!! somehow you landed to this form.
            <br />
            Let’s connect, Hey waitt! Don’t forget to mention Tea or Coffee.
          </div>
          <div className="mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col mt-5 font-semibold text-justify max-md:mt-10">
                  <div className="self-start ml-9 text-9xl leading-4 text-red-400 max-md:ml-2.5 max-md:text-4xl">
                    1
                  </div>
                  <div className="px-5 pt-24 pb-6 text-sm leading-4 rounded-lg shadow-sm bg-white bg-opacity-40 text-stone-500 max-md:pr-5">
                    We will send a short email notifying you that we
                    successfully received your request and started working on
                    it.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto font-semibold text-justify max-md:mt-10">
                  <div className="self-start ml-7 text-9xl leading-4 text-violet-700 max-md:ml-2.5 max-md:text-4xl">
                    2
                  </div>
                  <div className="px-5 pt-24 pb-6 text-sm leading-4 rounded-lg shadow-sm bg-white bg-opacity-40 text-stone-500 max-md:pr-5">
                    Our solution advisor analyses your requirements and will
                    reach back to you within 2 business days.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[52%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                  <div className="self-center max-w-full w-[543px]">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/312c8ca0753619453076d2b40875612096bfaf73643d64849ade5ec8e889de10?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
                          className="w-full aspect-[1.19] stroke-[2px] stroke-black max-md:mt-10"
                          style={{ display: "none" }} // Hide image on mobile view
                          alt="img"
                        />
                      </div>
                      <div
                        className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full"
                        style={{ display: "none" }}
                      >
                        {" "}
                        {/* Hide container on mobile view */}
                        <HashLink to={"/#footer"}>
                          <div className="grow justify-center px-7 py-20 mt-36 w-full text-4xl font-semibold text-center bg-purple-50 rounded-full border border-solid border-neutral-600 stroke-[1px] text-neutral-900 max-md:px-5 max-md:mt-10 hover:bg-zinc-900 hover:text-white">
                            Let’s Talk
                          </div>
                        </HashLink>
                      </div>
                    </div>
                  </div>
                  <div className="max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col font-semibold text-justify max-md:mt-10">
                          <div className="self-start ml-7 text-9xl leading-4 text-yellow-400 max-md:ml-2.5 max-md:text-4xl">
                            3
                          </div>
                          <div className="px-5 pt-24 pb-5 text-sm leading-4 rounded-lg shadow-sm bg-white bg-opacity-40 text-stone-500">
                            Our creative team will brainstorm innovative ideas,
                            ensuring unique and impactful solutions tailored to
                            your needs
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow mt-40 font-semibold text-justify max-md:mt-10">
                          <div className="self-start ml-7 text-9xl leading-4 text-pink-500 max-md:ml-2.5 max-md:text-4xl">
                            4
                          </div>
                          <div className="px-5 pt-24 pb-4 text-sm leading-4 rounded-lg shadow-sm bg-white bg-opacity-40 text-stone-500">
                            Our Team presents you an initial project estimation,
                            ballpark figures, or our project recommendations
                            within approximately 3-5 business days.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-blue-50 min-h-[70px] max-md:max-w-full" />
      </div>
    </div>
  );
};

export default Home;
