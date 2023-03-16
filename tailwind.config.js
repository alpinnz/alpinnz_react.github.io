/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                veryDarkGrayishViolet: '#595260',
            },
            fontFamily: {
                poppins: ['Sora', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
