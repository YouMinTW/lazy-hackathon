import compress from "vite-plugin-compress";
import viteImagemin from "vite-plugin-imagemin";
// https://github.com/Lidemy/lazy-hackathon/issues/7
// https://github.com/JonasKruckenberg/imagetools
// https://github.com/stafyniaksacha/vite-plugin-fonts
// https://github.com/alloc/vite-plugin-compress
// https://github.com/anncwb/vite-plugin-imagemin
// https://github.com/vitejs/awesome-vite#plugins
export default () => {
  return {
    plugins: [
      //   compress(),
      viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        webp: {
          quality: 75,
        },
        mozjpeg: {
          quality: 65,
        },
        pngquant: {
          quality: [0.65, 0.9],
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              removeViewBox: false,
            },
            {
              removeEmptyAttrs: false,
            },
          ],
        },
      }),
    ],
  };
};
