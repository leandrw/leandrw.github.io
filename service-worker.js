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
    "revision": "68d06c97820fb5ea234e215d8c9d97e1"
  },
  {
    "url": "a-inovacao-da-solidao/index.html",
    "revision": "0811dca8c2b35630a8adb4d24c98f815"
  },
  {
    "url": "about-me-servico-gratuito-para-quem-precisa-somente-de-uma-pagina-sobre-si/index.html",
    "revision": "59d01d348be777b82a2af8d5dc81f78f"
  },
  {
    "url": "about/index.html",
    "revision": "f75bc73cf6bc864ca8b8debddf254942"
  },
  {
    "url": "contato/index.html",
    "revision": "0c0209c8eac23a0777fbafda53a58b68"
  },
  {
    "url": "css-do-odeio-essa-m-a-deixa-comigo/index.html",
    "revision": "052037a24c7b4e37d52cdbce7375aaf8"
  },
  {
    "url": "css/_variables.css",
    "revision": "3b23a638c8d507d0431c82d40f794676"
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
    "revision": "70a9b1ff7b3299dd03d317281f2b4d4c"
  },
  {
    "url": "fiap-x-um-podcast-sobre-tecnologia-da-fiap/index.html",
    "revision": "f468d47d25cb220868b96739f033ad46"
  },
  {
    "url": "git-sistema-descentralizado-de-controle-de-versoes/index.html",
    "revision": "2b31fb39ab474db3853e14f443f32976"
  },
  {
    "url": "git-trabalhando-com-um-repositorio-localmente/index.html",
    "revision": "bec621ffd980a8ee9af5579974bd0856"
  },
  {
    "url": "git-trabalhando-com-um-repositorio-remoto-e-github/index.html",
    "revision": "e28ad597ecf76ad87490cc3d5cdd5a17"
  },
  {
    "url": "hack-n-cast-um-podcast-brasileiro-sobre-cultura-hacker/index.html",
    "revision": "aefa1cdb72a1f522809a36e3e9e9e86a"
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
    "revision": "8c4423c304c8b0c09f7faced731f8f93"
  },
  {
    "url": "livros-referencia-de-ti-e-desenvolvimento-de-software-de-qualidade-com-download-gratuito/index.html",
    "revision": "312c266dbde4b25ef23066ceddc8a298"
  },
  {
    "url": "manifest.json",
    "revision": "a5b81738ea4205cd9de1830036a2e68e"
  },
  {
    "url": "posts/index.html",
    "revision": "0a2ce57af66bb897be390ce295f16cb7"
  },
  {
    "url": "precisamos-elaborar-redes-sociais-que-levem-a-mudancas-reais/index.html",
    "revision": "78e7b068723cbea61d795dc1a2cb0a69"
  },
  {
    "url": "problemas-com-o-curl-ao-atualizar-o-opensuse/index.html",
    "revision": "a00316aa8aa223f5a4018d6e34a420f2"
  },
  {
    "url": "querido-diario-de-5-minutos/index.html",
    "revision": "3f92ece0fd2c66d143ff11b905536f5f"
  },
  {
    "url": "speedup-wsl-by-disabling-windows-real-time-protection/index.html",
    "revision": "f3156589f8eacc914b3b0c030f6b2b4c"
  },
  {
    "url": "tabela-de-salarios-de-profissoes-da-area-de-ti/index.html",
    "revision": "95563034adb0ce24819bc37b94b6ccce"
  },
  {
    "url": "tags/agile/index.html",
    "revision": "ad53097c059191d51c13bf02a90ad41d"
  },
  {
    "url": "tags/Antivirus/index.html",
    "revision": "30ea592a144ea6f2fafb1c13df46d660"
  },
  {
    "url": "tags/autoconhecimento/index.html",
    "revision": "cf6b127906624dc870367bd3bc259938"
  },
  {
    "url": "tags/AV/index.html",
    "revision": "e310a3f01662bc1cedea131c504118de"
  },
  {
    "url": "tags/bem/index.html",
    "revision": "52530ddebef5411a027eb87ba539e1de"
  },
  {
    "url": "tags/CMD/index.html",
    "revision": "d1e75680e765915afadd69fab8051d4a"
  },
  {
    "url": "tags/coding dojo/index.html",
    "revision": "0c6117ddef9580543baded541d93824f"
  },
  {
    "url": "tags/comunidade/index.html",
    "revision": "e901521bc72e2a19a44e76cdff0a253b"
  },
  {
    "url": "tags/controle de versão/index.html",
    "revision": "4157e0346d24157eaaa519f7600fac58"
  },
  {
    "url": "tags/css/index.html",
    "revision": "9d94ba593ad94a79764004f6abc30b72"
  },
  {
    "url": "tags/curl/index.html",
    "revision": "75b63072bc9d34e12a91893ec879598c"
  },
  {
    "url": "tags/desenvolvimento pessoal/index.html",
    "revision": "863f64c9fc713450a1f5dff15ad081d7"
  },
  {
    "url": "tags/diário/index.html",
    "revision": "9c0359315c7ba030edde936a70dfff3d"
  },
  {
    "url": "tags/Disable Antivirus/index.html",
    "revision": "d8e64d7aefab98e4c2899b73c8510c35"
  },
  {
    "url": "tags/fiap/index.html",
    "revision": "fd8bb90f08cc857ce8d9da661695688e"
  },
  {
    "url": "tags/flexbox/index.html",
    "revision": "2be296b7de5db9ba09e30d0cbf04fa57"
  },
  {
    "url": "tags/git/index.html",
    "revision": "a6de27a17fe16fb8deda30250372598a"
  },
  {
    "url": "tags/github/index.html",
    "revision": "549d706c67fa98c16dd7b71e050c3901"
  },
  {
    "url": "tags/grid layout/index.html",
    "revision": "d7e235984615dce626197616053f79a3"
  },
  {
    "url": "tags/hacker culture/index.html",
    "revision": "05affe107b1eb4ef0212638f434ea427"
  },
  {
    "url": "tags/index.html",
    "revision": "0999b2fd2d7854395ac9a5171bc74703"
  },
  {
    "url": "tags/ipv6/index.html",
    "revision": "dd955c992aa7d230d37efb6fde389b09"
  },
  {
    "url": "tags/less/index.html",
    "revision": "95e401ebe64690d675e10b1c38262a34"
  },
  {
    "url": "tags/Linux/index.html",
    "revision": "84d63586b34389047bb9cec354f4b39d"
  },
  {
    "url": "tags/oocss/index.html",
    "revision": "7bcc08d6e25993401b90af4359d507e2"
  },
  {
    "url": "tags/opensource/index.html",
    "revision": "6b753a41a5d50ef6ee99cb6a48b76545"
  },
  {
    "url": "tags/opensuse/index.html",
    "revision": "8c119945bc9c02c7c6f524b450986763"
  },
  {
    "url": "tags/pair programming/index.html",
    "revision": "590116b7dbb20857f2b4f2102ce8a1d3"
  },
  {
    "url": "tags/podcast/index.html",
    "revision": "b47aa3bae5424ddfc71149bbc13fa887"
  },
  {
    "url": "tags/Powershell/index.html",
    "revision": "af376e91d0ef9528d99364ae5588dae9"
  },
  {
    "url": "tags/problema/index.html",
    "revision": "52dcbeee0ae4c668575c48a30565a728"
  },
  {
    "url": "tags/produtividade/index.html",
    "revision": "9758f8eaa2b7012461786dc49a9103ed"
  },
  {
    "url": "tags/Real-time protection/index.html",
    "revision": "17cb399cd67a3238f059ef8145593625"
  },
  {
    "url": "tags/salarios de ti/index.html",
    "revision": "82e491a94874ad8765f0c4f82fe2d11b"
  },
  {
    "url": "tags/sass/index.html",
    "revision": "20e596b1d395bf350ac76a2145726a8e"
  },
  {
    "url": "tags/Security/index.html",
    "revision": "c3ea986bed4e49a812821dc78dabc96f"
  },
  {
    "url": "tags/Shortcut/index.html",
    "revision": "04545b0313f8f1194ae7b151cc6bb3f2"
  },
  {
    "url": "tags/smacss/index.html",
    "revision": "1f9ad9cc87f04a9f629b2b279ed5ee21"
  },
  {
    "url": "tags/solução/index.html",
    "revision": "5590cff6e617a1a57e7eb4220dba6404"
  },
  {
    "url": "tags/sp/index.html",
    "revision": "658862ea2c6065fc397e39457a39cd55"
  },
  {
    "url": "tags/tagList/index.html",
    "revision": "cb150b60843ac1bbd71174a34cac9c7a"
  },
  {
    "url": "tags/testes/index.html",
    "revision": "5db089a8dadac868da7485b2dcedac72"
  },
  {
    "url": "tags/Tips/index.html",
    "revision": "95e7f3f68caaeea7267dc6b8f96379f0"
  },
  {
    "url": "tags/Transparency/index.html",
    "revision": "25f55e068bcaa6d1520838ded445c8f2"
  },
  {
    "url": "tags/Windows/index.html",
    "revision": "530500581d6435d26111b5896bf062f5"
  },
  {
    "url": "tags/workstation/index.html",
    "revision": "e15dfaab6c9f0b178a389a2e4f8459b7"
  },
  {
    "url": "tags/WSL/index.html",
    "revision": "e913fef10028380f76d7b4b4b74108e5"
  },
  {
    "url": "tags/zypper/index.html",
    "revision": "413a49deff2e4ca54650b01f4c2103ea"
  },
  {
    "url": "universidade-lanca-colecao-de-livros-digitais-para-download-gratuito/index.html",
    "revision": "74fff7953d59f5ead4a7cf1bc2d2ee74"
  },
  {
    "url": "windows-command-line-tip-easily-change-window-transparency/index.html",
    "revision": "f039df98b65793a45e404d7986020333"
  },
  {
    "url": "workstation-inicio-2018/index.html",
    "revision": "6922213f457412285d01a874a7539e46"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, workbox.strategies.staleWhileRevalidate(), 'GET');
