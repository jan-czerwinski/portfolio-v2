module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {

        extend: {
            transitionProperty: {
                width: "width"
            },
            fontFamily: {
                sans: ['Space Mono', 'monospace'],
            },
            padding: {
                full: '100%',
                '1/2': '50%',
            },
            height: {
                full: '100%',
            },
        },
    },
    plugins: [],
};