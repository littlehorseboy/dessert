# 【網頁排版PK戰】甜點電商

[demo](https://littlehorseboy.github.io/dessert/dist/)

[The F2E - 前端修練精神時光屋 - FB粉絲團](https://zh-tw.facebook.com/groups/173311386703334/)

[網頁切版 PK 戰 - FB貼文](https://www.facebook.com/groups/173311386703334/permalink/247893602578445/)

[設計稿](https://lihi.cc/LAfsC)

[圖片來源](https://unsplash.com/collections/3141730/desserts_bright)

嘗試了用 webpack 打包所有的東西來開發

排版上用了 material-components-web 的 Layout Grid 以及 css flex

所有的 css 都是在 bundle.js 載入的，會明顯看出網頁樣式慢一步才開始讀取，日後需改善 :sweat_smile:

也還不懂怎麼自己把 html 給組件化

每個 html 檔都是獨立的都有自己的進入點 (webpack.config.js 的設定)

* material-components-web

* normalize-scss

* sass

* webpack
