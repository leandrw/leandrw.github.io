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
    "revision": "e8170c6029b5a8b6e68a36686843e7f1"
  },
  {
    "url": "css/components/_code-highlight.css",
    "revision": "3c201a8f3be2192070704280b413f620"
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
    "revision": "29ac38ba52df06e9a030e4b5b5c34c81"
  },
  {
    "url": "css/components/_tags.css",
    "revision": "f638d0e6fef9eae740093d700d57d454"
  },
  {
    "url": "css/index.css",
    "revision": "ac369db92a26ef47f7dc044a65e702f0"
  },
  {
    "url": "css/prism-darcula.css",
    "revision": "cc466f151a88aa2492a8fa401be801a0"
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
    "revision": "6feaf1378b5a0b13b6c73c38da7645b1"
  },
  {
    "url": "img/32x32.jpg",
    "revision": "0bd8e7048c186e160048bd6eed3e7faa"
  },
  {
    "url": "img/apple-touch.jpg",
    "revision": "2b8238f0166c1f18f724001c5db94151"
  },
  {
    "url": "img/m-tile.jpg",
    "revision": "b4174ec93f655bac142aa2a2f5021e1f"
  },
  {
    "url": "img/uploads/2017/10/1-VC-J-0V3pZj6m2L4HwyvMQ-150x150.gif",
    "revision": "1e6c6847f2bd941615f2e8195634bfbb"
  },
  {
    "url": "img/uploads/2017/10/1-VC-J-0V3pZj6m2L4HwyvMQ-300x179.gif",
    "revision": "550588be70796447c243a0cb7ca086aa"
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
    "revision": "cf590db78ac2bcf921302a8ca75733b7"
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
    "revision": "52c0cc3bf293e3e5abc9daa6e31639ee"
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
    "revision": "a2e9074cbfa07900a7013ba380f3af26"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-1-150x150.jpg",
    "revision": "0d135fdcc8cfccf260af1cb9efd22c06"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-1-180x180.jpg",
    "revision": "4ba4d28ed896eb1444b2f27543a6296b"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-1-192x192.jpg",
    "revision": "72d207e99ea76eb8d32eab8feafb893d"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-1-270x270.jpg",
    "revision": "27491d9881e92821ccadc59ede6468d7"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-1-300x300.jpg",
    "revision": "042310b2d8dda074a60b933accfea329"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-1-32x32.jpg",
    "revision": "87a15c9b3ff7aae7fa19b2dd67ec8411"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-1.jpg",
    "revision": "1e8ee4843ba281f349b3f7db64867fd5"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-100x100.jpg",
    "revision": "4a49f51bc3befed2fac6a4c67ff04d4b"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-150x150.jpg",
    "revision": "19091610cb663d19e38cedd8c5822c90"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-2-100x100.jpg",
    "revision": "079398fbdf64946449f6fc040e237e39"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-2-150x150.jpg",
    "revision": "561db67add84da6ca9ef1e3e58088a65"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-2.jpg",
    "revision": "29ef714f200814c26e21cee875b9cdb5"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-3-1024x205.jpg",
    "revision": "1bf1e7e104e4d052597418efa658a655"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-3-1100x220.jpg",
    "revision": "89711f16f42622434a52e5e6e9496104"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-3-1440x300.jpg",
    "revision": "3935f6601417806a5148384ba80cfed6"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-3-150x150.jpg",
    "revision": "4372d27618e75789bf9ba4321ffbbf01"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-3-300x60.jpg",
    "revision": "6ed336150ab928ca4afb581b7fc90697"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-3-740x300.jpg",
    "revision": "3d53885499ad62ce48f241ac5df44483"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-3-768x154.jpg",
    "revision": "2178fea709b5bca5ef283879e549d6ad"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-3.jpg",
    "revision": "3a4f1652713e42e481200ab6046b5e8a"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-4-150x150.jpg",
    "revision": "fca40f2217ee23a15250fcd34145d761"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2-4.jpg",
    "revision": "83db5a95ada4c2be9b297f24e4c9fde1"
  },
  {
    "url": "img/uploads/2018/04/cropped-Fresh-Paint-2015.04.08-01.03.42-2.jpg",
    "revision": "740be3e05434fb930e9d06cc90fdd5f5"
  },
  {
    "url": "img/uploads/2018/04/Fresh-Paint-2015.04.08-01.03.42-2-100x100.jpg",
    "revision": "e170899556456ad6d3a88d454808154f"
  },
  {
    "url": "img/uploads/2018/04/Fresh-Paint-2015.04.08-01.03.42-2-150x150.jpg",
    "revision": "85ed2e70318bf77693c1010a5bd7aa12"
  },
  {
    "url": "img/uploads/2018/04/Fresh-Paint-2015.04.08-01.03.42-2-300x300.jpg",
    "revision": "7c46453bba3b94eb9ebc04a7ff6a359f"
  },
  {
    "url": "img/uploads/2018/04/Fresh-Paint-2015.04.08-01.03.42-2.jpg",
    "revision": "c28e2da360a2123002bdc42c4d3a57cd"
  },
  {
    "url": "img/uploads/2018/05/Desenho-sem-título-150x150.png",
    "revision": "e76ded477feadb80ce2fee029db24606"
  },
  {
    "url": "img/uploads/2018/05/Desenho-sem-título-300x150.png",
    "revision": "5db96fa43e8b3b0b3daead78eb56e500"
  },
  {
    "url": "img/uploads/2018/05/Desenho-sem-título-50x50.png",
    "revision": "eb59bcc88ee6403822d7862da733f796"
  },
  {
    "url": "img/uploads/2018/05/Desenho-sem-título-740x430.png",
    "revision": "bad61b1bbdd07b927e19acd3442c734a"
  },
  {
    "url": "img/uploads/2018/05/Desenho-sem-título-768x384.png",
    "revision": "0a4bfdf9e55118f79876f70909482638"
  },
  {
    "url": "img/uploads/2018/05/Desenho-sem-título.png",
    "revision": "5431590ad47fcda846607af56202995f"
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
    "revision": "f784b9c18ff32f7187c4948fde5a39a5"
  },
  {
    "url": "img/uploads/2018/08/1-6FyyUhdUkfW77MDfC1BgUA-300x150.png",
    "revision": "be5362dd733903b60f256b33c36fff01"
  },
  {
    "url": "img/uploads/2018/08/1-6FyyUhdUkfW77MDfC1BgUA-740x430.png",
    "revision": "6179024c8e475d8f00d40c96d9336eda"
  },
  {
    "url": "img/uploads/2018/08/1-6FyyUhdUkfW77MDfC1BgUA-768x384.png",
    "revision": "03add7cf02cbeb563b639033a897612a"
  },
  {
    "url": "img/uploads/2018/08/1-6FyyUhdUkfW77MDfC1BgUA.png",
    "revision": "7de272fd89dd13c37d768152cac81329"
  },
  {
    "url": "img/uploads/2018/08/1-a-U4iD2KwHC3VXFuNDhTxg-150x150.png",
    "revision": "24c6faa014686ca539fad9e856673057"
  },
  {
    "url": "img/uploads/2018/08/1-a-U4iD2KwHC3VXFuNDhTxg-300x160.png",
    "revision": "56d71c64b936ecbd3991a7393aa75be5"
  },
  {
    "url": "img/uploads/2018/08/1-a-U4iD2KwHC3VXFuNDhTxg-740x426.png",
    "revision": "1bc7cee5ea2f0aee6eca087c7412bc66"
  },
  {
    "url": "img/uploads/2018/08/1-a-U4iD2KwHC3VXFuNDhTxg-768x409.png",
    "revision": "d61c9c288b15942089ba1480a6660322"
  },
  {
    "url": "img/uploads/2018/08/1-a-U4iD2KwHC3VXFuNDhTxg.png",
    "revision": "cd6e3998e77714458e7c12fdf3a34d80"
  },
  {
    "url": "img/uploads/2018/08/Inkedamor-odio_LI-150x150.jpg",
    "revision": "f16de9e87d5ae89fe7778598912cae10"
  },
  {
    "url": "img/uploads/2018/08/Inkedamor-odio_LI-300x231.jpg",
    "revision": "955582f765af5d805679c76513a45e0d"
  },
  {
    "url": "img/uploads/2018/08/Inkedamor-odio_LI-702x430.jpg",
    "revision": "fe93b4847b45019fe34b5020c2d85c9c"
  },
  {
    "url": "img/uploads/2018/08/Inkedamor-odio_LI.jpg",
    "revision": "f598928c2e4cc2c32a14e0dddff1e09a"
  },
  {
    "url": "img/uploads/2018/09/dojodesenho-150x150.jpg",
    "revision": "996d56e73cd4a04d922c7a6a00766280"
  },
  {
    "url": "img/uploads/2018/09/dojodesenho-300x220.jpg",
    "revision": "45a6d0f628e87e589f205e4b3f42b318"
  },
  {
    "url": "img/uploads/2018/09/dojodesenho-50x50.jpg",
    "revision": "797d63da1c2ecff4be9fd81dc0f70c1d"
  },
  {
    "url": "img/uploads/2018/09/dojodesenho.jpg",
    "revision": "e0eebec039b4ba45255b6cee4c00441a"
  },
  {
    "url": "img/uploads/2018/09/f-aReEUB_400x400-150x150.jpg",
    "revision": "7758ed16f5d1ce24ec3275a961025e74"
  },
  {
    "url": "img/uploads/2018/09/f-aReEUB_400x400-300x300.jpg",
    "revision": "af3ae296100e31cd4be73f07f2ebf663"
  },
  {
    "url": "img/uploads/2018/09/f-aReEUB_400x400-50x50.jpg",
    "revision": "8155e63740a4d6ab0e19ba90b10b51e5"
  },
  {
    "url": "img/uploads/2018/09/f-aReEUB_400x400.jpg",
    "revision": "33dc1e6cdd88769d3b952f3020940c62"
  },
  {
    "url": "img/uploads/2018/09/fiapx-150x150.png",
    "revision": "869875173b0a65d39099d36c59fb52df"
  },
  {
    "url": "img/uploads/2018/09/fiapx-300x98.png",
    "revision": "a03890291f099fa358a22cde5b236c18"
  },
  {
    "url": "img/uploads/2018/09/fiapx-50x50.png",
    "revision": "dfb79970d65caef1cc10432681215af7"
  },
  {
    "url": "img/uploads/2018/09/fiapx.png",
    "revision": "ae93a35a966fe9be0feaa522db1fcc51"
  },
  {
    "url": "img/uploads/2018/09/hack-n-cast-beta-150x142.png",
    "revision": "c7417002c8f5115ce73819c21695966a"
  },
  {
    "url": "img/uploads/2018/09/hack-n-cast-beta-300x142.png",
    "revision": "58b3d20691b0d007a07b22110e0e95be"
  },
  {
    "url": "img/uploads/2018/09/hack-n-cast-beta-50x50.png",
    "revision": "9653e165d080b58f1b456ac4f2ef9631"
  },
  {
    "url": "img/uploads/2018/09/hack-n-cast-beta.png",
    "revision": "d9ac50d8744b58d7e59a4ccd690e9230"
  },
  {
    "url": "img/uploads/2018/09/IMG_4830-2-1-150x150.jpg",
    "revision": "e8acd2b5346f605d75ffe7c12340aedf"
  },
  {
    "url": "img/uploads/2018/09/IMG_4830-2-1-300x300.jpg",
    "revision": "f3a25a116b9b50748adc58f3b1a9d50b"
  },
  {
    "url": "img/uploads/2018/09/IMG_4830-2-1-50x50.jpg",
    "revision": "c5e257a1381d723a56f526b5a0db8156"
  },
  {
    "url": "img/uploads/2018/09/IMG_4830-2-1-740x430.jpg",
    "revision": "b74a9287f3cd1c9337bdac7bc2c7e558"
  },
  {
    "url": "img/uploads/2018/09/IMG_4830-2-1-768x768.jpg",
    "revision": "e7aa8cc6bfe7b9f9a4b984672f9678d0"
  },
  {
    "url": "img/uploads/2018/09/IMG_4830-2-1-881x600.jpg",
    "revision": "4d36118e93e7519d22850f40d3d4469d"
  },
  {
    "url": "img/uploads/2018/09/IMG_4830-2-1.jpg",
    "revision": "e733c56ec434cf1f9a078a4995aeeecc"
  },
  {
    "url": "img/uploads/2018/09/IMG_4830-2-150x150.jpg",
    "revision": "e8acd2b5346f605d75ffe7c12340aedf"
  },
  {
    "url": "img/uploads/2018/09/IMG_4830-2-300x300.jpg",
    "revision": "f3a25a116b9b50748adc58f3b1a9d50b"
  },
  {
    "url": "img/uploads/2018/09/IMG_4830-2-50x50.jpg",
    "revision": "c5e257a1381d723a56f526b5a0db8156"
  },
  {
    "url": "img/uploads/2018/09/IMG_4830-2-740x430.jpg",
    "revision": "b74a9287f3cd1c9337bdac7bc2c7e558"
  },
  {
    "url": "img/uploads/2018/09/IMG_4830-2-768x768.jpg",
    "revision": "e7aa8cc6bfe7b9f9a4b984672f9678d0"
  },
  {
    "url": "img/uploads/2018/09/IMG_4830-2-881x600.jpg",
    "revision": "4d36118e93e7519d22850f40d3d4469d"
  },
  {
    "url": "img/uploads/2018/09/IMG_4830-2.jpg",
    "revision": "e733c56ec434cf1f9a078a4995aeeecc"
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
    "revision": "7296a1665bef57d540488e95ad68aed3"
  },
  {
    "url": "img/uploads/2018/09/sistema-descentralizado-de-controle-de-versc3b5es-150x150.png",
    "revision": "b126a349a40b068a5be23806163de712"
  },
  {
    "url": "img/uploads/2018/09/sistema-descentralizado-de-controle-de-versc3b5es-300x184.png",
    "revision": "2e31cefcf426e3b40a32afa09b24e09c"
  },
  {
    "url": "img/uploads/2018/09/sistema-descentralizado-de-controle-de-versc3b5es-50x50.png",
    "revision": "923477c1122b45963065655a15c14435"
  },
  {
    "url": "img/uploads/2018/09/sistema-descentralizado-de-controle-de-versc3b5es-700x430.png",
    "revision": "4620b9521773735dfa6611d3a7a317a0"
  },
  {
    "url": "img/uploads/2018/09/sistema-descentralizado-de-controle-de-versc3b5es.png",
    "revision": "269d860f79bf7a95f4d08ae8129631bb"
  },
  {
    "url": "img/uploads/2018/09/trabalhando-com-um-repositc3b3rio-localmente-150x150.png",
    "revision": "3370bc09ac9edc0c8f4e352f45f442d0"
  },
  {
    "url": "img/uploads/2018/09/trabalhando-com-um-repositc3b3rio-localmente-300x184.png",
    "revision": "80c7a3fc63a846d44f4fb156fd4b324f"
  },
  {
    "url": "img/uploads/2018/09/trabalhando-com-um-repositc3b3rio-localmente-50x50.png",
    "revision": "d19d61d4de0d78d461c80750940fd02b"
  },
  {
    "url": "img/uploads/2018/09/trabalhando-com-um-repositc3b3rio-localmente-700x430.png",
    "revision": "541d3a0c3debc92c07e85edd2b596f4b"
  },
  {
    "url": "img/uploads/2018/09/trabalhando-com-um-repositc3b3rio-localmente.png",
    "revision": "74e5eb0bd047fd5d1e4e1a64829ba3f8"
  },
  {
    "url": "img/uploads/2018/09/trabalhando-com-um-repositc3b3rio-remoto-e-github-150x150.png",
    "revision": "155d74e9a56829e52354b53559082563"
  },
  {
    "url": "img/uploads/2018/09/trabalhando-com-um-repositc3b3rio-remoto-e-github-300x184.png",
    "revision": "4d74941c9e5712b0c7966d104b66ff80"
  },
  {
    "url": "img/uploads/2018/09/trabalhando-com-um-repositc3b3rio-remoto-e-github-50x50.png",
    "revision": "dac9b82fceb8b1d3fe3ec6d7cebe9bb0"
  },
  {
    "url": "img/uploads/2018/09/trabalhando-com-um-repositc3b3rio-remoto-e-github-700x430.png",
    "revision": "170312f160bd1b8c60d016b517f96295"
  },
  {
    "url": "img/uploads/2018/09/trabalhando-com-um-repositc3b3rio-remoto-e-github.png",
    "revision": "a03031123ac4ae93d1ab672708eddd81"
  },
  {
    "url": "img/uploads/2018/11/5-min-journal-1024x841.jpg",
    "revision": "16f9b6689090176a7218d6b57faf58ce"
  },
  {
    "url": "img/uploads/2018/11/5-min-journal-150x150.jpg",
    "revision": "1d026fef1db0e941da72f97c998280a0"
  },
  {
    "url": "img/uploads/2018/11/5-min-journal-300x246.jpg",
    "revision": "df65c0bfd7ad54a34507e3f5dd7a92ad"
  },
  {
    "url": "img/uploads/2018/11/5-min-journal-768x631.jpg",
    "revision": "340e309876952c00af153e1902e497bd"
  },
  {
    "url": "img/uploads/2018/11/5-min-journal.jpg",
    "revision": "193b4856469a58c3260a4c4545f6bb1a"
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
    "revision": "39857ce8c0a759db8f5c2ad955f09ab0"
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
