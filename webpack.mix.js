const mix = require('laravel-mix');
mix.ts("resources/js/index.tsx", "public/js/app.js").react()
.postCss('resources/css/app.css', 'public/css', [require('tailwindcss'),])
