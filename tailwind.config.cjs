const a = import('./tailwind/tailwind-plugin-debug-screens.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [
        a,
        //require('./tailwind/tailwind-plugin-debug-screens.cjs'),
        require('./tailwind/tailwind-plugin-data-state.cjs'),
    ],
};
