// import React from 'react';

// export default function WelcomeState() {
//   return (
//     <section
//       className="relative flex h-full w-full items-center justify-center overflow-y-auto px-4 py-8 sm:px-8 lg:px-8"
//       aria-labelledby="welcome-heading"
//     >
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
//         <div className="absolute bottom-10 left-6 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
//         <div className="absolute bottom-10 right-6 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
//       </div>

//       <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center">
//         <div className="text-center">
//           <h1
//             id="welcome-heading"
//             className="mx-auto max-w-[20rem] text-3xl font-semibold leading-tight tracking-tight text-white sm:max-w-xl sm:text-4xl lg:max-w-none lg:text-5xl"
//           >
//             What can I help you build today?
//           </h1>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import Jarvice from '../../assets/Jarvice.png';

export default function WelcomeState() {
  return (
    <section
      className="relative flex h-full w-full items-center justify-center overflow-hidden px-4 sm:px-8"
      aria-labelledby="welcome-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[42%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl -translate-y-20 flex-col items-center text-center sm:-translate-y-16 md:-translate-y-14">
        <div className="h-48 w-56 overflow-hidden sm:h-56 sm:w-64 md:h-64 md:w-72 lg:h-72 lg:w-80 xl:h-80 xl:w-96">
          <img
            src={Jarvice}
            alt="Jarvice"
            className="h-full w-full scale-125 object-contain object-center"
          />
        </div>

        <h1
          id="welcome-heading"
          className="-mt-6 mx-auto max-w-[360px] text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:max-w-2xl sm:text-5xl md:-mt-8 md:text-6xl lg:-mt-10 lg:text-[56px]"
        >
          What can I help you build today?
        </h1>
      </div>
    </section>
  );
}



