/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "eleventy-plugin-pwa"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6113e5f84588a6e4ac6d6a5f1687910c"
  },
  {
    "url": "a-inovacao-da-solidao/index.html",
    "revision": "9a8742a5ea4dbf92aa6297988a0143a3"
  },
  {
    "url": "about-me-servico-gratuito-para-quem-precisa-somente-de-uma-pagina-sobre-si/index.html",
    "revision": "1740ddd59f883ebf32fa1aa41f782bcf"
  },
  {
    "url": "about/index.html",
    "revision": "36b15b147eb634e7febc7135a736ec9c"
  },
  {
    "url": "blog/index.html",
    "revision": "5c674853ca5baec228a97d92e12da507"
  },
  {
    "url": "contato/index.html",
    "revision": "12efb8096be0b062bef4868a14872378"
  },
  {
    "url": "css-do-odeio-essa-m-a-deixa-comigo/index.html",
    "revision": "bb91fa4bd45032721e191094ee70827d"
  },
  {
    "url": "css/_variables.css",
    "revision": "bb3321e8df7b64315173c9d115adb5bb"
  },
  {
    "url": "css/components/_base.css",
    "revision": "af3bf8876e6fe0665602690f26bfc4d9"
  },
  {
    "url": "css/components/_code-highlight.css",
    "revision": "c97ce8e617ce99fa77c4ab9f1196249c"
  },
  {
    "url": "css/components/_header.css",
    "revision": "2b6f001e8e226b7ce643fe03a9af2584"
  },
  {
    "url": "css/components/_images.css",
    "revision": "a61b90e3dda4f2b26fbc3ceb006800c0"
  },
  {
    "url": "css/components/_links.css",
    "revision": "20e6a2bc1be67a7d4ad053356b818556"
  },
  {
    "url": "css/components/_nav.css",
    "revision": "f647932f64d7f3c7942a93dbc5106ce8"
  },
  {
    "url": "css/components/_posts-list.css",
    "revision": "1ff1c56cd33fcba7406b9ba9b569801d"
  },
  {
    "url": "css/components/_tags.css",
    "revision": "982f12e9dcbe355dc9ca2271e6e2f6d6"
  },
  {
    "url": "css/index.css",
    "revision": "4a5a41bd340b72858ccb8946672bc63f"
  },
  {
    "url": "css/prism-darcula.css",
    "revision": "883cb82de4a824f211c0f02b77cbf8dc"
  },
  {
    "url": "dojo-sp-um-grupo-de-coding-dojo-dinamico-e-amistoso-na-terra-da-garoa/index.html",
    "revision": "246fb3ead596f12fa61239cb418be840"
  },
  {
    "url": "fiap-x-um-podcast-sobre-tecnologia-da-fiap/index.html",
    "revision": "f6b5a43a14feb3d03905bf47d7c4e4d4"
  },
  {
    "url": "git-sistema-descentralizado-de-controle-de-versoes/index.html",
    "revision": "8bafa8a282ef272c6ccd90f3ad26ae3f"
  },
  {
    "url": "git-trabalhando-com-um-repositorio-localmente/index.html",
    "revision": "1c52213fce913b24d3a2d6cd3a5b9fa2"
  },
  {
    "url": "git-trabalhando-com-um-repositorio-remoto-e-github/index.html",
    "revision": "9dd2327ef52f3e330c2a74875b054313"
  },
  {
    "url": "hack-n-cast-um-podcast-brasileiro-sobre-cultura-hacker/index.html",
    "revision": "b8f4d09cc5dbbe3fe992e949bffac39c"
  },
  {
    "url": "img/192x192.jpg",
    "revision": "eae25889d8705ed3399a9137c2aa6182"
  },
  {
    "url": "img/32x32.jpg",
    "revision": "935732948c3d2915930f08e63efb7b42"
  },
  {
    "url": "img/apple-touch.jpg",
    "revision": "62636c0fbdb6aecb90445037d44675eb"
  },
  {
    "url": "img/m-tile.jpg",
    "revision": "bd36b4eceb4e15a9d13c38ffaa5c95d2"
  },
  {
    "url": "img/uploads/2017/10/1-VC-J-0V3pZj6m2L4HwyvMQ-150x150.gif",
    "revision": "70bdfcaeb98f51b43138f3e84577aacf"
  },
  {
    "url": "img/uploads/2017/10/1-VC-J-0V3pZj6m2L4HwyvMQ-300x179.gif",
    "revision": "676cb82f5c7855d4b1de73421b86b5ad"
  },
  {
    "url": "img/uploads/2018/04/19983610_1944690089107544_5110083536341221085_o-min-100x100.jpg",
    "revision": "c5f348b9050353c803e29f15b146d48b"
  },
  {
    "url": "img/uploads/2018/04/19983610_1944690089107544_5110083536341221085_o-min-1024x615.jpg",
    "revision": "38e17ec7b8884eb046cbb28bf76723d1"
  },
  {
    "url": "img/uploads/2018/04/19983610_1944690089107544_5110083536341221085_o-min-150x150.jpg",
    "revision": "795b556a73ef772463bac0ae2927ea48"
  },
  {
    "url": "img/uploads/2018/04/19983610_1944690089107544_5110083536341221085_o-min-300x180.jpg",
    "revision": "11360359178e2b6d2b83edb1a542e61e"
  },
  {
    "url": "img/uploads/2018/04/19983610_1944690089107544_5110083536341221085_o-min-768x461.jpg",
    "revision": "cd98d4b62c05cfb40db21817d649497a"
  },
  {
    "url": "img/uploads/2018/04/19983610_1944690089107544_5110083536341221085_o-min.jpg",
    "revision": "e2aeeaef43ac4c0dbaf6a26bab2d9cf7"
  },
  {
    "url": "img/uploads/2018/04/creativosbr-baiana-em-são-paulo-opinião-min-150x150.jpg",
    "revision": "858a62a122b64556482b0644e9c038fa"
  },
  {
    "url": "img/uploads/2018/04/creativosbr-baiana-em-são-paulo-opinião-min-300x225.jpg",
    "revision": "2c9097f0204f55fd8ebba6120d01b449"
  },
  {
    "url": "img/uploads/2018/04/creativosbr-baiana-em-são-paulo-opinião-min-740x430.jpg",
    "revision": "c7bffbcc29b8b3355c24a1ff56fa28e7"
  },
  {
    "url": "img/uploads/2018/04/creativosbr-baiana-em-são-paulo-opinião-min-768x576.jpg",
    "revision": "be35a5921b985d3fb77e842d69dab7a5"
  },
  {
    "url": "img/uploads/2018/04/creativosbr-baiana-em-são-paulo-opinião-min-800x600.jpg",
    "revision": "104430756fddc08cb612368cc48563fa"
  },
  {
    "url": "img/uploads/2018/04/creativosbr-baiana-em-são-paulo-opinião-min.jpg",
    "revision": "95da2f4be8212c1cfb2c5290d85bf46f"
  },
  {
    "url": "img/uploads/2018/04/cropped-19983610_1944690089107544_5110083536341221085_o-min-1-1024x427.jpg",
    "revision": "b999ba916b875781ea7fb8282e9d27cc"
  },
  {
    "url": "img/uploads/2018/04/cropped-19983610_1944690089107544_5110083536341221085_o-min-1-1100x458.jpg",
    "revision": "b17570e66388824f637e64d24a42e27b"
  },
  {
    "url": "img/uploads/2018/04/cropped-19983610_1944690089107544_5110083536341221085_o-min-1-150x150.jpg",
    "revision": "dde39680d7436cdfb6aa555fc9c09353"
  },
  {
    "url": "img/uploads/2018/04/cropped-19983610_1944690089107544_5110083536341221085_o-min-1-300x125.jpg",
    "revision": "027b6c37d8e5a3220860ef5c06b29894"
  },
  {
    "url": "img/uploads/2018/04/cropped-19983610_1944690089107544_5110083536341221085_o-min-1-740x430.jpg",
    "revision": "652029f2d282245b050f736c112438f4"
  },
  {
    "url": "img/uploads/2018/04/cropped-19983610_1944690089107544_5110083536341221085_o-min-1-768x320.jpg",
    "revision": "a7492a21f3813bec1dfed70c9382feb8"
  },
  {
    "url": "img/uploads/2018/04/cropped-19983610_1944690089107544_5110083536341221085_o-min-1.jpg",
    "revision": "108c5826d15bc56d0c9986c0735e2435"
  },
  {
    "url": "img/uploads/2018/04/cropped-19983610_1944690089107544_5110083536341221085_o-min-1024x204.jpg",
    "revision": "9ceb9b50bcf1824dc32d183e676b9b68"
  },
  {
    "url": "img/uploads/2018/04/cropped-19983610_1944690089107544_5110083536341221085_o-min-1100x219.jpg",
    "revision": "024beb132eb05903fe91d5ea9636dd73"
  },
  {
    "url": "img/uploads/2018/04/cropped-19983610_1944690089107544_5110083536341221085_o-min-1440x300.jpg",
    "revision": "5e4537a3641d45030cfc0a8b8337a185"
  },
  {
    "url": "img/uploads/2018/04/cropped-19983610_1944690089107544_5110083536341221085_o-min-150x150.jpg",
    "revision": "5bbd9919c5f1a636b93fa540aa247d0e"
  },
  {
    "url": "img/uploads/2018/04/cropped-19983610_1944690089107544_5110083536341221085_o-min-300x60.jpg",
    "revision": "1def22317248d80b1258d849970b2a37"
  },
  {
    "url": "img/uploads/2018/04/cropped-19983610_1944690089107544_5110083536341221085_o-min-740x300.jpg",
    "revision": "1750dd5171b96200744254c1214b1639"
  },
  {
    "url": "img/uploads/2018/04/cropped-19983610_1944690089107544_5110083536341221085_o-min-768x153.jpg",
    "revision": "56289c88af51a6e185c178d9c10978bc"
  },
  {
    "url": "img/uploads/2018/04/cropped-19983610_1944690089107544_5110083536341221085_o-min.jpg",
    "revision": "cc19d0c3005ba76b0a7d21dc70cec4dc"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-1-100x100.jpg",
    "revision": "ad74135e2e4243acb7117d080d14517e"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-1-150x150.jpg",
    "revision": "b8e8d43c8cd398c55989a219301bf047"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-1-180x180.jpg",
    "revision": "c8c2162ea2bb593e62d7f4ffcf8d9d16"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-1-192x192.jpg",
    "revision": "044171c16c940bbdb7c1836bc3b14ebc"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-1-270x270.jpg",
    "revision": "68b5ae9403fa8195cced8d1855dcc85a"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-1-300x300.jpg",
    "revision": "39d3d9d2b93c9d0145b04f5ac27ea82e"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-1-32x32.jpg",
    "revision": "e210b8a5e6899de5c73ab014f360a16a"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-1.jpg",
    "revision": "a23206135342f7fed14d2ad13f5a7572"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-100x100.jpg",
    "revision": "a89fe8c9ea7965bc658e2857024fee6b"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-150x150.jpg",
    "revision": "dfbb4f6063b8fa2a9eba3bc8d2a17bed"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-2-100x100.jpg",
    "revision": "c314be68e9df4cc34d0ae668d1af64eb"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-2-150x150.jpg",
    "revision": "76d2d97c7e6808ebd92e7dd3735d346f"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-2.jpg",
    "revision": "7315e96d669a8c0271e3bf64572780c8"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-3-1024x205.jpg",
    "revision": "e6b5d4a465d2854b45129f49b1b38699"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-3-1100x220.jpg",
    "revision": "50bc9541a78caeea02ea20271fcfcb9a"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-3-1440x300.jpg",
    "revision": "407bcb60a16c2d434bf1c2f1b5b3b608"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-3-150x150.jpg",
    "revision": "381b6ef9c466f413320975934ed2918c"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-3-300x60.jpg",
    "revision": "92b47cbe2eb2420fd469c9e17cc033bb"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-3-740x300.jpg",
    "revision": "8b9de2b580665df5162b096f5b0c8f68"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-3-768x154.jpg",
    "revision": "598f27ab0e8f4757c652d80d04a5233c"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-3.jpg",
    "revision": "698f752baec7c0d7b44008a8824fb167"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-4-150x150.jpg",
    "revision": "ec2e69c44e77bcda3ef1e71af79847f4"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-4.jpg",
    "revision": "14023e29af386ef5ff01c3eea176370a"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2.jpg",
    "revision": "677eb2129abdabbf4aca9a2d98c8c2a0"
  },
  {
    "url": "img/uploads/2018/04/Fresh-Paint-2015.04.08-01.03.42-2-100x100.jpg",
    "revision": "fc7ef903579ece12ddbc2426aa6b62c3"
  },
  {
    "url": "img/uploads/2018/04/Fresh-Paint-2015.04.08-01.03.42-2-150x150.jpg",
    "revision": "f20649e1eaef9c99d792648dc1f92302"
  },
  {
    "url": "img/uploads/2018/04/Fresh-Paint-2015.04.08-01.03.42-2-300x300.jpg",
    "revision": "5b93b5b09ede4450d199bcedde49e43d"
  },
  {
    "url": "img/uploads/2018/04/Fresh-Paint-2015.04.08-01.03.42-2.jpg",
    "revision": "3c6f72ff200728446c55502fbcd84b29"
  },
  {
    "url": "img/uploads/2018/05/Desenho-sem-título-150x150.png",
    "revision": "0b308e903f635c1baa8a78cf4bcb155c"
  },
  {
    "url": "img/uploads/2018/05/Desenho-sem-título-300x150.png",
    "revision": "2c6e70e074e3eeb83f3f876ccc31546e"
  },
  {
    "url": "img/uploads/2018/05/Desenho-sem-título-50x50.png",
    "revision": "5bac0ca815f05a17aa1263314961d4a7"
  },
  {
    "url": "img/uploads/2018/05/Desenho-sem-título-740x430.png",
    "revision": "441867aeb77b957e4b7a8e79945f9ffe"
  },
  {
    "url": "img/uploads/2018/05/Desenho-sem-título-768x384.png",
    "revision": "06bcdd26620b50acc895bbc576bb49cd"
  },
  {
    "url": "img/uploads/2018/05/Desenho-sem-título.png",
    "revision": "63e047bca4fbd29656cb195afa74cec8"
  },
  {
    "url": "img/uploads/2018/05/vejito20894129-1100x1432.jpg",
    "revision": "94d4c4efb5da791b2ec3b6d7e5396d6f"
  },
  {
    "url": "img/uploads/2018/05/vejito20894129-1440x600.jpg",
    "revision": "bc72ff4788d295ea6f38c335168853b2"
  },
  {
    "url": "img/uploads/2018/05/vejito20894129-150x150.jpg",
    "revision": "aa3cce2c78bb92c31772f61987395884"
  },
  {
    "url": "img/uploads/2018/05/vejito20894129-230x300.jpg",
    "revision": "b1149c33fd15884ce36db8967070e90e"
  },
  {
    "url": "img/uploads/2018/05/vejito20894129-740x430.jpg",
    "revision": "3cf31de75dcb29acf72c8f3b652c5201"
  },
  {
    "url": "img/uploads/2018/05/vejito20894129-768x1000.jpg",
    "revision": "b4eac0d15ba35bd2615be95400035461"
  },
  {
    "url": "img/uploads/2018/05/vejito20894129-786x1024.jpg",
    "revision": "b5da47e4bb0c28af4ae348ae35486674"
  },
  {
    "url": "img/uploads/2018/05/vejito20894129.jpg",
    "revision": "20e9c69025945c233327e4f59ceb5e8a"
  },
  {
    "url": "img/uploads/2018/08/1-6FyyUhdUkfW77MDfC1BgUA-150x150.png",
    "revision": "7c4f48310556c09341bfb6e5c084ae0d"
  },
  {
    "url": "img/uploads/2018/08/1-6FyyUhdUkfW77MDfC1BgUA-300x150.png",
    "revision": "e34643e93207e714e1c3aeca325471fb"
  },
  {
    "url": "img/uploads/2018/08/1-6FyyUhdUkfW77MDfC1BgUA-740x430.png",
    "revision": "a45dc164de0d9f9e7df20886d374d4c6"
  },
  {
    "url": "img/uploads/2018/08/1-6FyyUhdUkfW77MDfC1BgUA-768x384.png",
    "revision": "f226c9ccb36746a1430415fb2528d293"
  },
  {
    "url": "img/uploads/2018/08/1-6FyyUhdUkfW77MDfC1BgUA.png",
    "revision": "cccf49732af0b8f9cc04e284f1ab3107"
  },
  {
    "url": "img/uploads/2018/08/1-a-U4iD2KwHC3VXFuNDhTxg-150x150.png",
    "revision": "2c0d58839393f30a696a9a0508891376"
  },
  {
    "url": "img/uploads/2018/08/1-a-U4iD2KwHC3VXFuNDhTxg-300x160.png",
    "revision": "23a2fd373ee4057e778bd4d8797a9a6d"
  },
  {
    "url": "img/uploads/2018/08/1-a-U4iD2KwHC3VXFuNDhTxg-740x426.png",
    "revision": "1bb740cdd2bd5f53b36e8a02bfc82a96"
  },
  {
    "url": "img/uploads/2018/08/1-a-U4iD2KwHC3VXFuNDhTxg-768x409.png",
    "revision": "a3e4aeede400e656555fc0d3c6491310"
  },
  {
    "url": "img/uploads/2018/08/1-a-U4iD2KwHC3VXFuNDhTxg.png",
    "revision": "c510f8d73d03fea3d24ba03b9581c9dd"
  },
  {
    "url": "img/uploads/2018/08/Inkedamor-odio_LI-150x150.jpg",
    "revision": "52c1fec8b6a0ee3905847c2ae38d6d6c"
  },
  {
    "url": "img/uploads/2018/08/Inkedamor-odio_LI-300x231.jpg",
    "revision": "e429e544e905a41c974c384251a1a62f"
  },
  {
    "url": "img/uploads/2018/08/Inkedamor-odio_LI-702x430.jpg",
    "revision": "d5f67dad2b1ce007ef3fa38a1ceec5ac"
  },
  {
    "url": "img/uploads/2018/08/Inkedamor-odio_LI.jpg",
    "revision": "559f87b15d1d38b006c97d53ad842d96"
  },
  {
    "url": "img/uploads/2018/09/dojodesenho-150x150.jpg",
    "revision": "356e4e2bfc47088221b2dfa07f723d95"
  },
  {
    "url": "img/uploads/2018/09/dojodesenho-300x220.jpg",
    "revision": "064176a45373eb54827afd246ce00581"
  },
  {
    "url": "img/uploads/2018/09/dojodesenho-50x50.jpg",
    "revision": "1f732c202ea38d9500a219baa3a47e66"
  },
  {
    "url": "img/uploads/2018/09/dojodesenho.jpg",
    "revision": "9804e966a51a8078c3142d21396b9739"
  },
  {
    "url": "img/uploads/2018/09/f-aReEUB_400x400-150x150.jpg",
    "revision": "c9cce091be2b997e0892051eb1c0ca1b"
  },
  {
    "url": "img/uploads/2018/09/f-aReEUB_400x400-300x300.jpg",
    "revision": "be2ff05fe533c4786d77bd2a70c17141"
  },
  {
    "url": "img/uploads/2018/09/f-aReEUB_400x400-50x50.jpg",
    "revision": "f5d31b95a540df7dd0d850b5a9d74b84"
  },
  {
    "url": "img/uploads/2018/09/f-aReEUB_400x400.jpg",
    "revision": "c621c9b2d9d709e486c79055638770a9"
  },
  {
    "url": "img/uploads/2018/09/fiapx-150x150.png",
    "revision": "668c703819f16811f11383b0e457e043"
  },
  {
    "url": "img/uploads/2018/09/fiapx-300x98.png",
    "revision": "0c97917a8c2c5cbc1da307013bcbb62f"
  },
  {
    "url": "img/uploads/2018/09/fiapx-50x50.png",
    "revision": "5f25754d8d396a2ce4d94540d4bfac20"
  },
  {
    "url": "img/uploads/2018/09/fiapx.png",
    "revision": "54853769e013cb7d47479acceda9b557"
  },
  {
    "url": "img/uploads/2018/09/hack-n-cast-beta-150x142.png",
    "revision": "cd15782bdae248d0ef7dc921bd7524ee"
  },
  {
    "url": "img/uploads/2018/09/hack-n-cast-beta-300x142.png",
    "revision": "fc217772e186d83526ab5e20c450db0c"
  },
  {
    "url": "img/uploads/2018/09/hack-n-cast-beta-50x50.png",
    "revision": "17e1383706e5ed2b065afec5cf72614e"
  },
  {
    "url": "img/uploads/2018/09/hack-n-cast-beta.png",
    "revision": "3bcd6a6fec57f8b0f13f849122436898"
  },
  {
    "url": "img/uploads/2018/09/IMG_4830-2-1-150x150.jpg",
    "revision": "36a38656c9631069764db05652d2eaab"
  },
  {
    "url": "img/uploads/2018/09/IMG_4830-2-1-300x300.jpg",
    "revision": "88b92d1b7201ad502cb5517ea70d56ec"
  },
  {
    "url": "img/uploads/2018/09/IMG_4830-2-1-50x50.jpg",
    "revision": "187f9877fa59f89e1ce96536c49fc103"
  },
  {
    "url": "img/uploads/2018/09/IMG_4830-2-1-740x430.jpg",
    "revision": "cc9035a76395f8a5384c7b65ed01b69b"
  },
  {
    "url": "img/uploads/2018/09/IMG_4830-2-1-768x768.jpg",
    "revision": "be30a15d577c4d1b5fc4b190d6aeb1a4"
  },
  {
    "url": "img/uploads/2018/09/IMG_4830-2-1-881x600.jpg",
    "revision": "eea41c7ddfeac8cb4de858d2f58ca2cb"
  },
  {
    "url": "img/uploads/2018/09/IMG_4830-2-1.jpg",
    "revision": "494f3b87e608847c44e11a05bd6182e0"
  },
  {
    "url": "img/uploads/2018/09/IMG_4830-2-150x150.jpg",
    "revision": "36a38656c9631069764db05652d2eaab"
  },
  {
    "url": "img/uploads/2018/09/IMG_4830-2-300x300.jpg",
    "revision": "88b92d1b7201ad502cb5517ea70d56ec"
  },
  {
    "url": "img/uploads/2018/09/IMG_4830-2-50x50.jpg",
    "revision": "187f9877fa59f89e1ce96536c49fc103"
  },
  {
    "url": "img/uploads/2018/09/IMG_4830-2-740x430.jpg",
    "revision": "cc9035a76395f8a5384c7b65ed01b69b"
  },
  {
    "url": "img/uploads/2018/09/IMG_4830-2-768x768.jpg",
    "revision": "be30a15d577c4d1b5fc4b190d6aeb1a4"
  },
  {
    "url": "img/uploads/2018/09/IMG_4830-2-881x600.jpg",
    "revision": "eea41c7ddfeac8cb4de858d2f58ca2cb"
  },
  {
    "url": "img/uploads/2018/09/IMG_4830-2.jpg",
    "revision": "494f3b87e608847c44e11a05bd6182e0"
  },
  {
    "url": "img/uploads/2018/09/mojodojo-150x150.jpg",
    "revision": "05efd7caf09e2d43f34b9ea6af2dcdfe"
  },
  {
    "url": "img/uploads/2018/09/mojodojo-300x184.jpg",
    "revision": "0c215dcfbd13fce2c79cba43620bd077"
  },
  {
    "url": "img/uploads/2018/09/mojodojo-50x50.jpg",
    "revision": "0dafa37b5a378ec2821ba8c7808a5104"
  },
  {
    "url": "img/uploads/2018/09/mojodojo-700x430.jpg",
    "revision": "16c7ce2cc12a5299123bc99018f48ab8"
  },
  {
    "url": "img/uploads/2018/09/mojodojo.jpg",
    "revision": "4f9a9ff58a88142e766ad8dcd7ec9650"
  },
  {
    "url": "img/uploads/2018/09/sistema-descentralizado-de-controle-de-versc3b5es-150x150.png",
    "revision": "0db99051324de61b78dd87d035e950be"
  },
  {
    "url": "img/uploads/2018/09/sistema-descentralizado-de-controle-de-versc3b5es-300x184.png",
    "revision": "4fc37cfb5da0a383a199204468bb5cbf"
  },
  {
    "url": "img/uploads/2018/09/sistema-descentralizado-de-controle-de-versc3b5es-50x50.png",
    "revision": "d265793722c0f27e65672f38d1633353"
  },
  {
    "url": "img/uploads/2018/09/sistema-descentralizado-de-controle-de-versc3b5es-700x430.png",
    "revision": "6d5a23500104c1848d89952184a2319b"
  },
  {
    "url": "img/uploads/2018/09/sistema-descentralizado-de-controle-de-versc3b5es.png",
    "revision": "0f0e28959d728e466e078af40e45918f"
  },
  {
    "url": "img/uploads/2018/09/trabalhando-com-um-repositc3b3rio-localmente-150x150.png",
    "revision": "f1a2bc632eb11e59d2b2dad50674e427"
  },
  {
    "url": "img/uploads/2018/09/trabalhando-com-um-repositc3b3rio-localmente-300x184.png",
    "revision": "42177e94863dc57624ffee68a0fb794f"
  },
  {
    "url": "img/uploads/2018/09/trabalhando-com-um-repositc3b3rio-localmente-50x50.png",
    "revision": "8927d52a7b55f5acc8e019b3a4ac3bb9"
  },
  {
    "url": "img/uploads/2018/09/trabalhando-com-um-repositc3b3rio-localmente-700x430.png",
    "revision": "34a614d0549b816e32b935f84df34494"
  },
  {
    "url": "img/uploads/2018/09/trabalhando-com-um-repositc3b3rio-localmente.png",
    "revision": "7027c49c3e3e6ab1f44433ce5e89f5cc"
  },
  {
    "url": "img/uploads/2018/09/trabalhando-com-um-repositc3b3rio-remoto-e-github-150x150.png",
    "revision": "535d34fa2072fcdb827df2c4932d89df"
  },
  {
    "url": "img/uploads/2018/09/trabalhando-com-um-repositc3b3rio-remoto-e-github-300x184.png",
    "revision": "a54a403e9c08a852987d81c154b3cb5f"
  },
  {
    "url": "img/uploads/2018/09/trabalhando-com-um-repositc3b3rio-remoto-e-github-50x50.png",
    "revision": "0fcb4b08d898db576478669d61b04928"
  },
  {
    "url": "img/uploads/2018/09/trabalhando-com-um-repositc3b3rio-remoto-e-github-700x430.png",
    "revision": "c6d276d2f580b45729d4e271e7b91eec"
  },
  {
    "url": "img/uploads/2018/09/trabalhando-com-um-repositc3b3rio-remoto-e-github.png",
    "revision": "eab4c3ce91b72ada41f9e1189f93d771"
  },
  {
    "url": "img/uploads/2018/11/5-min-journal-1024x841.jpg",
    "revision": "6258a18e5e8ffd5d1b7475e2c0c7c7c3"
  },
  {
    "url": "img/uploads/2018/11/5-min-journal-150x150.jpg",
    "revision": "93b4380e2d1db9d962bc93261cd05974"
  },
  {
    "url": "img/uploads/2018/11/5-min-journal-300x246.jpg",
    "revision": "09077ac6bc470f91c88f3b4e01dd06ec"
  },
  {
    "url": "img/uploads/2018/11/5-min-journal-768x631.jpg",
    "revision": "1a574b6a224e2e04da4f39e5e3ac9452"
  },
  {
    "url": "img/uploads/2018/11/5-min-journal.jpg",
    "revision": "d43ec546f10d9937fe4c70cb30cdb1a7"
  },
  {
    "url": "img/uploads/2018/11/Anotação-2018-11-12-001248-150x150.jpg",
    "revision": "575805f21a80262cbfb5c7823bc46b27"
  },
  {
    "url": "img/uploads/2018/11/Anotação-2018-11-12-001248-300x232.jpg",
    "revision": "352a754c234369da6041ae59749e7fa4"
  },
  {
    "url": "img/uploads/2018/11/Anotação-2018-11-12-001248.jpg",
    "revision": "506615ece153ae912f21eab7addae554"
  },
  {
    "url": "index.html",
    "revision": "fbb1a68e49d45e31e988f168789e8b1d"
  },
  {
    "url": "livros-referencia-de-ti-e-desenvolvimento-de-software-de-qualidade-com-download-gratuito/index.html",
    "revision": "0a9ec7aa9d909298e8b9de87af14c92f"
  },
  {
    "url": "manifest.json",
    "revision": "a5b81738ea4205cd9de1830036a2e68e"
  },
  {
    "url": "precisamos-elaborar-redes-sociais-que-levem-a-mudancas-reais/index.html",
    "revision": "a68e11eb17bdfbae067fcd3898519d03"
  },
  {
    "url": "problemas-com-o-curl-ao-atualizar-o-opensuse/index.html",
    "revision": "50f09a3fd911fda72df6cf6b5e45e691"
  },
  {
    "url": "querido-diario-de-5-minutos/index.html",
    "revision": "9610c145b7431ee5dddaa10d61b70f7b"
  },
  {
    "url": "speedup-wsl-by-disabling-windows-real-time-protection/index.html",
    "revision": "27995a71764d41cfe1743d9f2e745155"
  },
  {
    "url": "tabela-de-salarios-de-profissoes-da-area-de-ti/index.html",
    "revision": "bd3b98a3ec802f5af7ef76828c6915c3"
  },
  {
    "url": "tags/agile/index.html",
    "revision": "4202d2db18c4d5f040d155f3367365bf"
  },
  {
    "url": "tags/Antivirus/index.html",
    "revision": "03d1767b03d7d8947c91d8f748bf82e1"
  },
  {
    "url": "tags/autoconhecimento/index.html",
    "revision": "d4b6c78042236fa38a6f36887590571c"
  },
  {
    "url": "tags/AV/index.html",
    "revision": "49ee1650b9a0d1e656cbab411fb91f39"
  },
  {
    "url": "tags/bem/index.html",
    "revision": "8695e329c4cd5fd0b0d296527f9bdcec"
  },
  {
    "url": "tags/CMD/index.html",
    "revision": "cb5621afb7d2807978d556aca4940298"
  },
  {
    "url": "tags/coding dojo/index.html",
    "revision": "dfce9d204880535da794bcee216af3cf"
  },
  {
    "url": "tags/comunidade/index.html",
    "revision": "b3295027126f1f18fe37a8bb80db09d5"
  },
  {
    "url": "tags/controle de versão/index.html",
    "revision": "aac2cbd272ff51c0c98f6c25faa5cf4a"
  },
  {
    "url": "tags/css/index.html",
    "revision": "2044ba1145cac338c610053f38818e63"
  },
  {
    "url": "tags/curl/index.html",
    "revision": "31c98a9a6a609c9cd0aa1c0980f459b7"
  },
  {
    "url": "tags/desenvolvimento pessoal/index.html",
    "revision": "1e55ec101de21a4a8b66551c2ecff823"
  },
  {
    "url": "tags/diário/index.html",
    "revision": "a2eed0b3fca32a3f25e3266b3374af6d"
  },
  {
    "url": "tags/Disable Antivirus/index.html",
    "revision": "db43f39c127cb930a01fb661555dacc0"
  },
  {
    "url": "tags/fiap/index.html",
    "revision": "d527b4185f3a4961e129c7d92eb9d2d9"
  },
  {
    "url": "tags/flexbox/index.html",
    "revision": "31e7dd8ac39456afebb5841e55d19bb0"
  },
  {
    "url": "tags/git/index.html",
    "revision": "a35e6f708949de715749ae8e3c5c8ff1"
  },
  {
    "url": "tags/github/index.html",
    "revision": "8b06cf01792b3205c99fbaef69f7d81c"
  },
  {
    "url": "tags/grid layout/index.html",
    "revision": "bffd11d9680e2da5c3c3ae82c770b88f"
  },
  {
    "url": "tags/hacker culture/index.html",
    "revision": "f98e2aa6629a0aac4fc9bbbd576ad069"
  },
  {
    "url": "tags/index.html",
    "revision": "0d8391c6666155da3a4949802f5d2d99"
  },
  {
    "url": "tags/ipv6/index.html",
    "revision": "d7fe33575ab3dd48619d26d7290ba4a3"
  },
  {
    "url": "tags/less/index.html",
    "revision": "a95408e39c952f76669da45393eb7716"
  },
  {
    "url": "tags/Linux/index.html",
    "revision": "7225ab2802b621b707e409f1494b9278"
  },
  {
    "url": "tags/oocss/index.html",
    "revision": "67571f4e72af5bbed5f71fde6679ac9b"
  },
  {
    "url": "tags/opensource/index.html",
    "revision": "6a665a42d715406568b8a2bf2a86a3ef"
  },
  {
    "url": "tags/opensuse/index.html",
    "revision": "800d01049ea6decd43f9bfd5dd5d2d4a"
  },
  {
    "url": "tags/pair programming/index.html",
    "revision": "0392c15efa51ec6781c00f3d44f9ee0b"
  },
  {
    "url": "tags/podcast/index.html",
    "revision": "3d0fdaa3bfdbf6552f7e8e510faaa4b7"
  },
  {
    "url": "tags/Powershell/index.html",
    "revision": "c96b8e2f27baa84f80e8ac924ec72798"
  },
  {
    "url": "tags/problema/index.html",
    "revision": "cb84b9a9ffaea999fda03203b5b8244c"
  },
  {
    "url": "tags/produtividade/index.html",
    "revision": "be63cedc0806df586858b6081a708a79"
  },
  {
    "url": "tags/Real-time protection/index.html",
    "revision": "d45a0702aa7ab332aebda9c09c807f4e"
  },
  {
    "url": "tags/salarios de ti/index.html",
    "revision": "4d28e9e0d09ba3e8360180680e4af34c"
  },
  {
    "url": "tags/sass/index.html",
    "revision": "ec52ef688255aca12a830831bc1b85ae"
  },
  {
    "url": "tags/Security/index.html",
    "revision": "f648d23c104a4bf342900fb5640f7e79"
  },
  {
    "url": "tags/Shortcut/index.html",
    "revision": "c9808285ba3fd468f9c62fd74a26b6de"
  },
  {
    "url": "tags/smacss/index.html",
    "revision": "f48cd3f05541c38b27c160cc7ab8ad5f"
  },
  {
    "url": "tags/solução/index.html",
    "revision": "bbfe83aef8487dcdea35aa2672a7aaa7"
  },
  {
    "url": "tags/sp/index.html",
    "revision": "8d9727d39c18b22df089115ce6a6f184"
  },
  {
    "url": "tags/tagList/index.html",
    "revision": "66422175a696388e5b4b22ad4206c28f"
  },
  {
    "url": "tags/testes/index.html",
    "revision": "7b2208403ecad2af0c3fc36a9b817083"
  },
  {
    "url": "tags/Tips/index.html",
    "revision": "e0688d93b2870ffeb6ee291eee02b03c"
  },
  {
    "url": "tags/Transparency/index.html",
    "revision": "1975d76b565fc6ce2b910bd40fc42add"
  },
  {
    "url": "tags/Windows/index.html",
    "revision": "c9ac7de3785d278a47392eec7612f2fc"
  },
  {
    "url": "tags/workstation/index.html",
    "revision": "b2cb3a7fb3522e862abd0d1dca0406f0"
  },
  {
    "url": "tags/WSL/index.html",
    "revision": "bddab8ae4184fdc6b1f4819fb17011d8"
  },
  {
    "url": "tags/zypper/index.html",
    "revision": "d3f555862b5b6889d70e7790c5ee41d4"
  },
  {
    "url": "universidade-lanca-colecao-de-livros-digitais-para-download-gratuito/index.html",
    "revision": "24f4d2d75eb8d04be4a54d9a666a16c6"
  },
  {
    "url": "windows-command-line-tip-easily-change-window-transparency/index.html",
    "revision": "a5167e9b28d96c4d89a7571b28c2f0ce"
  },
  {
    "url": "workstation-inicio-2018/index.html",
    "revision": "9947fd7286608c2e6aa61e124b767255"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, workbox.strategies.staleWhileRevalidate(), 'GET');
