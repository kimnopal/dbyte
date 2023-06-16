import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },

            colors: {
                'primary': '#0E0E0E',
                'secondary': '#838383'
            },

        },

        plugins: [
            forms,
            // plugin(function ({ addUtilities }) {
            //     addUtilities({
            //         /* Hide scrollbar for Chrome, Safari and Opera */
            //         '.no-scrollbar::-webkit-scrollbar': {
            //             'display': 'none',
            //         },
            //         /* Hide scrollbar for IE, Edge and Firefox */
            //         '.no-scrollbar': {
            //             '-ms-overflow-style': 'none',  /* IE and Edge */
            //             'scrollbar-width': 'none'  /* Firefox */
            //         }
            //     })
            // })
        ],
    }
};

