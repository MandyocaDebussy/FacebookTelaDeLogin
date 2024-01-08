/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'blueface': '#0866FF',
                'greenface': '#42B72A',
                'grayface': '#F0F2F5',
            },
            spacing: {
                '380': '380px',
                '580': '580px',
                '680': '680px',
            }
        },
        plugins: [],
    }
}