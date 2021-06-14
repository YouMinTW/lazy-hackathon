# 新拖延運動黑客松

## 介紹

網站連結：[GitHub Page](https://lidemy.github.io/lazy-hackathon/)

![visual](https://i.imgur.com/sb1m6XB.png)

此網站是 [程式導師實驗計畫第三期](https://github.com/Lidemy/mentor-program-3rd) 第二十週的作業，如果你覺得網站很卡很肥大，沒錯你是對的，因為我們故意把這個網站做得這麼卡。

現在呢，你要來負責最佳化這個網站，在「不動內容」的情形下來調整，意思就是說網頁看起來要「長得一模一樣」，把圖片變黑白、刪減文字或是更動排版都是不允許的，但刪減多餘的 HTML、CSS 和 JS 是 ok 的，只要保證網頁看起來一樣就行了，原始碼怎麼動隨便你，總之目標是使網站的載入速度變快。

這只是一個靜態網站，你可以 fork 到自己的 GitHub 去然後用 GitHub Page 來部署，也可以部署到自己的 Server 去並且額外做一些伺服器端的最佳化。

部署上去之後可以使用 [WebPageTest](https://www.webpagetest.org/) 這個網站來測試你的網站速度為何。（測試地點請統一選擇 Singapore - EC2），Browser 為 Chrome。

完成以後可以在這個 repo 開一個 [Issue](https://github.com/Lidemy/lazy-hackathon/issues/new/choose) 來記錄自己的結果（[範例](https://github.com/Lidemy/lazy-hackathon/issues/1)）。也可以在 Issues 裡面看到其他人的報告，看看別人怎麼做的，順便偷學個幾招。

若是你沒有任何靈感，可參考 [web.dev](https://web.dev/) 或是 [Website Performance Optimization](https://www.udacity.com/course/website-performance-optimization--ud884)

## 關於

此專案由 [@yakim-shu](https://github.com/yakim-shu) 負責製作，十分感謝。

github actions lighthouse https://github.com/GoogleChrome/lighthouse-ci

hot reload https://github.com/zaydek/esbuild-hot-reload
build script https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/scripts/build.js

remove unused javascript

remove unused cdn
https://www.wpbeginner.com/beginners-guide/speed-wordpress-save-images-optimized-web/

compress
https://tinyjpg.com/
resize
https://resizeimage.net/
cdn

lazy load

<picture> for different breakpoint

https://s.itho.me/modernweb/2020/Slides/d502.pdf
https://cythilya.github.io/2018/07/30/image-optimization/
https://medium.com/starbugs/%E4%BB%8A%E6%99%9A-%E6%88%91%E6%83%B3%E4%BE%86%E9%BB%9E-web-%E5%89%8D%E7%AB%AF%E6%95%88%E8%83%BD%E5%84%AA%E5%8C%96%E5%A4%A7%E8%A3%9C%E5%B8%96-e1a5805c1ca2

chokidar, live-server 跟 sass 如何整合？

esbuild 沒 sass plugin 沒 css purify 沒 html minify

esbuild 跟 gulp? 很難搭?

改用 webpack ?

webpack failed at scss url loader
