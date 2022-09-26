/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   daisyui: {
      themes: [
         {
            mytheme: {
               primary: '#546ff7',

               secondary: '#FFE0B3',

               accent: '#f4de61',

               neutral: '#1C2B35',

               'base-100': '#FCFCFD',

               info: '#2E83EA',

               success: '#69E29E',

               warning: '#F0B128',

               error: '#FB282C',
            },
         },
      ],
   },
   plugins: [require('daisyui')],
};
