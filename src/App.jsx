import * as React from "react";
import Home from "./home";
import Header from "./header";
import Footer from "./footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./services";

const App=()=>{
  return (
    <>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}
// {
//   return (
//     <div className="flex flex-col pb-8 bg-white">
//       <div className="flex flex-col justify-center items-start px-16 py-5 w-full bg-white border-b border-solid border-zinc-100 max-md:px-5 max-md:max-w-full">
//         <div className="flex gap-5 justify-between items-center ml-20 max-w-full w-[1279px] max-md:flex-wrap">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dcd9598c85d18f1c76f1a605852890828c75893605f8dd0c16f47baacbac95d?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
//             className="shrink-0 self-stretch my-auto max-w-full aspect-[3.13] w-[132px]"
//           />
//           <div className="flex gap-5 self-stretch my-auto text-base font-medium leading-6 text-black max-md:flex-wrap max-md:max-w-full">
//             <div className="grow text-stone-500">Home</div>
//             <div>About us</div>
//             <div>Team</div>
//             <div>Services</div>
//             <div>Contact</div>
//           </div>
//           <div className="justify-center self-stretch px-12 py-5 text-base font-semibold leading-5 text-center text-white capitalize bg-violet-700 rounded max-md:px-5">
//             let’s talk
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col items-center mt-20 ml-20 max-w-full w-[1109px] max-md:mt-10">
//         <div className="self-stretch max-md:max-w-full">
//           <div className="flex gap-5 max-md:flex-col max-md:gap-0">
//             <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col grow mt-28 text-lg font-semibold max-md:mt-10 max-md:max-w-full">
//                 <div className="flex gap-1 self-start font-medium leading-[150%]">
//                   <div className="text-red-600"># No1</div>
//                   <div className="flex-auto text-neutral-900">
//                     {" "}
//                     Lab for Branding
//                   </div>
//                 </div>
//                 <div className="flex gap-5 mt-12 text-5xl leading-[70.2px] text-neutral-900 max-md:flex-wrap max-md:mt-10 max-md:text-4xl">
//                   <div className="max-md:text-4xl">Get </div>
//                   <div className="flex-auto max-md:text-4xl">Emplify</div>
//                 </div>
//                 <div className="flex gap-3 mt-6 text-5xl leading-[70.2px] text-neutral-900 max-md:flex-wrap max-md:text-4xl">
//                   <div className="grow max-md:text-4xl">Audience </div>
//                   <div className="flex-auto max-md:text-4xl">with us</div>
//                 </div>
//                 <div className="mt-14 leading-[178%] text-slate-500 max-md:mt-10 max-md:max-w-full">
//                   Increase productivity with a simple steps. solution for
//                 </div>
//                 <div className="mt-4 leading-[178%] text-slate-500 max-md:max-w-full">
//                   managing your all socials and data
//                 </div>
//                 <div className="flex gap-5 justify-between mt-12 text-base leading-5 text-center capitalize max-md:flex-wrap max-md:mt-10">
//                   <div className="justify-center px-12 py-5 text-white bg-violet-700 rounded max-md:px-5">
//                     let’s talk
//                   </div>
//                   <div className="justify-center px-6 py-5 text-black rounded border border-solid border-slate-500 border-opacity-10 max-md:px-5">
//                     Watch Videos
//                   </div>
//                 </div>
//                 <img
//                   loading="lazy"
//                   srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6d852893e4be19833250def3dddc1ad0409784296772b5462abb73ac97cfbf1a?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d852893e4be19833250def3dddc1ad0409784296772b5462abb73ac97cfbf1a?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d852893e4be19833250def3dddc1ad0409784296772b5462abb73ac97cfbf1a?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d852893e4be19833250def3dddc1ad0409784296772b5462abb73ac97cfbf1a?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d852893e4be19833250def3dddc1ad0409784296772b5462abb73ac97cfbf1a?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d852893e4be19833250def3dddc1ad0409784296772b5462abb73ac97cfbf1a?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d852893e4be19833250def3dddc1ad0409784296772b5462abb73ac97cfbf1a?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d852893e4be19833250def3dddc1ad0409784296772b5462abb73ac97cfbf1a?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
//                   className="self-center mt-32 aspect-[1.1] w-[22px] max-md:mt-10"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
//               <img
//                 loading="lazy"
//                 srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/846ed6ff0424bd9302c54ce6a1097e0f22dffce011b0531883c82ddf773adb3b?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/846ed6ff0424bd9302c54ce6a1097e0f22dffce011b0531883c82ddf773adb3b?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/846ed6ff0424bd9302c54ce6a1097e0f22dffce011b0531883c82ddf773adb3b?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/846ed6ff0424bd9302c54ce6a1097e0f22dffce011b0531883c82ddf773adb3b?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/846ed6ff0424bd9302c54ce6a1097e0f22dffce011b0531883c82ddf773adb3b?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/846ed6ff0424bd9302c54ce6a1097e0f22dffce011b0531883c82ddf773adb3b?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/846ed6ff0424bd9302c54ce6a1097e0f22dffce011b0531883c82ddf773adb3b?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/846ed6ff0424bd9302c54ce6a1097e0f22dffce011b0531883c82ddf773adb3b?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
//                 className="w-full aspect-[0.75] max-md:mt-10 max-md:max-w-full"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="mt-40 text-xl font-medium leading-7 text-center text-red-600 max-md:mt-10">
//           # services
//         </div>
//         <div className="mt-10 text-5xl font-semibold text-center leading-[61.18px] text-neutral-900 max-md:max-w-full max-md:text-4xl">
//           Service That Help you
//         </div>
//         <div className="mt-4 mb-8 text-5xl font-semibold text-center leading-[61.18px] text-neutral-900 max-md:text-4xl">
//           Grow
//         </div>

//         <div className="flex justify-center items-center h-screen">
//   <div className="absolute w-[45rem] h-[45rem] rounded-full bg-blue-500 flex justify-center items-center hover:bg-blue-600 z-[5]">
//     <div className="absolute w-[35rem] h-[35rem] rounded-full bg-yellow-500 flex justify-center items-center hover:bg-yellow-600 z-[4]">
//       <div className="absolute w-[25rem] h-[25rem] rounded-full bg-red-500 flex justify-center items-center hover:bg-red-600 z-[3]">
//         <div className="absolute w-[15rem] h-[15rem] rounded-full bg-green-500 flex justify-center items-center hover:bg-green-600 z-[2]">
//           <div className="absolute w-[5rem] h-[5rem] rounded-full bg-green-100 flex justify-center items-center hover:bg-green-200 z-[1]"></div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

//       </div>
//       <div className="flex flex-col items-center mt-96 w-full max-md:mt-10 max-md:max-w-full">
//         <div className="self-start max-w-full w-[796px]">
//           <div className="flex gap-5 max-md:flex-col max-md:gap-0">
//             <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col pb-20 mt-36 w-full bg-violet-50 rounded-[95.09px_119.91px_361.4px_283.6px] max-md:mt-10">
//                 <div className="z-10 shrink-0 mt-0 bg-violet-100 h-[450px] rounded-[140.77px_109.23px_369.34px_330.66px]" />
//               </div>
//             </div>
//             <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col grow px-5 max-md:mt-10 max-md:max-w-full">
//                 <div className="flex gap-px self-start text-xl font-medium leading-7">
//                   <div className="text-red-600"># Why</div>
//                   <div className="flex-auto text-neutral-900"> Choose US ?</div>
//                 </div>
//                 <div className="mt-7 text-5xl font-semibold leading-[61px] text-neutral-900 max-md:max-w-full">
//                   Deliver Friction-Free <br />
//                   Customer Service.
//                 </div>
//                 <div className="shrink-0 self-center w-40 h-1.5 bg-orange-500 bg-opacity-70" />
//                 <div className="flex flex-col mt-14 text-sm leading-7 text-gray-600 max-md:mt-10 max-md:max-w-full">
//                   <div className="text-base leading-7 text-neutral-500 max-md:max-w-full">
//                     Sed pellentesque lectus phasellus vivamus tempus lectus
//                     aliquam ut convallis.
//                   </div>
//                   <div className="mt-4 text-base leading-7 text-neutral-500 max-md:max-w-full">
//                     Urna at amet et risus dignissim arcu. Rhoncus bibendum
//                     habitant
//                   </div>
//                   <div className="flex gap-2.5 mt-12 text-base font-semibold leading-7 text-stone-500 max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
//                     <div className="justify-center items-start px-7 py-5 text-white bg-violet-700 border border-solid shadow-sm border-violet-700 border-opacity-10 rounded-[29px] max-md:px-5">
//                       Let’s Talk
//                     </div>
//                     <div className="justify-center px-10 py-5 bg-white border border-solid shadow-sm border-violet-700 border-opacity-10 rounded-[29px] max-md:px-5">
//                       Our Services
//                     </div>
//                     <div className="justify-center items-start px-7 py-5 bg-white border border-solid shadow-sm border-violet-700 border-opacity-10 rounded-[29px] max-md:px-5">
//                       {" "}
//                       About us
//                     </div>
//                   </div>
//                   <div className="flex gap-5 self-start mt-12 max-md:mt-10">
//                     <img
//                       loading="lazy"
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd8ddd1259465a4feca816877e4c6671971d07b90f7d89f029c9424d5b1b1d6f?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
//                       className="shrink-0 aspect-square w-[27px]"
//                     />
//                     <div className="flex-auto my-auto">
//                       Refresing to get such a personal touch.
//                     </div>
//                   </div>
//                   <div className="flex gap-5 self-start mt-6">
//                     <img
//                       loading="lazy"
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd8ddd1259465a4feca816877e4c6671971d07b90f7d89f029c9424d5b1b1d6f?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
//                       className="shrink-0 aspect-square w-[27px]"
//                     />
//                     <div className="flex-auto my-auto">
//                       If you are going to use a passage.
//                     </div>
//                   </div>
//                   <div className="flex gap-5 mt-6 max-md:flex-wrap">
//                     <img
//                       loading="lazy"
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd8ddd1259465a4feca816877e4c6671971d07b90f7d89f029c9424d5b1b1d6f?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
//                       className="shrink-0 aspect-square w-[27px]"
//                     />
//                     <div className="flex-auto my-auto max-md:max-w-full">
//                       Lorem Ipsum generators on the tend to repeat.
//                     </div>
//                   </div>
//                   <div className="flex gap-5 mt-6 max-md:flex-wrap">
//                     <img
//                       loading="lazy"
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd8ddd1259465a4feca816877e4c6671971d07b90f7d89f029c9424d5b1b1d6f?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
//                       className="shrink-0 aspect-square w-[27px]"
//                     />
//                     <div className="flex-auto my-auto max-md:max-w-full">
//                       Lorem Ipsum generators on the tend to repeat.
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col self-stretch py-20 mt-20 w-full bg-purple-50 max-md:mt-10 max-md:max-w-full">
//           <div className="flex flex-col self-center w-full max-w-[1632px] max-md:max-w-full">
//             <div className="px-5 max-md:max-w-full">
//               <div className="flex gap-5 max-md:flex-col max-md:gap-0">
//                 <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
//                   <div className="flex flex-col grow items-start py-6 pr-16 pl-5 w-full text-xs leading-5 bg-white rounded-lg shadow-sm text-neutral-400 max-md:pr-5 max-md:mt-10">
//                     <div className="text-sm font-semibold leading-4 text-stone-500">
//                       Responsive Friendly Design
//                     </div>
//                     <div className="mt-3">Lorem ipsum dolor sit amet, cons</div>
//                     <div className="mt-2.5">ectetur adipisicing elit, sed</div>
//                   </div>
//                 </div>
//                 <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
//                   <div className="mt-12 text-5xl font-semibold text-center leading-[60.9px] text-neutral-900 max-md:mt-10 max-md:max-w-full">
//                     Easy To Manage your All Data By
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <img
//               loading="lazy"
//               srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/98ce6096fb14f0a2fbc66139f4d8019969705d1dba241726f413ac8805e96606?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/98ce6096fb14f0a2fbc66139f4d8019969705d1dba241726f413ac8805e96606?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/98ce6096fb14f0a2fbc66139f4d8019969705d1dba241726f413ac8805e96606?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/98ce6096fb14f0a2fbc66139f4d8019969705d1dba241726f413ac8805e96606?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/98ce6096fb14f0a2fbc66139f4d8019969705d1dba241726f413ac8805e96606?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/98ce6096fb14f0a2fbc66139f4d8019969705d1dba241726f413ac8805e96606?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/98ce6096fb14f0a2fbc66139f4d8019969705d1dba241726f413ac8805e96606?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/98ce6096fb14f0a2fbc66139f4d8019969705d1dba241726f413ac8805e96606?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
//               className="z-10 self-end mt-0 max-w-full aspect-[1.03] w-[120px]"
//             />
//           </div>
//           <div className="z-10 mt-0 w-full max-md:max-w-full">
//             <div className="flex gap-5 max-md:flex-col max-md:gap-0">
//               <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
//                 <div className="flex flex-col grow items-start mt-3.5 max-md:mt-4 max-md:max-w-full">
//                   <div className="self-end max-w-full w-[718px] max-md:pr-5">
//                     <div className="flex gap-5 max-md:flex-col max-md:gap-0">
//                       <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
//                         <img
//                           loading="lazy"
//                           srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/27613f9b21bacf2b264489a5669ceed6a79763d8929972d8b6426edfb67c6020?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/27613f9b21bacf2b264489a5669ceed6a79763d8929972d8b6426edfb67c6020?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/27613f9b21bacf2b264489a5669ceed6a79763d8929972d8b6426edfb67c6020?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/27613f9b21bacf2b264489a5669ceed6a79763d8929972d8b6426edfb67c6020?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/27613f9b21bacf2b264489a5669ceed6a79763d8929972d8b6426edfb67c6020?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/27613f9b21bacf2b264489a5669ceed6a79763d8929972d8b6426edfb67c6020?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/27613f9b21bacf2b264489a5669ceed6a79763d8929972d8b6426edfb67c6020?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/27613f9b21bacf2b264489a5669ceed6a79763d8929972d8b6426edfb67c6020?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
//                           className="shrink-0 max-w-full aspect-[1.03] w-[123px] max-md:mt-9"
//                         />
//                       </div>
//                       <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
//                         <img
//                           loading="lazy"
//                           srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/78347f9ed962b5dfd0c67846ca094bebb2e7ffa41f11d0a2b601ce335a7ed91b?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/78347f9ed962b5dfd0c67846ca094bebb2e7ffa41f11d0a2b601ce335a7ed91b?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/78347f9ed962b5dfd0c67846ca094bebb2e7ffa41f11d0a2b601ce335a7ed91b?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/78347f9ed962b5dfd0c67846ca094bebb2e7ffa41f11d0a2b601ce335a7ed91b?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/78347f9ed962b5dfd0c67846ca094bebb2e7ffa41f11d0a2b601ce335a7ed91b?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/78347f9ed962b5dfd0c67846ca094bebb2e7ffa41f11d0a2b601ce335a7ed91b?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/78347f9ed962b5dfd0c67846ca094bebb2e7ffa41f11d0a2b601ce335a7ed91b?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/78347f9ed962b5dfd0c67846ca094bebb2e7ffa41f11d0a2b601ce335a7ed91b?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
//                           className="grow mt-28 w-full aspect-[1.16] max-md:mt-10"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <img
//                     loading="lazy"
//                     srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ea1a53629c339d840aeeaa1241967b7d2e6dfdaff275fa3cf314198d0d292206?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea1a53629c339d840aeeaa1241967b7d2e6dfdaff275fa3cf314198d0d292206?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea1a53629c339d840aeeaa1241967b7d2e6dfdaff275fa3cf314198d0d292206?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea1a53629c339d840aeeaa1241967b7d2e6dfdaff275fa3cf314198d0d292206?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea1a53629c339d840aeeaa1241967b7d2e6dfdaff275fa3cf314198d0d292206?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea1a53629c339d840aeeaa1241967b7d2e6dfdaff275fa3cf314198d0d292206?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea1a53629c339d840aeeaa1241967b7d2e6dfdaff275fa3cf314198d0d292206?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea1a53629c339d840aeeaa1241967b7d2e6dfdaff275fa3cf314198d0d292206?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
//                     className="mt-24 max-w-full aspect-[2.94] w-[272px] max-md:mt-10"
//                   />
//                   <img
//                     loading="lazy"
//                     srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1f6d114fd2dc31c4ada4572c15aa7f04164cb145be3cb68a48d45a9ae9731a7c?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f6d114fd2dc31c4ada4572c15aa7f04164cb145be3cb68a48d45a9ae9731a7c?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f6d114fd2dc31c4ada4572c15aa7f04164cb145be3cb68a48d45a9ae9731a7c?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f6d114fd2dc31c4ada4572c15aa7f04164cb145be3cb68a48d45a9ae9731a7c?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f6d114fd2dc31c4ada4572c15aa7f04164cb145be3cb68a48d45a9ae9731a7c?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f6d114fd2dc31c4ada4572c15aa7f04164cb145be3cb68a48d45a9ae9731a7c?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f6d114fd2dc31c4ada4572c15aa7f04164cb145be3cb68a48d45a9ae9731a7c?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f6d114fd2dc31c4ada4572c15aa7f04164cb145be3cb68a48d45a9ae9731a7c?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
//                     className="mt-14 ml-40 max-w-full aspect-[1.03] w-[120px] max-md:mt-10 max-md:ml-2.5"
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
//                 <div className="flex flex-col items-center px-5 max-md:max-w-full">
//                   <div className="flex gap-2 text-5xl font-semibold text-center leading-[60.9px] text-neutral-900 max-md:flex-wrap">
//                     <div>this </div>
//                     <div className="flex-auto">Applicaiton</div>
//                   </div>
//                   <div className="mt-12 text-base leading-7 text-center text-black max-md:mt-10 max-md:max-w-full">
//                     Fitness create ready Application for your business and
//                     Fitness powered website
//                   </div>
//                   <div className="flex gap-5 justify-center py-1.5 pr-20 pl-7 mt-20 max-w-full bg-white border border-gray-300 border-solid rounded-[47px] w-[956px] max-md:flex-wrap max-md:px-5 max-md:mt-10">
//                     <div className="my-auto text-sm text-neutral-500">
//                       Enter Your Mail...
//                     </div>
//                     <div className="justify-center px-7 py-6 text-base font-semibold leading-5 text-center text-white capitalize bg-violet-700 shadow-lg rounded-[30px] max-md:px-5">
//                       gET sTARTED
//                     </div>
//                   </div>
//                   <img
//                     loading="lazy"
//                     srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/37262cd7a1aed77b471b2db0d9268bc7899c82f1b1135f1b500274f6b7333593?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/37262cd7a1aed77b471b2db0d9268bc7899c82f1b1135f1b500274f6b7333593?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/37262cd7a1aed77b471b2db0d9268bc7899c82f1b1135f1b500274f6b7333593?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/37262cd7a1aed77b471b2db0d9268bc7899c82f1b1135f1b500274f6b7333593?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/37262cd7a1aed77b471b2db0d9268bc7899c82f1b1135f1b500274f6b7333593?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/37262cd7a1aed77b471b2db0d9268bc7899c82f1b1135f1b500274f6b7333593?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/37262cd7a1aed77b471b2db0d9268bc7899c82f1b1135f1b500274f6b7333593?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/37262cd7a1aed77b471b2db0d9268bc7899c82f1b1135f1b500274f6b7333593?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
//                     className="self-stretch mt-28 w-full aspect-[3.13] max-md:mt-10 max-md:max-w-full"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex z-10 flex-col self-end mt-0 mr-52 mb-3 max-w-full w-[408px] max-md:mt-0 max-md:mr-2.5">
//             <img
//               loading="lazy"
//               srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0e1365c9d2ac61f544e88118bdbd77758bd1e9302e6af8544c3dbc1832997e1e?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e1365c9d2ac61f544e88118bdbd77758bd1e9302e6af8544c3dbc1832997e1e?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e1365c9d2ac61f544e88118bdbd77758bd1e9302e6af8544c3dbc1832997e1e?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e1365c9d2ac61f544e88118bdbd77758bd1e9302e6af8544c3dbc1832997e1e?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e1365c9d2ac61f544e88118bdbd77758bd1e9302e6af8544c3dbc1832997e1e?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e1365c9d2ac61f544e88118bdbd77758bd1e9302e6af8544c3dbc1832997e1e?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e1365c9d2ac61f544e88118bdbd77758bd1e9302e6af8544c3dbc1832997e1e?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e1365c9d2ac61f544e88118bdbd77758bd1e9302e6af8544c3dbc1832997e1e?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
//               className="max-w-full aspect-[0.81] w-[272px]"
//             />
//             <img
//               loading="lazy"
//               srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/501cec48cafa06fca8713534bfeb8d45b35b8bc7fbf22770036357331d12bae7?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/501cec48cafa06fca8713534bfeb8d45b35b8bc7fbf22770036357331d12bae7?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/501cec48cafa06fca8713534bfeb8d45b35b8bc7fbf22770036357331d12bae7?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/501cec48cafa06fca8713534bfeb8d45b35b8bc7fbf22770036357331d12bae7?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/501cec48cafa06fca8713534bfeb8d45b35b8bc7fbf22770036357331d12bae7?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/501cec48cafa06fca8713534bfeb8d45b35b8bc7fbf22770036357331d12bae7?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/501cec48cafa06fca8713534bfeb8d45b35b8bc7fbf22770036357331d12bae7?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/501cec48cafa06fca8713534bfeb8d45b35b8bc7fbf22770036357331d12bae7?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
//               className="self-end mt-10 max-w-full aspect-[1.03] w-[120px]"
//             />
//           </div>
//         </div>
//         <div className="mt-14 w-full max-w-[1622px] max-md:mt-10 max-md:max-w-full">
//           <div className="flex gap-5 max-md:flex-col max-md:gap-0">
//             <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col px-5 mt-24 text-5xl font-semibold leading-[60.9px] max-md:mt-10">
//                 <div className="flex gap-px self-start text-xl font-medium leading-7">
//                   <div className="text-red-600"># Why</div>
//                   <div className="flex-auto text-neutral-900"> Choose App?</div>
//                 </div>
//                 <div className="flex gap-3.5 mt-8 text-neutral-900">
//                   <div className="grow">App is </div>
//                   <div className="flex flex-auto gap-1 self-start">
//                     <div className="grow">Available</div>
//                     <div> Free</div>
//                   </div>
//                 </div>
//                 <div className="mt-5 text-neutral-900">On Google Store</div>
//                 <div className="mt-11 text-base leading-7 text-slate-500 max-md:mt-10">
//                   Increase productivity with a simple to-do app. app for
//                 </div>
//                 <div className="mt-4 text-base leading-7 text-slate-500">
//                   managing your personal budgets
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full">
//               <div className="grow max-md:mt-10 max-md:max-w-full">
//                 <div className="flex gap-5 max-md:flex-col max-md:gap-0">
//                   <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
//                     <img
//                       loading="lazy"
//                       srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ab90c401fe760e291c7b4e281ea7cc6f1d892dd97a3bc676915d960c3398d3b9?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab90c401fe760e291c7b4e281ea7cc6f1d892dd97a3bc676915d960c3398d3b9?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab90c401fe760e291c7b4e281ea7cc6f1d892dd97a3bc676915d960c3398d3b9?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab90c401fe760e291c7b4e281ea7cc6f1d892dd97a3bc676915d960c3398d3b9?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab90c401fe760e291c7b4e281ea7cc6f1d892dd97a3bc676915d960c3398d3b9?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab90c401fe760e291c7b4e281ea7cc6f1d892dd97a3bc676915d960c3398d3b9?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab90c401fe760e291c7b4e281ea7cc6f1d892dd97a3bc676915d960c3398d3b9?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab90c401fe760e291c7b4e281ea7cc6f1d892dd97a3bc676915d960c3398d3b9?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
//                       className="grow mt-60 w-full aspect-[1.15] max-md:mt-10"
//                     />
//                   </div>
//                   <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
//                     <div className="flex justify-center items-center px-16 w-full bg-violet-700 max-md:px-5 max-md:max-w-full">
//                       <img
//                         loading="lazy"
//                         srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f29b41c9b31aa6b637a32f9001661fd6cfbab5cdc0640d9cfbb1a329aba8bd68?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f29b41c9b31aa6b637a32f9001661fd6cfbab5cdc0640d9cfbb1a329aba8bd68?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f29b41c9b31aa6b637a32f9001661fd6cfbab5cdc0640d9cfbb1a329aba8bd68?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f29b41c9b31aa6b637a32f9001661fd6cfbab5cdc0640d9cfbb1a329aba8bd68?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f29b41c9b31aa6b637a32f9001661fd6cfbab5cdc0640d9cfbb1a329aba8bd68?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f29b41c9b31aa6b637a32f9001661fd6cfbab5cdc0640d9cfbb1a329aba8bd68?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f29b41c9b31aa6b637a32f9001661fd6cfbab5cdc0640d9cfbb1a329aba8bd68?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f29b41c9b31aa6b637a32f9001661fd6cfbab5cdc0640d9cfbb1a329aba8bd68?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
//                         className="z-10 mt-0 max-w-full aspect-[0.95] w-[610px]"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center items-center px-16 py-20 mt-14 w-full bg-purple-50 max-w-[1781px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
//           <div className="mt-8 mb-32 w-full max-w-[1467px] max-md:mb-10 max-md:max-w-full">
//             <div className="flex gap-5 max-md:flex-col max-md:gap-0">
//               <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
//                 <div className="flex flex-col mt-4 max-md:mt-10 max-md:max-w-full">
//                   <div className="flex gap-px self-start text-xl font-medium leading-7">
//                     <div className="text-red-600"># Why</div>
//                     <div className="flex-auto text-neutral-900">
//                       {" "}
//                       Choose App?
//                     </div>
//                   </div>
//                   <div className="mt-8 text-5xl font-semibold leading-[60.9px] text-neutral-900 max-md:max-w-full">
//                     Best Graphic Interface Through
//                   </div>
//                   <div className="flex gap-4 mt-6 text-5xl font-semibold leading-[60.9px] text-neutral-900 max-md:flex-wrap">
//                     <div className="grow">Latest </div>
//                     <div className="flex flex-auto gap-1 max-md:flex-wrap">
//                       <div className="grow">Application</div>
//                       <div className="flex-auto"> Showing</div>
//                     </div>
//                   </div>
//                   <div className="flex gap-2 mt-16 max-md:flex-wrap max-md:mt-10">
//                     <div className="text-xl font-black leading-5 text-violet-700">
//                       
//                     </div>
//                     <div className="flex-auto text-xl leading-10 text-gray-900 text-opacity-70 max-md:max-w-full">
//                       {" "}
//                       The other hand we denounce with righteou indg ation and
//                     </div>
//                   </div>
//                   <div className="mt-6 text-xl leading-10 text-gray-900 text-opacity-70 max-md:max-w-full">
//                     dislike men who are so beguiled and demorali ed by the of
//                   </div>
//                   <div className="mt-6 text-xl leading-10 text-gray-900 text-opacity-70 max-md:max-w-full">
//                     pleasure of the moment.Dislike men who are so beguiled and
//                   </div>
//                   <div className="mt-6 text-xl leading-10 text-gray-900 text-opacity-70 max-md:max-w-full">
//                     demoraliz worlds ed by the charms of pleasure of the moment.
//                   </div>
//                   <div className="flex gap-4 mt-5 max-md:flex-wrap">
//                     <div className="flex-auto text-xl leading-10 text-gray-900 text-opacity-70 max-md:max-w-full">
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
//                     </div>
//                     <div className="text-xl font-black leading-5 text-violet-700">
//                       
//                     </div>
//                   </div>
//                   <div className="flex gap-5 justify-between mt-10 w-full max-md:flex-wrap max-md:max-w-full">
//                     <div className="flex gap-5">
//                       <img
//                         loading="lazy"
//                         srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/78ab4a55248832b4c6d0c511b9eb2649ee9aed5581f0f27e5c326bd14e3a9654?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/78ab4a55248832b4c6d0c511b9eb2649ee9aed5581f0f27e5c326bd14e3a9654?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/78ab4a55248832b4c6d0c511b9eb2649ee9aed5581f0f27e5c326bd14e3a9654?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/78ab4a55248832b4c6d0c511b9eb2649ee9aed5581f0f27e5c326bd14e3a9654?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/78ab4a55248832b4c6d0c511b9eb2649ee9aed5581f0f27e5c326bd14e3a9654?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/78ab4a55248832b4c6d0c511b9eb2649ee9aed5581f0f27e5c326bd14e3a9654?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/78ab4a55248832b4c6d0c511b9eb2649ee9aed5581f0f27e5c326bd14e3a9654?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/78ab4a55248832b4c6d0c511b9eb2649ee9aed5581f0f27e5c326bd14e3a9654?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
//                         className="shrink-0 aspect-[1.09] w-[93px]"
//                       />
//                       <div className="flex flex-col my-auto">
//                         <div className="text-xl font-semibold leading-6 text-neutral-900">
//                           Cameron Williamson
//                         </div>
//                         <div className="mt-4 text-base leading-7 text-indigo-900">
//                           Ui/Ux Designer
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex gap-0 self-end mt-8">
//                       <img
//                         loading="lazy"
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c7e0fd2cba45c7ac4e70f7b8a868999b02bccae71586991148dfec24c8fd924?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
//                         className="shrink-0 aspect-[1.09] w-[60px]"
//                       />
//                       <img
//                         loading="lazy"
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/29b853e8b91a878978cca43b5ab31dea2531b7f21b477e15fcbda051d5884624?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
//                         className="shrink-0 aspect-[1.09] w-[60px]"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
//                 <img
//                   loading="lazy"
//                   srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/847f8a9acb7df3f546402c162d54e33d2c718de265dd1f969fcea13185a0321b?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/847f8a9acb7df3f546402c162d54e33d2c718de265dd1f969fcea13185a0321b?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/847f8a9acb7df3f546402c162d54e33d2c718de265dd1f969fcea13185a0321b?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/847f8a9acb7df3f546402c162d54e33d2c718de265dd1f969fcea13185a0321b?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/847f8a9acb7df3f546402c162d54e33d2c718de265dd1f969fcea13185a0321b?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/847f8a9acb7df3f546402c162d54e33d2c718de265dd1f969fcea13185a0321b?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/847f8a9acb7df3f546402c162d54e33d2c718de265dd1f969fcea13185a0321b?apiKey=ad090e654a114eb4b43d2625c6bd6624&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/847f8a9acb7df3f546402c162d54e33d2c718de265dd1f969fcea13185a0321b?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
//                   className="grow w-full aspect-[0.91] max-md:mt-10 max-md:max-w-full"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex z-10 justify-center items-center px-16 w-full bg-blue-50 max-w-[1880px] max-md:px-5 max-md:max-w-full">
//           <div className="flex z-10 justify-center items-center px-16 py-20 -mt-20 mb-0 w-full bg-violet-700 rounded-xl max-w-[1471px] max-md:px-5 max-md:mb-2.5 max-md:max-w-full">
//             <div className="flex flex-col items-center mt-1.5 max-w-full w-[578px]">
//               <div className="text-2xl font-medium leading-7 text-center text-white">
//                 # Why Choose App?
//               </div>
//               <div className="mt-4 text-5xl font-bold text-center text-white leading-[57.6px] max-md:max-w-full max-md:text-4xl">
//                 Subscribed for Update
//               </div>
//               <div className="flex gap-5 justify-center self-stretch py-1.5 pr-3 pl-7 mt-14 bg-white border border-gray-300 border-solid rounded-[47px] max-md:flex-wrap max-md:pl-5 max-md:mt-10 max-md:max-w-full">
//                 <div className="flex-auto my-auto text-sm text-neutral-500">
//                   Enter Your Mail...
//                 </div>
//                 <div className="justify-center px-7 py-6 text-base font-semibold leading-5 text-center text-white capitalize bg-violet-700 shadow-lg rounded-[30px] max-md:px-5">
//                   gET sTARTED
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="shrink-0 self-end mt-0 max-w-full bg-blue-50 h-[184px] w-[1878px]" />
//         <div className="flex flex-col pt-20 w-full bg-blue-50 max-w-[1878px] max-md:max-w-full">
//           <div className="flex gap-5 justify-between items-start mt-6 max-w-full text-base leading-7 text-gray-700 w-[1195px] max-md:flex-wrap">
//             <div className="shrink-0 self-end mt-20 bg-violet-700 bg-opacity-10 h-[351px] rounded-[98.54px_76.46px_276.04px_248.96px] w-[103px] max-md:mt-10" />
//             <div className="flex flex-col leading-[187.5%]">
//               <div className="text-2xl font-bold leading-7 text-zinc-900">
//                 About Us
//               </div>
//               <div className="mt-14 max-md:mt-10">
//                 The world�s first and largest digital marketplace
//               </div>
//               <div className="mt-4">
//                 for crypto collectibles and non-fungible tokens
//               </div>
//               <div className="mt-3.5">
//                 (NFTs). Buy, sell, and discover exclusive digital
//               </div>
//               <div className="mt-4">items.</div>
//               <div className="flex gap-3 mt-11 font-medium leading-[169%] max-md:mt-10">
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b6f1f5813febbaa12f68ad450103e360c50a2ec5a7dbac4109c0c8691d3d008?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
//                   className="shrink-0 w-10 aspect-square"
//                 />
//                 <div className="flex-auto my-auto">
//                   254 Lillian Blvd, Holbrook
//                 </div>
//               </div>
//               <div className="flex gap-3 mt-5 font-medium whitespace-nowrap leading-[169%]">
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd39065bbdd2041c24cdcf7d3fb57f2cde5a982d454c54a2e93dae97dfeea52e?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
//                   className="shrink-0 w-10 aspect-square"
//                 />
//                 <div className="flex-auto my-auto">1-800-654-3210</div>
//               </div>
//             </div>
//             <div className="flex flex-col">
//               <div className="text-2xl font-bold leading-7 text-zinc-900">
//                 Marketplace
//               </div>
//               <div className="mt-12 max-md:mt-10">Collectibles</div>
//               <div className="mt-8">Domain Names</div>
//               <div className="mt-8">Photography</div>
//               <div className="mt-8">Sports</div>
//               <div className="mt-7">Trading Cards</div>
//               <div className="mt-7">Utility</div>
//             </div>
//             <div className="flex flex-col">
//               <div className="text-2xl font-bold leading-7 text-zinc-900">
//                 My Account
//               </div>
//               <div className="mt-12 max-md:mt-10">Author</div>
//               <div className="mt-8">How it Works</div>
//               <div className="mt-9">Create Item</div>
//               <div className="mt-8">Author Profile</div>
//               <div className="mt-8">Terms and conditions</div>
//               <div className="mt-8">Collection</div>
//             </div>
//           </div>
//           <div className="flex justify-center items-center px-16 py-4 text-sm leading-4 text-violet-700 whitespace-nowrap bg-zinc-900 bg-opacity-10 max-md:px-5 max-md:max-w-full">
//             <div className="flex gap-5 justify-between w-full max-w-[1314px] max-md:flex-wrap max-md:max-w-full">
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/74d5193f4438e739547d9d5acca41634beea1bbc90c0eb674bfc96fe7392c217?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
//                 className="shrink-0 max-w-full aspect-[3.13] w-[132px]"
//               />
//               <div className="flex gap-3 self-start">
//                 <div className="justify-center items-center px-4 w-10 h-10 rounded-3xl bg-stone-300 bg-opacity-30">
//                   
//                 </div>
//                 <div className="justify-center items-center px-3.5 w-10 h-10 rounded-3xl bg-stone-300 bg-opacity-30">
//                   
//                 </div>
//                 <div className="justify-center items-center px-3.5 w-10 h-10 rounded-3xl bg-stone-300 bg-opacity-30">
//                   
//                 </div>
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/f448a66508e11b8c4e40f4622a1d9a41855a7e0bf59a05334d66e3391b417777?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
//                   className="shrink-0 w-10 aspect-square"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
export default App;
