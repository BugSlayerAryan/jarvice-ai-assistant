// import React from 'react';
// import Jarvice from '../../assets/Jarvice.png';

// export default function WelcomeState() {
//   return (
//     <section
//       className="relative flex h-full w-full items-center justify-center overflow-hidden px-4 sm:px-8"
//       aria-labelledby="welcome-heading"
//     >
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute left-1/2 top-[42%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
//         <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
//         <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
//       </div>

//       <div className="relative z-10 mx-auto flex w-full max-w-5xl -translate-y-20 flex-col items-center text-center sm:-translate-y-16 md:-translate-y-14">
//         <div className="h-48 w-56 overflow-hidden sm:h-56 sm:w-64 md:h-64 md:w-72 lg:h-72 lg:w-80 xl:h-80 xl:w-96">
//           <img
//             src={Jarvice}
//             alt="Jarvice"
//             className="h-full w-full scale-125 object-contain object-center"
//           />
//         </div>

//         <h1
//           id="welcome-heading"
//           className="-mt-6 mx-auto max-w-[360px] text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:max-w-2xl sm:text-5xl md:-mt-8 md:text-6xl lg:-mt-10 lg:text-[56px]"
//         >
//           What can I help you build today?
//         </h1>
//       </div>
//     </section>
//   );
// }


// import React from 'react';
// import Jarvice from '../../assets/Jarvice.png';

// export default function WelcomeState() {
//   return (
//     <section
//       className="relative flex h-full w-full items-center justify-center overflow-hidden px-4 pb-20 pt-4 sm:px-8 sm:pb-0 sm:pt-0"
//       aria-labelledby="welcome-heading"
//     >
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute left-1/2 top-[44%] h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl sm:top-[44%] sm:h-[520px] sm:w-[520px]" />
//         <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl sm:h-80 sm:w-80" />
//         <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl sm:h-80 sm:w-80" />
//       </div>

//       <div className="relative z-10 mx-auto flex w-full max-w-5xl -translate-y-2 flex-col items-center text-center sm:-translate-y-6 md:-translate-y-8 lg:-translate-y-10">
//         <div className="h-42 w-52 overflow-hidden sm:h-56 sm:w-64 md:h-64 md:w-72 lg:h-72 lg:w-80 xl:h-80 xl:w-96">
//           <img
//             src={Jarvice}
//             alt="Jarvice"
//             className="h-full w-full scale-125 object-contain object-center"
//           />
//         </div>

//         <h1
//           id="welcome-heading"
//           className="-mt-3 mx-auto max-w-[330px] text-[34px] font-semibold leading-[1.08] tracking-tight text-white sm:max-w-2xl sm:text-5xl md:-mt-4 md:text-6xl lg:-mt-5 lg:text-[56px]"
//         >
//           What can I help you build today?
//         </h1>
//       </div>
//     </section>
//   );
// }



import React from 'react';
import Jarvice from '../../assets/Jarvice.png';

export default function WelcomeState({ keyboardOpen = false }) {
  return (
    <section
      className="relative flex h-full w-full items-center justify-center overflow-hidden px-4 sm:px-8"
      aria-labelledby="welcome-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[44%] h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl sm:top-[44%] sm:h-[520px] sm:w-[520px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl sm:h-80 sm:w-80" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl sm:h-80 sm:w-80" />
      </div>

      <div
        className={[
          'relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center transition-all duration-200',
          keyboardOpen
            ? 'translate-y-0'
            : '-translate-y-8 sm:-translate-y-6 md:-translate-y-8 lg:-translate-y-10',
        ].join(' ')}
      >
        <div
          className={[
            'overflow-hidden transition-all duration-200',
            keyboardOpen
              ? 'h-32 w-40'
              : 'h-44 w-52 sm:h-56 sm:w-64 md:h-64 md:w-72 lg:h-72 lg:w-80 xl:h-80 xl:w-96',
          ].join(' ')}
        >
          <img
            src={Jarvice}
            alt="Jarvice"
            className="h-full w-full scale-125 object-contain object-center"
          />
        </div>

        <h1
          id="welcome-heading"
          className={[
            'mx-auto font-semibold leading-[1.08] tracking-tight text-white transition-all duration-200',
            keyboardOpen
              ? '-mt-2 max-w-[300px] text-[30px]'
              : '-mt-3 max-w-[330px] text-[34px] sm:max-w-2xl sm:text-5xl md:-mt-4 md:text-6xl lg:-mt-5 lg:text-[56px]',
          ].join(' ')}
        >
          What can I help you build today?
        </h1>
      </div>
    </section>
  );
}