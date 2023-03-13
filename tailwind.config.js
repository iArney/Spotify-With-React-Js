/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "music-logo": "url('https://cdn.pixabay.com/photo/2014/05/26/09/09/icon-354293__340.png')",
                "music-bg": "url('https://media.istockphoto.com/id/861140074/photo/3d-party-sign-blank.jpg?s=612x612&w=0&k=20&c=Xdb8IS-2nvi6t9_vQEjDRcG1GEwT4xYtBTjMfO3iB64=')",
            },
        },
        plugins: [],
    },
};