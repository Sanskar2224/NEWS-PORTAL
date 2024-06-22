import React, { Component } from 'react'
import NewsUpdate from './NewsUpdate'

export class News extends Component {
    articles = [


        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "patrick.farmer@futurenet.com (Patrick Farmer)",
            "title": "Visible deal alert! Get $20 OFF our #1 favorite wireless plan with this code",
            "description": "Use the code VIP20 and Visible will give you $20 off your first month of Visible Plus, one of our favorite data plans on the market.",
            "url": "https://www.androidcentral.com/phones/visible-deal-alert-get-dollar20-off-our-1-favorite-wireless-plan-with-this-code",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/t7NuNpjqaVBBCzZL3Ni3rH-1200-80.jpg",
            "publishedAt": "2024-06-21T17:19:03Z",
            "content": "It may be one of Android Central's favorite wireless carriers, but Visible deals aren't quite as common as I'd like. Fortunately, the Verizon-owned carrier has just launched an offer that should send… [+1603 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "vishnu.skar@gmail.com (Vishnu Sarangapurkar)",
            "title": "Samsung brings a new yellow hue to its flagship Galaxy S24 Ultra",
            "description": "As we near the launch of Galaxy foldables next month, Samsung seems to have other plans up its sleeve.",
            "url": "https://www.androidcentral.com/phones/samsung-galaxy-s24-ultra-now-comes-titanium-yellow",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/2Z4MjR95e4oKLzgDQVUJBW-1200-80.jpg",
            "publishedAt": "2024-06-21T17:29:39Z",
            "content": "What you need to know\r\n<ul><li>Samsung announces a new color hue for the Galaxy S24 Ultra.</li><li>Dubbed Titanium Yellow, it sits right next to Titanium Black, Gray, and Violet colorways.</li><li>Th… [+2346 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "andrew.myrick@futurenet.com (Andrew Myrick)",
            "title": "You can play retro games on practically anything",
            "description": "With a little bit of patience, and knowing where to look, you can turn practically anything into a retro gaming console. That includes streaming devices like the Onn. Google TV 4K Pro or Amazon Fire TV Stick.",
            "url": "https://www.androidcentral.com/streaming-tv/you-can-play-retro-games-on-practically-anything",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/3UFdRKGUqWKvt8Logz7EBQ-1200-80.jpg",
            "publishedAt": "2024-06-21T11:00:13Z",
            "content": "(Image credit: Nicholas Sutrich / Android Central)\r\nBeyond the Alphabet is a weekly column that focuses on the tech world both inside and out of the confines of Mountain View.\r\nDo you remember the ol… [+4763 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "bradypsnyder@gmail.com (Brady Snyder)",
            "title": "The Samsung Galaxy S25 may be all Snapdragon again — not all Exynos",
            "description": "An unconfirmed rumor from March 2024 suggested that Samsung could go all-Exynos for the Galaxy S25, but a new report says the opposite.",
            "url": "https://www.androidcentral.com/phones/the-samsung-galaxy-s25-may-be-all-snapdragon-again-not-all-exynos",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/H7pxJnSUSSLBy3dNadjs7M-1200-80.jpg",
            "publishedAt": "2024-06-21T06:30:30Z",
            "content": "What you need to know\r\n<ul><li>A new report claims that Samsung will use Qualcomm for all the Galaxy S25's processors. </li><li>Previously, Samsung used a mix of its own Exynos processors and Qualcom… [+6007 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "bradypsnyder@gmail.com (Brady Snyder)",
            "title": "Peak Design’s new Small Tech Pouch changed the way I carry my Android accessories",
            "description": "Peak Design just launched a lineup of new travel accessories, and after using them for a few weeks, I’m convinced the Small Tech Pouch is the best accessory organizer.",
            "url": "https://www.androidcentral.com/accessories/peak-designs-new-small-tech-pouch-changed-the-way-i-carry-my-android-accessories",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/Q3Szw5NMDxVcnQY7pBYrwD-1200-80.jpg",
            "publishedAt": "2024-06-21T15:00:00Z",
            "content": "What you need to know\r\n<ul><li>Peak Design launched a new lineup of travel accessories, including a Small Tech Pouch.</li><li>This new carrying case is a smaller version of the standard Tech Pouch, m… [+5405 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Mitchel Broussard",
            "title": "Best Apple Deals of the Week: Apple Pencil Pro Gets New Record Low Price Alongside AirTag Discounts and More",
            "description": "This week's best Apple deals include a new record low price on the Apple Pencil Pro, plus steep discounts on M3 MacBook Pro and M1 iPad Air. You'll also find a few solid deals on Apple-related accessories from Beats, Eufy, and Anker.\n\n\n\nNote: MacRumors is an …",
            "url": "https://www.macrumors.com/2024/06/21/best-apple-deals-of-the-week-6-21-24/",
            "urlToImage": "https://images.macrumors.com/t/9jVnkJJDnXT8pDFLH0mOusAwnuY=/2500x/article-new/2022/06/Hero0013.jpg",
            "publishedAt": "2024-06-21T17:14:44Z",
            "content": "This week's best Apple deals include a new record low price on the Apple Pencil Pro, plus steep discounts on M3 MacBook Pro and M1 iPad Air. You'll also find a few solid deals on Apple-related access… [+2934 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Juli Clover",
            "title": "Second iOS 18, iPadOS 18, and macOS Sequoia Betas Coming Monday With iPhone Mirroring and SharePlay Screen Sharing",
            "description": "Apple plans to release the second beta of iOS 18 to developers on Monday, Apple spokesperson Fred Sainz told The Verge. The information was provided as part of a statement on certain new ‌iOS 18‌, iPadOS 18, and macOS Sequoia features that will be delayed in …",
            "url": "https://www.macrumors.com/2024/06/21/ios-18-beta-2-coming-monday/",
            "urlToImage": "https://images.macrumors.com/t/I00FSkiBU64SDTMfRlzvINueoe0=/2500x/article-new/2024/06/Generic-iOS-18-Feature-Real-Mock.jpg",
            "publishedAt": "2024-06-21T19:59:39Z",
            "content": "Apple plans to release the second beta of iOS 18 to developers on Monday, Apple spokesperson Fred Sainz told The Verge. The information was provided as part of a statement on certain new ‌iOS 18‌, iP… [+1178 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Juli Clover",
            "title": "Spotify Launches Cheaper $10.99/Month Premium Plan Without Audiobooks",
            "description": "Spotify today announced the launch of a new Basic paid plan that offers a small discount for dropping access to audiobooks. Priced at $10.99 per month, the Basic option includes all of the music benefits of Spotify like ad-free playback, but without added mon…",
            "url": "https://www.macrumors.com/2024/06/21/spotify-cheaper-premium-plan/",
            "urlToImage": "https://images.macrumors.com/t/7-nfr3K2_BPQYeb0zBLJE8hdAb0=/2500x/article-new/2021/08/General-Spotify-Feature.jpg",
            "publishedAt": "2024-06-21T23:22:00Z",
            "content": "Spotify today announced the launch of a new Basic paid plan that offers a small discount for dropping access to audiobooks. Priced at $10.99 per month, the Basic option includes all of the music bene… [+1064 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Joe Rossignol",
            "title": "'Antstream Arcade' App With Over 1,300 Retro Games Launching on iPhone and iPad Next Week",
            "description": "Antstream Arcade has announced that its cloud-based game streaming service will be available on the iPhone and iPad starting Thursday, June 27. The app will provide subscribers with access to over 1,300 licensed games from a variety of retro consoles, includi…",
            "url": "https://www.macrumors.com/2024/06/21/antstream-arcade-launching-on-iphone-and-ipad/",
            "urlToImage": "https://images.macrumors.com/t/4i_HlCONSboSVXEHmjk0nfgxlMQ=/2500x/article-new/2024/06/Antstream-Arcade-iPhone-and-Controller-Feature.jpg",
            "publishedAt": "2024-06-21T15:50:33Z",
            "content": "Antstream Arcade has announced that its cloud-based game streaming service will be available on the iPhone and iPad starting Thursday, June 27. The app will provide subscribers with access to over 1,… [+1161 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Jeff Carlson",
            "title": "iOS 18: Here's When We Expect Apple to Release the Public Beta for iPhones - CNET",
            "description": "Looking to download the first iOS 18 public beta? Here's our best guess for Apple's likely release date.",
            "url": "https://www.cnet.com/tech/services-and-software/ios-18-heres-when-we-expect-apple-to-release-the-public-beta-for-iphones/",
            "urlToImage": "https://www.cnet.com/a/img/resize/3bf15e02b42c7e10e7749904c67b558d58a99a5b/hub/2024/04/05/a98ff931-13e8-4096-8cc0-7abf293dd7fd/ios-18-iphone15-2.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-06-21T13:33:00Z",
            "content": "Want to check out iOS 18 now? It's easy enough to get a free developer account and install the beta on your iPhone. But, be aware that you should go into it with realistic expectations of how brittle… [+2908 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Juli Clover",
            "title": "Apple Seeks AI Partner for Apple Intelligence in China",
            "description": "With iOS 18, Apple is working with OpenAI to integrate ChatGPT into the iPhone, where ChatGPT will work alongside Siri to handle requests for AI-generated content. ChatGPT and other similar AI services are not available in China, so Apple needs to find an alt…",
            "url": "https://www.macrumors.com/2024/06/21/apple-ai-partner-china/",
            "urlToImage": "https://images.macrumors.com/t/pzNqddGiFkZalbNvFlCX69eXoNc=/1600x/article-new/2024/06/apple-intelligence.jpg",
            "publishedAt": "2024-06-21T22:37:00Z",
            "content": "With iOS 18, Apple is working with OpenAI to integrate ChatGPT into the iPhone, where ChatGPT will work alongside Siri to handle requests for AI-generated content. ChatGPT and other similar AI servic… [+2097 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Juli Clover",
            "title": "Apple Intelligence Features Not Coming to Europe at Launch Due to DMA",
            "description": "Apple today said that European customers will not get access to the Apple Intelligence, iPhone Mirroring, and SharePlay Screen Sharing features that are coming to the ‌iPhone‌, iPad, and Mac this September due to regulatory issues related to the Digital Marke…",
            "url": "https://www.macrumors.com/2024/06/21/apple-intelligence-europe-delay/",
            "urlToImage": "https://images.macrumors.com/t/eNxYmCA1u77ZdJovI2KACUQ_lN0=/2500x/article-new/2024/06/Apple-Intelligence-General-Feature.jpg",
            "publishedAt": "2024-06-21T16:44:33Z",
            "content": "Apple today said that European customers will not get access to the Apple Intelligence, iPhone Mirroring, and SharePlay Screen Sharing features that are coming to the ‌iPhone‌, iPad, and Mac this Sep… [+1652 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Juli Clover",
            "title": "Amazon Could Charge Up to $10/Month for Alexa",
            "description": "Apple competitor Amazon is working on a revamp of its Alexa assistant, and the new version could cost up $10 per month, according to a report from Reuters. The upcoming version of Alexa will support conversational generative AI, and Amazon is planning for two…",
            "url": "https://www.macrumors.com/2024/06/21/amazon-paid-alexa-plan/",
            "urlToImage": "https://images.macrumors.com/t/o-Vj6ZTsQ3Cmh5182isPVM7hH7o=/2000x/article-new/2024/06/amazon-echo-dot.jpg",
            "publishedAt": "2024-06-21T21:55:00Z",
            "content": "Apple competitor Amazon is working on a revamp of its Alexa assistant, and the new version could cost up $10 per month, according to a report from Reuters. The upcoming version of Alexa will support … [+1408 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Shubhangi Goel",
            "title": "Chinese retail giants tried to juice spending with iPhone and Lululemon discounts in an annual shopping bonanza",
            "description": "618 is seen as a key indicator of China's general retail temperature — and early results were not promising.",
            "url": "https://www.businessinsider.com/china-618-win-shoppers-sales-down-consumer-spending-discretionary-luxury-2024-6",
            "urlToImage": "https://i.insider.com/66751b98423319f0c3723c7e?width=1200&format=jpeg",
            "publishedAt": "2024-06-21T06:43:06Z",
            "content": "An e-commerce anchor sold 618 promotional goods on a live broadcast at a mall in Hangzhou, China, on June 18, 2024.Cfoto via Getty Images\r\n<ul><li>China's 618 shopping festival faced challenges, desp… [+2915 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Kit Pulliam",
            "title": "When a single mother was laid off, her emergency fund kept her afloat — and now she has a plan for the future",
            "description": "Erin Ramos is a single mother who was laid off in late 2023. Her emergency fund got her through, and she's taking steps to prepare for the future.",
            "url": "https://www.businessinsider.com/emergency-fund-helped-layoff-but-wishes-saved-more-2024-6",
            "urlToImage": "https://i.insider.com/6671b8c52efa138e0330ae18?width=1200&format=jpeg",
            "publishedAt": "2024-06-21T13:05:35Z",
            "content": "The offers and details on this page may have updated or changed since the time of publication. See our article on Business Insider for current information.Affiliate links for the products on this pag… [+6357 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Graeme Hanna",
            "title": "Australia’s online safety regulator retreats on child abuse detection rules",
            "description": "Australia’s independent regulator for online safety has made concessions on new rules to force big tech firms to take stronger… Continue reading Australia’s online safety regulator retreats on child abuse detection rules\nThe post Australia’s online safety reg…",
            "url": "https://readwrite.com/australia-online-safety-rules-regulator-concessions-big-tech-social-media/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/sydney.webp",
            "publishedAt": "2024-06-21T16:59:28Z",
            "content": "Australias independent regulator for online safety has made concessions on new rules to force big tech firms to take stronger action to detect child abuse and terror content. \r\nSome of the nation’s t… [+2419 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hipertextual"
            },
            "author": "Luis Miranda",
            "title": "Apple retrasa el lanzamiento de Apple Intelligence en Europa",
            "description": "Si vives en España u otro país de la Unión Europea y estás listo para estrenar la inteligencia artificial de Apple, tenemos malas noticias. Apple Intelligence y otras funciones anunciadas durante la pasada WWDC 2024 no llegarán a Europa este año. El gigante t…",
            "url": "http://hipertextual.com/2024/06/apple-retrasa-lanzamiento-apple-intelligence-europa",
            "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2024/06/apple-intelligence.jpg",
            "publishedAt": "2024-06-21T18:04:20Z",
            "content": "Si vives en España u otro país de la Unión Europea y estás listo para estrenar la inteligencia artificial de Apple, tenemos malas noticias. Apple Intelligence y otras funciones anunciadas durante la … [+3322 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hipertextual"
            },
            "author": "Aglaia Berlutti",
            "title": "La gran referencia a Apple, el Macintosh y 1984 que esconde ‘Inside Out 2’",
            "description": "En Del Revés 2 (Inside Out 2), hay de todo y para todos los gustos. Desde guiños cariñosos al universo Toy Story a, incluso, la silueta de Mickey en su divertida secuencia de créditos finales. La película rinde tributo en varias ocasiones a Disney, otras cint…",
            "url": "http://hipertextual.com/2024/06/inside-out-2-del-reves-2-la-iconica-referencia-a-apple-el-mac-y-1984",
            "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2024/06/IO2_Specialty_Headquarters_1s_v7.0_Mech5_FS-scaled.jpg",
            "publishedAt": "2024-06-21T07:33:37Z",
            "content": "En Del Revés 2 (Inside Out 2), hay de todo y para todos los gustos. Desde guiños cariñosos al universo Toy Story a, incluso, la silueta de Mickey en su divertida secuencia de créditos finales. La pel… [+4701 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hipertextual"
            },
            "author": "Quelian Sanz",
            "title": "Estrena iPhone este verano: iPhone 13 por 367 euros o un iPhone 15 por 589 euros",
            "description": "AliExpress ha querido estrenar la época veraniega ofreciendo varias de las ofertas más espectaculares del año. La tienda se ha propuesto que todos los usuarios que iban detrás de un móvil nuevo puedan comprarlo. Su sección de tecnología se ha llenado de preci…",
            "url": "http://hipertextual.com/2024/06/estrena-iphone-este-verano-iphone-13-por-367-euros-o-un-iphone-15-por-589-euros",
            "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2021/09/iPhone-13-13-scaled.jpg",
            "publishedAt": "2024-06-21T09:25:46Z",
            "content": "AliExpress ha querido estrenar la época veraniega ofreciendo varias de las ofertas más espectaculares del año. La tienda se ha propuesto que todos los usuarios que iban detrás de un móvil nuevo pueda… [+3042 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hipertextual"
            },
            "author": "José María López",
            "title": "La historia de WeWork: éxito, secretos y mentiras",
            "description": "En noviembre de 2023, WeWork se declaraba en bancarrota en Estados Unidos. Cuatro años antes, esta empresa tenía una valoración de mercado estimada de 47.000 millones de dólares. Declararse en bancarrota era una manera de protegerse legalmente ante los acreed…",
            "url": "http://hipertextual.com/2024/06/historia-wework",
            "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2017/08/29390349773_340d143542_k.jpg",
            "publishedAt": "2024-06-21T06:33:15Z",
            "content": "En noviembre de 2023, WeWork se declaraba en bancarrota en Estados Unidos. Cuatro años antes, esta empresa tenía una valoración de mercado estimada de 47.000 millones de dólares. Declararse en bancar… [+9357 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Javier Marquez",
            "title": "Apple retrasará el lanzamiento de Apple Intelligence en la Unión Europea. El motivo: la Ley de Mercados Digitales",
            "description": "Malas noticias para los usuarios de Apple en la Unión Europea que estaban contando los días para probar algunas de las últimas novedades en sus dispositivos. La compañía de Cupertino ha anunciado que retrasará el lanzamiento de Apple Intelligence, iPhone Mirr…",
            "url": "https://www.xataka.com/empresas-y-economia/apple-retrasara-lanzamiento-apple-intelligence-union-europea-motivo-ley-mercados-digitales",
            "urlToImage": "https://i.blogs.es/50d899/apple-intelligence1/840_560.jpeg",
            "publishedAt": "2024-06-21T17:45:09Z",
            "content": "Malas noticias para los usuarios de Apple en la Unión Europea que estaban contando los días para probar algunas de las últimas novedades en sus dispositivos. La compañía de Cupertino ha anunciado que… [+997 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Ricardo Aguilar",
            "title": "Tras años de espera, el iPhone por fin tiene un modo manual de cámara. La única pega: es una app independiente",
            "description": "Apple está empezando a abrazar cambios que jamás se hubieran podido imaginar en su ecosistema. La llegada de iOS 18 vino de la mano de la completa y absoluta libertad para personalizar la pantalla de inicio, desde los propios colores de los iconos a poder ubi…",
            "url": "https://www.xataka.com/aplicaciones/anos-espera-iphone-fin-tiene-modo-manual-camara-unica-pega-app-independiente",
            "urlToImage": "https://i.blogs.es/d1310e/final-cut-app/840_560.jpeg",
            "publishedAt": "2024-06-21T09:01:01Z",
            "content": "Apple está empezando a abrazar cambios que jamás se hubieran podido imaginar en su ecosistema. La llegada de iOS 18 vino de la mano de la completa y absoluta libertad para personalizar la pantalla de… [+1978 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Javier Pastor",
            "title": "Parecía que en 2024 Windows y macOS se iban a inundar de funciones de IA. Lo único que tenemos son migajas",
            "description": "Tened paciencia, parecen decirnos desde Apple y Microsoft. La IA acabará llegando, pero tardará un poco. Ese es en esencia el resumen de los últimos anuncios de ambas compañías en materia de IA. Parecen apostarlo todo a esas funciones, pero de momento apenas …",
            "url": "https://www.xataka.com/robotica-e-ia/parecia-que-2024-windows-macos-se-iban-a-inundar-funciones-ia-unico-que-tenemos-minucias",
            "urlToImage": "https://i.blogs.es/432582/ms-ap2/840_560.jpeg",
            "publishedAt": "2024-06-21T12:00:51Z",
            "content": "Tened paciencia, parecen decirnos desde Apple y Microsoft. La IA acabará llegando, pero tardará un poco. Ese es en esencia el resumen de los últimos anuncios de ambas compañías en materia de IA. Pare… [+4572 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Ricardo Aguilar",
            "title": "Las baterías de los móviles serán extraíbles por ley en 2027. Y eso supone un duro golpe a los fabricantes",
            "description": "16 de junio de 2023. Tal y como estaba previsto, la Unión Europea aprobaba hace un año nuevas normas relacionadas con la sostenibilidad de las baterías: recuperación de materiales, eficiencia del reciclaje, acceso fácil a las mismas.  El objetivo es que, a pa…",
            "url": "https://www.xataka.com/moviles/baterias-moviles-seran-extraibles-ley-2027-eso-supone-duro-golpe-a-fabricantes",
            "urlToImage": "https://i.blogs.es/311e87/1366_2000/840_560.jpeg",
            "publishedAt": "2024-06-21T16:31:06Z",
            "content": "16 de junio de 2023. Tal y como estaba previsto, la Unión Europea aprobaba hace un año nuevas normas relacionadas con la sostenibilidad de las baterías: recuperación de materiales, eficiencia del rec… [+3581 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daringfireball.net"
            },
            "author": "John Gruber",
            "title": "★ The EU Is Reaping What It Sows With the DMA: Uncertainty",
            "description": "This is not spite. Spite would be saying these features will never come to the EU while the DMA remains in place. But a delayed rollout is the only rational response to the DMA: extreme caution in the face of the law’s by-design uncertainty and severe penalti…",
            "url": "https://daringfireball.net/2024/06/eu_reaping_what_it_sows",
            "urlToImage": "https://daringfireball.net/graphics/df-wide-card.png",
            "publishedAt": "2024-06-21T20:08:21Z",
            "content": "Ian Betteridge:\n\n\n So, Apple, which bits of the DMA does Apple Intelligence violate?\nBecause unless you can actually tell us - which case we clearly\nhave a bit of a problem with some of the claims yo… [+4938 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Gordon Jackson and James Whitbrook",
            "title": "The Boys' Eric Kripke Teases the One Comic Twist That Will Never Be on the Show",
            "description": "Screenshot: Amazon\r\nGet another look at Scarlett Johansson and Channing Tatum’s Apollo 11 rom-com, Fly Me to the Moon. Bryce Dallas Howard is directing another episode of Star Wars TV. Umbrella Academy showrunner Steve Blackman promises answers in its season …",
            "url": "https://gizmodo.com/the-boys-season-4-homelander-black-noir-clone-comics-1851550347",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/f42e02a9297fa0f57d26f180cc402445.png",
            "publishedAt": "2024-06-21T13:00:00Z",
            "content": "Get another look at Scarlett Johansson and Channing Tatums Apollo 11 rom-com, Fly Me to the Moon. Bryce Dallas Howard is directing another episode of Star Wars TV. Umbrella Academy showrunner Steve B… [+4800 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Digital Trends"
            },
            "author": "Monica J. White",
            "title": "Hacker claims to have hit Apple days after hacking AMD",
            "description": "Intelbroker claims to have breached Apple's defenses and obtained the source code for various tools. Earlier this week, they may have hacked AMD.",
            "url": "https://www.digitaltrends.com/computing/apple-suffers-data-breach/",
            "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2021/08/nyc-apple-store-logo.jpg?resize=1200%2C630&p=1",
            "publishedAt": "2024-06-21T17:07:39Z",
            "content": "Eric Thayer / Getty Images\r\nData breaches happen all the time, but when the giants get hit, it’s impossible not to wonder what kind of critical data may become exposed. Earlier this week, notorious c… [+2756 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Digital Trends"
            },
            "author": "Nadeem Sarwar",
            "title": "Apple’s AI features for the iPhone just hit a major roadblock",
            "description": "Apple Intelligence was supposed to rethink what an iPhone can accomplish. The EU's landmark market rules are now standing in the way of users experiencing it.",
            "url": "https://www.digitaltrends.com/mobile/apple-ai-features-for-iphone-just-hit-major-roadblock-eu-rules/",
            "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2024/06/siri-apple-intelligence5.jpeg?resize=1200%2C630&p=1",
            "publishedAt": "2024-06-21T19:24:11Z",
            "content": "Apple\r\nEarlier this week, the EU’s competition chief, Margrethe Vestager, told CNBC that Apple had some “very serious” issues as it tries to comply with the landmark Digital Markets Act (DMA) tech le… [+3119 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Digital Trends"
            },
            "author": "Christine Romero-Chan",
            "title": "A critical Samsung Galaxy Watch Ultra detail just leaked",
            "description": "Samsung accidentally confirmed that the Galaxy Watch Ultra is coming — and it also confirmed the watch's official name in the process.",
            "url": "https://www.digitaltrends.com/mobile/samsung-galaxy-watch-ultra-support-pages-confirmed-leak/",
            "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/07/galaxy-watch-6-classic-43-face.jpg?resize=1200%2C630&p=1",
            "publishedAt": "2024-06-21T19:54:58Z",
            "content": "Samsung Galaxy Watch 6 Classic 43mmAndy Boxall / Digital Trends\r\nRecent rumors have suggested that Samsung’s next Galaxy Unpacked event will be held in Paris, France, next month, likely on July 10. W… [+1825 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Digital Trends"
            },
            "author": "Willow Roberts",
            "title": "Copilot+ PCs have a secret skill that’s hardly been talked about",
            "description": "The Copilot+ launch has been all about the AI hype, but it might the good old-fashioned performance that really makes these new laptops shine.",
            "url": "https://www.digitaltrends.com/computing/copilot-pcs-have-secret-skill/",
            "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2024/05/copilot-pcs-01.jpg?resize=1200%2C630&p=1",
            "publishedAt": "2024-06-21T14:17:52Z",
            "content": "Luke Larsen / Digital Trends\r\nThe first Copilot+ PCs hit the shelves a few days ago and the initial tests are showing interesting results. While some of the obvious performance and battery life claim… [+2209 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Digital Trends"
            },
            "author": "Michael Bizzaco",
            "title": "This smart lock deadbolt has a huge discount at Best Buy — today only!",
            "description": "Add extra peace of mind to your front door with the Level Lock+ Connect. For a limited time, this awesome smart lock is marked down to $300 at Best Buy.",
            "url": "https://www.digitaltrends.com/home/level-lock-plus-connect-deal-best-buy-june-2024/",
            "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2024/06/level-lock-connect-lifestyle-1.jpeg?resize=1200%2C630&p=1",
            "publishedAt": "2024-06-21T21:58:16Z",
            "content": "Best Buy\r\nSmart lock deals are available at several retailers, and whenever we can call attention to one of these promotions, we do! Such is the case with this solid offer from Best Buy. Today only, … [+1812 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Digital Trends"
            },
            "author": "Carli Velocci",
            "title": "iPhones and iPads are about to get their first retro game streaming service",
            "description": "Thanks to recent App Store changes, a retro game streaming service is about to hit iPhones and iPads.",
            "url": "https://www.digitaltrends.com/gaming/antstream-arcade-iphone-ipad-app-store/",
            "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2022/06/Razer-Kishi-V2-1.jpg?resize=1200%2C630&p=1",
            "publishedAt": "2024-06-21T16:45:31Z",
            "content": "Antstream\r\nPlaying retro games on iPhone and iPad is about to get even easier. As reported by Cult of Mac, Antstream Arcade, a subscription service that gives you access to over 1,300 licensed games,… [+1413 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Digital Trends"
            },
            "author": "Michael Bizzaco",
            "title": "This Samsung 11.1.4-channel soundbar has a $900 price cut",
            "description": "Fill your living room with powerful Dolby Atmos audio with this Woot deal on a brand-new Samsung 11.1.4 HW-Q990C Soundbar.",
            "url": "https://www.digitaltrends.com/home-theater/samsung-1114-soundbar-deal-woot-june-2024/",
            "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/05/Q-series-11.1.4-ch.-Wireless-Dolby-ATMOS-Soundbar-Rear-Speakers-w-Q-Symphony-HW-Q990C-2023.jpg?resize=1200%2C630&p=1",
            "publishedAt": "2024-06-21T23:30:26Z",
            "content": "Samsung\r\nOne of the best things about new tech deals is scoring last years top products for less. Soundbar deals are where a lot of these types of savings live, and we found one that was too good to … [+1895 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Digital Trends"
            },
            "author": "Andrew Tarantola",
            "title": "Alexa to get supercharged with AI",
            "description": "Amazon is reportedly preparing a major AI update to Alexa that would implement a two-tier subscription plan.",
            "url": "https://www.digitaltrends.com/computing/amazon-alexa-ai-update-could-come-with-monthly-subscription/",
            "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/09/amazon-event-alexa-multiple-requests.jpg?resize=1200%2C630&p=1",
            "publishedAt": "2024-06-21T17:51:03Z",
            "content": "Phil Nickinson / Digital Trends\r\nSiri isn’t the only digital assistant getting an AI update in the near future. According to sources speaking to Reuters, Amazon is reportedly planning an expansive up… [+2984 chars]"
        },


        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Evan Halper, Caroline O'Donovan",
            "title": "AI is exhausting the power grid",
            "description": "Some data centers need as much energy as a small city, turning companies that promised a clean energy future into some of the most insatiable guzzlers of power",
            "url": "https://www.washingtonpost.com/business/2024/06/21/artificial-intelligence-nuclear-fusion-climate/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/3PNLXT2PEDPY5XXFWXQ7KVIQ4M.jpg&w=1440",
            "publishedAt": "2024-06-21T11:00:26Z",
            "content": "The mighty Columbia River has helped power the American West with hydroelectricity since the days of FDRsNew Deal. But the artificial intelligence revolution will demand more. Much more.\r\nSo near the… [+15911 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Malte Kirchner",
            "title": "Apple Intelligence: Diese Funktionen gibt es zum Auftakt",
            "description": "Privat soll sie sein, aber vor allem einfach in der Bedienung: Ein erster Blick auf die Funktionen der Apple Intelligence, die in iOS 18 kommen sollen.",
            "url": "https://www.heise.de/hintergrund/Apple-Intelligence-Diese-Funktionen-gibt-es-zum-Auftakt-9772693.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/1/8/8/3/6/Apple-WWDC24-Apple-Intelligence-Writing-Tools-240610-a5a2e547b3e01871.jpg",
            "publishedAt": "2024-06-21T08:41:00Z",
            "content": "Inhaltsverzeichnis\r\nWenn Apple ab Herbst zunächst in Englisch und später in anderen Sprachen die Apple Intelligence an den Start bringt, dann soll der Umgang mit Künstlicher Intelligenz sicher, aber … [+6785 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Joachim Kläschen",
            "title": "heise+ | Apps für Kids: Das lohnt sich auf dem iPad",
            "description": "Wenn der Nachwuchs Zeit vor dem Bildschirm verbringt, sollten nur altersgerechte Anwendungen genutzt werden. Zwölf empfehlenswerte Apps für Apple-Tablets.",
            "url": "https://www.heise.de/tests/Apps-fuer-Kids-Das-lohnt-sich-auf-dem-iPad-9769359.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/1/7/1/1/7/mi_0324_apps_kids_aufmacher_digital-0b994be793a67280.jpg",
            "publishedAt": "2024-06-21T07:00:00Z",
            "content": "Inhaltsverzeichnis\r\nAb wann und ob Kinder überhaupt mit iPhone und iPad in Kontakt kommen sollen, darüber streiten sich die Lager. Während Mediziner in einer Leitlinie fordern, Kinder unter drei Jahr… [+1675 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Ben Schwan",
            "title": "\"Offizielle\" Spatial-Video-Aufnahme auf dem iPhone nicht nur mit Apple-App",
            "description": "Bislang muss man stets die offizielle Kamera-App unter iOS verwenden, wenn man Vision-Pro-kompatible räumliche Filme dreht. Nun kommt die Öffnung.",
            "url": "https://www.heise.de/news/Offizielle-Spatial-Video-Aufnahme-auf-dem-iPhone-nicht-nur-mit-Apple-App-9772338.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/1/8/6/5/2/Apple-iPhone-15-Pro-spatial-video-capture-hero-83de08e0bf2b7b0a.jpg",
            "publishedAt": "2024-06-21T08:01:00Z",
            "content": "Apple will es leichter machen, 3D-Content für sein Mixed-Reality-Headset Vision Pro zu erstellen. Nach Kooperationen mit Canon und Blackmagic Design, die eigene Objektive beziehungsweise gar ganze Ka… [+1943 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Leo Becker",
            "title": "Vision Pro: Horror-Exploit bringt virtuelle Spinnen in die eigenen vier Wände",
            "description": "Manipulierte Webseiten sind in der Lage, die Umgebung des Headset-Trägers ohne dessen Zustimmung zu manipulieren. Ein Patch liegt bereits vor.",
            "url": "https://www.heise.de/news/Vision-Pro-Horror-Exploit-bringt-virtuelle-Spinnen-in-die-eigenen-vier-Waende-9773995.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/1/9/5/1/7/Bildschirmfoto_2024-06-21_um_18.25.27-8ae39092e9c73cb5.png",
            "publishedAt": "2024-06-21T16:41:00Z",
            "content": "'Spatial Computing' enthält räumliche Bugs: Ein Fehler im Safari-Unterbau WebKit erlaubt es Angreifern, allein bei Aufruf einer Webseite unerwünschte digitale Elemente in die physische Umgebung eines… [+1984 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Ronald Eikenberg",
            "title": "FAQ: Fragen und Antworten zu Passkeys",
            "description": "Der Passwort-Nachfolger Passkeys soll das Einloggen im Netz so einfach machen, wie nie – wir beantworten die häufigsten Leserfragen zum Thema.",
            "url": "https://www.heise.de/ratgeber/FAQ-Fragen-und-Antworten-zu-Passkeys-9756135.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/1/0/1/4/7/shutterstock_1302661972-ce45fee294986d8b.jpg",
            "publishedAt": "2024-06-21T04:29:00Z",
            "content": "Inhaltsverzeichnis\r\nEinfach ist das sichere Authentifizierungsverfahren über Passkeys nur auf den ersten Blick, hinter den Kulissen werkelt komplizierte Technik. Und dabei läuft nicht immer alles gla… [+17285 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Markus Will",
            "title": "#TGIQF: Das Quiz rund um MP3",
            "description": "Der Vater des MP3-Formats, was die Musiksammlung  tragbar machte, wurde diese Woche 70. Wir würdigen das mit einem Quiz. Knobeln Sie mit!",
            "url": "https://www.heise.de/news/TGIQF-Das-Quiz-rund-um-MP3-9763866.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/1/4/2/2/0/TGIQF_Thumbbaukasten_Original_29_-02fce20b4482be7b.png",
            "publishedAt": "2024-06-21T10:49:00Z",
            "content": "Karlheinz Brandenburg wurde diese Woche 70 Er war maßgeblicher Entwickler des MP3-Formats, was die Gewohnheit, wie wir Musik konsumieren, revolutionierte und die komplette Musiksammlung überall verfü… [+2134 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Florian Müssig",
            "title": "heise+ | Ausprobiert: Windows on ARM mit neuen Snapdragon-X-Prozessoren",
            "description": "Einige der neuen Windows-on-ARM-Notebooks mit Copilot+ haben sich seit deren Verkaufsstart im c't-Labor eingefunden. Wir schildern unsere ersten Eindrücke.",
            "url": "https://www.heise.de/tests/Angetestet-Die-ersten-ARM-Windows-Notebooks-mit-Snapdragon-X-Elite-und-Plus-9772647.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/1/8/8/1/3/Image__1_-06fb67adb17add62.jpg",
            "publishedAt": "2024-06-21T07:41:00Z",
            "content": "Inhaltsverzeichnis\r\nSeit Dienstag dieser Woche (18. Juni 2024) dürfen Händler Notebooks mit Qualcomms ARM-Prozessoren Snapdragon X Elite (12 Kerne) und Snapdragon X Plus (10 Kerne) verkaufen. Doch wä… [+2095 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Florian Müssig",
            "title": "Angetestet: Die ersten ARM-Windows-Notebooks mit Snapdragon X Elite und Plus",
            "description": "Einige der neuen Windows-on-ARM-Notebooks mit Copilot+ haben sich seit deren Verkaufsstart im c't-Labor eingefunden. Wir schildern unsere ersten Eindrücke.",
            "url": "https://www.heise.de/tests/Angetestet-Die-ersten-ARM-Windows-Notebooks-mit-Snapdragon-X-Elite-und-Plus-9772647.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/1/8/8/1/3/Image__1_-06fb67adb17add62.jpg",
            "publishedAt": "2024-06-21T07:41:00Z",
            "content": "Inhaltsverzeichnis\r\nSeit Dienstag dieser Woche (18. Juni 2024) dürfen Händler Notebooks mit Qualcomms ARM-Prozessoren Snapdragon X Elite (12 Kerne) und Snapdragon X Plus (10 Kerne) verkaufen. Doch wä… [+9380 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Benjamin Mayo",
            "title": "Apple Intelligence, iPhone Mirroring to Mac, and SharePlay Screen Sharing won’t be available in the EU at launch",
            "description": "Apple announced Friday that three major features for its upcoming operating systems will not be available in the European Union, when iOS 18 and macOS Sequoia ship later this year in the fall. \n\n\n\nApple Intelligence, iPhone Mirroring to macOS Sequoia, and Sha…",
            "url": "https://9to5mac.com/2024/06/21/apple-intelligence-iphone-mirroring-not-in-eu-at-launch/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/06/iphone-mirroring-apple-intelligence.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2024-06-21T17:00:04Z",
            "content": "Apple announced Friday that three major features for its upcoming operating systems will not be available in the European Union, when iOS 18 and macOS Sequoia ship later this year in the fall. \r\nAppl… [+1456 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Filipe Espósito",
            "title": "Developers can now integrate Apple Translate into their iOS apps",
            "description": "We’ve already written about the Apple Translate app coming to the Apple Watch for the first time with watchOS 11. However, there are also new features coming to Translate on iPhone and iPad. More specifically, there’s a new API available that lets developers …",
            "url": "https://9to5mac.com/2024/06/21/developers-apple-translate-api-ios/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/06/apple-translate-api.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2024-06-21T20:54:28Z",
            "content": "We’ve already written about the Apple Translate app coming to the Apple Watch for the first time with watchOS 11. However, there are also new features coming to Translate on iPhone and iPad. More spe… [+1471 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Michael Potuck",
            "title": "Apple Arcade Guide: Everything available and what’s new?",
            "description": "Apple Arcade launched with close to 100 titles and the service is seeing new games added almost every week with over 200 games now in the library. Follow along with our guide on all the available Apple Arcade games plus the latest releases.\n\n\n\n more…",
            "url": "https://9to5mac.com/2024/06/21/apple-arcade-games/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/05/apple-arcade-announces-20-new-games.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2024-06-21T15:19:00Z",
            "content": "Apple Arcade launched with close to 100 titles and the service is seeing new games added almost every week with over 200 games now in the library. Follow along with our guide on all the available App… [+108687 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Chance Miller",
            "title": "Apple says iOS 18 beta 2 will be released on Monday with two new features",
            "description": "Apple has confirmed that iOS 18 beta 2 will be available next Monday. That’s exactly two weeks after iOS 18 was announced at WWDC 2024. Notably, Apple has confirmed that there are two new features that will be available in iOS 18 beta 2: iPhone Mirroring and …",
            "url": "https://9to5mac.com/2024/06/21/ios-18-beta-2-release-date-news/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/06/ios-18-public-beta-release.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2024-06-21T20:23:26Z",
            "content": "Apple has confirmed that iOS 18 beta 2 will be available next Monday. That’s exactly two weeks after iOS 18 was announced at WWDC 2024. Notably, Apple has confirmed that there are two new features th… [+1785 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Ben Lovejoy",
            "title": "Vision Pro bug fixed; websites can no longer fill your room with bats",
            "description": "Apple has fixed a Vision Pro bug which would have allowed a website to fill your room with an unlimited number of virtual 3D objects. Those objects – flying bats in the proof of concept – would then persist even after you quit Safari.\n\n\n\nThe bug was discovere…",
            "url": "https://9to5mac.com/2024/06/21/vision-pro-bug-fixed/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/06/Vision-Pro-bug-fixed-–-no-more-bats.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2024-06-21T14:13:11Z",
            "content": "Apple has fixed a Vision Pro bug which would have allowed a website to fill your room with an unlimited number of virtual 3D objects. Those objects flying bats in the proof of concept would then pers… [+2708 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Ben Lovejoy",
            "title": "iPhone rear display and additional cameras described in Apple patent application",
            "description": "Apple has applied for a patent on a swappable hi-tech rear cover for a smartphone, with an iPhone rear display and additional cameras among the potential applications listed by the company.\n\n\n\nThe application also appears to describe a way to offer case-like …",
            "url": "https://9to5mac.com/2024/06/21/iphone-rear-display-and-additional-cameras/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/06/iPhone-rear-display-and-additional-cameras-described-in-Apple-patent-application.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2024-06-21T11:23:27Z",
            "content": "Apple has applied for a patent on a swappable hi-tech rear cover for a smartphone, with an iPhone rear display and additional cameras among the potential applications listed by the company.\r\nThe appl… [+3427 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Ben Lovejoy",
            "title": "New accessory setup in iOS 18 is good for us, and for Apple",
            "description": "When Apple first launched AirPods back in 2016, it also introduced a whole new accessory setup process, designed to avoid the usual pain point of Bluetooth pairing.\n\n\n\nFor almost eight years, it seemed like the company wanted to keep this exclusive to its own…",
            "url": "https://9to5mac.com/2024/06/21/new-accessory-setup-in-ios-18/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/06/New-accessory-setup-in-iOS-18.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2024-06-21T13:38:17Z",
            "content": "When Apple first launched AirPods back in 2016, it also introduced a whole new accessory setup process, designed to avoid the usual pain point of Bluetooth pairing.\r\nFor almost eight years, it seemed… [+3229 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Ryan Christoffel",
            "title": "Rare game sale on Mac App Store includes AAA titles and Apple Design Award winner",
            "description": "Apple Silicon has ushered in a new era for Mac gaming, with more AAA titles coming to the platform than before. Mac gaming has a long way to go, but progress is being made.\n\n\n\nToday, the Mac App Store is featuring some of its recent AAA titles as part of a bi…",
            "url": "https://9to5mac.com/2024/06/21/rare-game-sale-on-mac-app-store-includes-aaa-titles-and-apple-design-award-winner/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/06/mas-games-sale.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2024-06-21T14:07:43Z",
            "content": "Apple Silicon has ushered in a new era for Mac gaming, with more AAA titles coming to the platform than before. Mac gaming has a long way to go, but progress is being made.\r\nToday, the Mac App Store … [+426 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Chance Miller",
            "title": "Spotify adds cheaper ‘Basic’ plan that ditches audiobooks",
            "description": "After increasing its prices across the board a few weeks ago, Spotify has now announced a new “Basic” tier for $10.99 per month in the United States. This plan, Spotify says, offers all of the same Spotify Premium benefits, but without the monthly audiobook l…",
            "url": "https://9to5mac.com/2024/06/21/spotify-basic-cheaper-plan/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/06/spotify-logo-2.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2024-06-21T15:16:02Z",
            "content": "After increasing its prices across the board a few weeks ago, Spotify has now announced a new Basic tier for $10.99 per month in the United States. This plan, Spotify says, offers all of the same Spo… [+1726 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Justin Kahn",
            "title": "Friday deals: Nano-texture M4 iPad Pro all-time low at $135 off, black Magic Keyboard, M2 iPad Air, accessories, more",
            "description": "Friday has rolled back around again and Amazon has rolled back pricing on the 1TB 13-inch nano-texture glass Apple iPad Pro with M4 to its best price ever alongside ongoing offers on the more affordable models. Those deals now sit alongside the best prices we…",
            "url": "https://9to5mac.com/2024/06/21/deals-nano-texture-m4-ipad-magic-keyboard-m2/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/06/1TB-13-inch-Apple-iPad-Pro-with-M4-nano-texture-glass-deal-02.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2024-06-21T15:49:14Z",
            "content": "Friday has rolled back around again and Amazon has rolled back pricing on the 1TB 13-inch nano-texture glass Apple iPad Pro with M4 to its best price ever alongside ongoing offers on the more afforda… [+7364 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Seth Kurkowski",
            "title": "9to5Mac Daily: June 21, 2024 – Beats Solo Buds launch and more",
            "description": "Listen to a recap of the top stories of the day from 9to5Mac. 9to5Mac Daily is available on iTunes and Apple’s Podcasts app, Stitcher, TuneIn, Google Play, or through our dedicated RSS feed for Overcast and other podcast players.\n\n\n\nSponsored by FastMinder: S…",
            "url": "https://9to5mac.com/2024/06/21/9to5mac-daily-june-21-2024/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/12/9to5Mac-Daily-art-lead.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2024-06-21T15:22:32Z",
            "content": "Listen to a recap of the top stories of the day from 9to5Mac. 9to5Mac Daily is available on iTunes and Apples Podcasts app, Stitcher, TuneIn, Google Play, or through our dedicated RSS feed for Overca… [+868 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Ryan Christoffel",
            "title": "When will the next iOS 18 developer beta be released?",
            "description": "Apple released the first developer beta of iOS 18 on June 10, the same day it kicked off WWDC and unveiled all the new OS features coming later this year.\n\n\n\nIt’s been nearly two weeks since that last beta, so when will iOS 18 beta 2 be released? Here’s what …",
            "url": "https://9to5mac.com/2024/06/21/when-will-the-next-ios-18-developer-beta-be-released/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/06/iOS-18-hero-b2.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2024-06-21T16:38:27Z",
            "content": "Apple released the first developer beta of iOS 18 on June 10, the same day it kicked off WWDC and unveiled all the new OS features coming later this year.\r\nIts been nearly two weeks since that last b… [+1927 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Ben Lovejoy",
            "title": "Europe and Australia both back down on CSAM scanning that would break encryption",
            "description": "Both the EU and Australia have backed down on separate proposals to force tech companies to carry out CSAM scanning within messaging apps, which would have meant breaking end-to-end encryption.\n\n\n\nIt’s the latest development in the ongoing battle between tech…",
            "url": "https://9to5mac.com/2024/06/21/governments-back-down-on-csam-scanning/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/06/Governments-back-down-on-CSAM-scanning.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2024-06-21T12:06:45Z",
            "content": "Both the EU and Australia have backed down on separate proposals to force tech companies to carry out CSAM scanning within messaging apps, which would have meant breaking end-to-end encryption.\r\nIt’s… [+2467 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Fernando Silva",
            "title": "Upgrade your M4 iPad Pro travel carry with these accessories",
            "description": "As someone who uses their iPad Pro as their main computer, I tend to bring it with me wherever I go. One of my favorite aspects about the iPad is that it is basically a modular device without actually saying it’s modular. Between the pin connectors, Thunderbo…",
            "url": "https://9to5mac.com/2024/06/21/upgrade-your-m4-ipad-pro-travel-carry-with-these-accessories/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/06/EDC-iPad-Pro-FI.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2024-06-21T15:11:49Z",
            "content": "As someone who uses their iPad Pro as their main computer, I tend to bring it with me wherever I go. One of my favorite aspects about the iPad is that it is basically a modular device without actuall… [+6438 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Chance Miller",
            "title": "iPhone 16 Pro: Four new camera features coming this year",
            "description": "The iPhone 16 Pro lineup will bring new features such as larger displays, a dedicated Capture button, and more. We’re also expecting multiple noticeable improvements to the iPhone 16 Pro and iPhone 16 Pro Max camera hardware. Here are four things to look forw…",
            "url": "https://9to5mac.com/2024/06/21/iphone-16-pro-new-camera-features/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/03/iphone-16.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2024-06-21T18:07:24Z",
            "content": "The iPhone 16 Pro lineup will bring new features such as larger displays, a dedicated Capture button, and more. We’re also expecting multiple noticeable improvements to the iPhone 16 Pro and iPhone 1… [+3688 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Michael Potuck",
            "title": "iOS 18: How to take advantage of Game Mode on iPhone and what it does",
            "description": "iOS 18 takes gaming further with a dedicated Game Mode for iPhone and iPad. The new feature redirects system resources to maintain high frame rates, improves Bluetooth controller responsiveness and audio with AirPods, and more. Here’s how to use Game Mode on …",
            "url": "https://9to5mac.com/2024/06/21/how-to-use-game-mode-on-iphone-in-ios-18/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/06/how-to-use-game-mode-iphone-ios-18.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2024-06-21T17:42:47Z",
            "content": "iOS 18 takes gaming further with a dedicated Game Mode for iPhone and iPad. The new feature redirects system resources to maintain high frame rates, improves Bluetooth controller responsiveness and a… [+1781 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Bradley Chambers",
            "title": "HomeKit Weekly: A HomeKit door sensor is one of the most underrated devices",
            "description": "When looking to automate your home, a lot of the hype revolves around motion sensors and other devices, but I believe HomeKit door sensors are still some of the best devices to add to your Home app-backed home. I love the , as the device supports Thread techn…",
            "url": "https://9to5mac.com/2024/06/21/homekit-door-sensor/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/03/Onvis-CT3-doorwindow-sensor.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2024-06-21T18:00:00Z",
            "content": "When looking to automate your home, a lot of the hype revolves around motion sensors and other devices, but I believe HomeKit door sensors are still some of the best devices to add to your Home app-b… [+4922 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Police"
            },
            "author": "Faith Leroux",
            "title": "Apple Wallet: How to add recurring payment using Apple Cash",
            "description": "Customize your payment options with dates, dollar amounts, paying frequency options, personal memos, and icons to your contacts",
            "url": "https://www.androidpolice.com/recurring-payment-apple-wallet-tutorial/",
            "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/wm/2023/12/imessage-beeper-mini-hero-1.jpg",
            "publishedAt": "2024-06-21T06:32:12Z",
            "content": "Using digital wallets has become the norm. We enter payment information into these wallets and use the registered payment method when necessary. Google, Samsung, and Apple have incorporated digital w… [+3813 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Police"
            },
            "author": "Karandeep Singh Oberoi",
            "title": "Samsung support page confirms its high-end Galaxy Watch won't use the same old naming pattern",
            "description": "It won't be a part of the Watch 7 series",
            "url": "https://www.androidpolice.com/samsung-support-page-confirms-high-end-watch-ultra/",
            "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2024/05/galaxy-watch-7-ultra-3-leak2.jpeg",
            "publishedAt": "2024-06-21T19:39:05Z",
            "content": "Summary\r\n<ul><li> Samsung's upcoming Unpacked event will reveal a number of new devices with similar designs to their predecessors, including the Galaxy Z Fold 6 and Z Flip 6. </li><li> The Buds 3 se… [+3761 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Police"
            },
            "author": "Sanuj Bhatia",
            "title": "6 issues smart rings need to fix before they go mainstream",
            "description": "These issues ensure smart rings won't be as useful as they could be until addressed.",
            "url": "https://www.androidpolice.com/flaws-smart-rings-need-to-fix/",
            "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/wm/2024/03/ringconn-smart-ring-rugged.JPG",
            "publishedAt": "2024-06-21T12:00:12Z",
            "content": "Smart rings aren't a new territory for fitness tracking. Devices like the Oura Ring have been around for a while, but with the Samsung Galaxy Ring set to launch soon, the category is gaining populari… [+6412 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Police"
            },
            "author": "Sanuj Bhatia",
            "title": "Microsoft just announced some nice new Android integrations for Windows 11",
            "description": "You'll soon be able to control your Android directly from the Start Menu",
            "url": "https://www.androidpolice.com/microsoft-new-android-windows-11-integration/",
            "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/10/windows-AigsWJmvoEo-unsplash-1.jpg",
            "publishedAt": "2024-06-21T21:07:22Z",
            "content": "Summary\r\n<ul><li> A new feature in Windows 11 allows direct management of Android devices from the Start menu. </li><li> It is currently only available to Windows 11 Insider Preview users and gradual… [+2465 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Police"
            },
            "author": "Nathan Drescher",
            "title": "My YouTube Music recommendations are really hitting the sweet spot",
            "description": "After testing several music streaming services over the years, I'm finally happy with one. It's YouTube Music thanks to its awesome recommendations",
            "url": "https://www.androidpolice.com/youtube-music-recommendations-got-better-im-smitten/",
            "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/wm/2024/06/youtube-music-playlist-phone.png",
            "publishedAt": "2024-06-21T11:00:12Z",
            "content": "YouTube Music has unexpectedly surprised me and in a good way. It's become my go-to music streaming service, supplanting Spotify and Tidal on my phone. I find YouTube Music has an uncanny ability to … [+5577 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Police"
            },
            "author": "Karandeep Singh Oberoi",
            "title": "OnePlus is ready to unleash a new 'Pro' tablet in China, and it might be the Pad 2 we've been waiting for",
            "description": "Aiming for the top with this one",
            "url": "https://www.androidpolice.com/oneplus-tablet-pro-pad-2-to-release-june-27-china/",
            "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/04/oneplus-pad-review-01.jpg",
            "publishedAt": "2024-06-21T21:36:58Z",
            "content": "Summary\r\n<ul><li> June 27 marks the launch of the OnePlus Tablet Pro in China, hinting at a top-performance Android tablet coming to Western markets soon. </li><li> Believed to be the successor to th… [+4661 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Foo Yun Chee",
            "title": "Apple to delay launch of AI-powered features in Europe, blames EU tech rules",
            "description": "Apple will delay launching three new artificial intelligence features because landmark European Union tech rules require it to ensure that rival products and...",
            "url": "https://finance.yahoo.com/news/apple-delay-launch-ai-powered-175151369.html",
            "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/e26e3815ae3c55a5bc2de7413ed09340",
            "publishedAt": "2024-06-21T17:51:51Z",
            "content": "By Foo Yun Chee\r\nBRUSSELS (Reuters) - Apple will delay launching three new artificial intelligence features because landmark European Union tech rules require it to ensure that rival products and ser… [+1293 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Amber Neely)",
            "title": "SharePlay upgrades & iPhone Screen Mirroring coming to the betas on Monday",
            "description": "Developers will get a first look at Apple's new iPhone Mirroring and SharePlay screen sharing as soon as next week, according to an Apple spokesperson.SharePlay Screen Sharing on an iPadIt was reported earlier that Apple may not release Apple Intelligence and…",
            "url": "https://appleinsider.com/articles/24/06/21/shareplay-upgrades-iphone-screen-mirroring-coming-to-the-betas-on-monday",
            "urlToImage": "https://photos5.appleinsider.com/gallery/60140-123465-WWDC-2024----June-10-_-Apple-45-20-screenshot-xl.jpg",
            "publishedAt": "2024-06-21T20:46:42Z",
            "content": "SharePlay Screen Sharing on an iPad\r\nDevelopers will get a first look at Apple's new iPhone Mirroring and SharePlay screen sharing as soon as next week, according to an Apple spokesperson. \r\nIt was r… [+1013 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (William Gallagher)",
            "title": "Apple announces new, expanded Milton Keynes store in the UK",
            "description": "The current Apple Milton Keynes store in the UK is about close ahead of a new, expanded one opening on June 29, 2024.Apple's new Milton Keynes store is currently under wraps (Source: Midsummer Place shopping mall)Milton Keynes is in Buckinghamshire, about 50 …",
            "url": "https://appleinsider.com/articles/24/06/21/apple-announces-new-expanded-milton-keynes-store-in-the-uk",
            "urlToImage": "https://photos5.appleinsider.com/gallery/60133-123448-000-lede-Apple-Milton-Keynes-d2-xl.jpg",
            "publishedAt": "2024-06-21T11:13:45Z",
            "content": "Apple's new Milton Keynes store is currently under wraps (Source: Midsummer Place shopping mall)\r\nThe current Apple Milton Keynes store in the UK is about close ahead of a new, expanded one opening o… [+1074 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Andrew O'Hara)",
            "title": "visionOS 2 is a promising update with tons of new features",
            "description": "Less than five months after Apple Vision Pro launched, Apple has revealed visionOS 2. Here are many of the major changes coming to Apple's spatial computing headset.Vision Pro gets better with visionOS 2 this fallMost of us here at AppleInsider are big fans o…",
            "url": "https://appleinsider.com/articles/24/06/21/visionos-2-is-a-promising-update-with-tons-of-new-features",
            "urlToImage": "https://photos5.appleinsider.com/gallery/60128-123462-Vision-Pro-xl.jpg",
            "publishedAt": "2024-06-21T20:53:51Z",
            "content": "Vision Pro gets better with visionOS 2 this fall\r\nLess than five months after Apple Vision Pro launched, Apple has revealed visionOS 2. Here are many of the major changes coming to Apple's spatial co… [+5749 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Malcolm Owen)",
            "title": "Apple Intelligence & iPhone mirroring aren't coming to EU because of the DMA",
            "description": "Apple isn't releasing Apple Intelligence and other major operating system changes in the EU, because of Digital Markets Act interoperability mandates.European flagsThe biggest changes in Apple's fall operating system updates include the machine learning-based…",
            "url": "https://appleinsider.com/articles/24/06/21/apple-intelligence-iphone-mirroring-arent-coming-to-eu-because-of-the-dma",
            "urlToImage": "https://photos5.appleinsider.com/gallery/60138-123454-58116-118427-41641-80732-40207-77368-39182-74959-36715-68590-European-Commission-xl-xl-xl-xl-xl-xl.jpg",
            "publishedAt": "2024-06-21T17:18:07Z",
            "content": "European flags\r\nApple isn't releasing Apple Intelligence and other major operating system changes in the EU, because of Digital Markets Act interoperability mandates.\r\nThe biggest changes in Apple's … [+923 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (William Gallagher)",
            "title": "Deep inside iOS 18's best new features and improvements on the AppleInsider Podcast",
            "description": "It's still only in beta, and there still isn't any sign of Apple Intelligence, but after more than week with iOS 18, there's a lot of good and a little bad to say about Apple's latest iPhone operating system.Some of iOS 18's finest features are major redesign…",
            "url": "https://appleinsider.com/articles/24/06/21/deep-inside-ios-18s-best-new-features-and-improvements-on-the-appleinsider-podcast",
            "urlToImage": "https://photos5.appleinsider.com/gallery/60135-123450-000-lede-Podcast-post-xl.jpg",
            "publishedAt": "2024-06-21T12:20:32Z",
            "content": "Some of iOS 18's finest features are major redesigns like Control Center\r\nIt's still only in beta, and there still isn't any sign of Apple Intelligence, but after more than week with iOS 18, there's … [+2141 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (William Gallagher)",
            "title": "New AirPods Pro beta feature allows users to tailor noise cancellation",
            "description": "Code in the latest AirPods firmware shows Apple is working on new controls to make customizing the noise cancellation feature easier for users.Developers will be able to use the same setup steps as AirPods and AirTagsIt's possible that Apple will release new …",
            "url": "https://appleinsider.com/articles/24/06/21/new-airpods-pro-beta-feature-allows-users-to-tailor-noise-cancellation",
            "urlToImage": "https://photos5.appleinsider.com/gallery/60132-123446-000-lede-AirPods-connect-xl.jpg",
            "publishedAt": "2024-06-21T10:39:04Z",
            "content": "Developers will be able to use the same setup steps as AirPods and AirTags\r\nCode in the latest AirPods firmware shows Apple is working on new controls to make customizing the noise cancellation featu… [+2138 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Sponsored Content)",
            "title": "8 reasons for Apple users to switch to UPDF Editor: AI PDF Assistant",
            "description": "UPDF is an Adobe alternative with an AI twist for reading, annotating, searching, and editing PDFs on Mac. Save big and chat with your PDF today.UPDF Editor: AI PDF AssistantIf you work with PDFs, it can be a pain finding the right tool for the job. It's enou…",
            "url": "https://appleinsider.com/articles/24/06/21/8-reasons-for-apple-users-to-switch-to-updf-editor-ai-pdf-assistant",
            "urlToImage": "https://photos5.appleinsider.com/gallery/60107-123364-IMG_0366-xl.jpg",
            "publishedAt": "2024-06-21T10:18:24Z",
            "content": "UPDF Editor: AI PDF Assistant\r\nUPDF is an Adobe alternative with an AI twist for reading, annotating, searching, and editing PDFs on Mac. Save big and chat with your PDF today.\r\nIf you work with PDFs… [+5931 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Christine McKee)",
            "title": "Save up to $650 on Apple's latest 14-inch MacBook Pro with M3 Pro, M3 Max chip",
            "description": "Steeper discounts are in effect on Apple's current 14-inch MacBook Pro, with every M3 Pro and M3 Max configuration up to $650 off. Plus, grab a bonus discount on three years of AppleCare with coupon.Save on Apple's latest 14-inch MacBook Pro.We're tracking fr…",
            "url": "https://appleinsider.com/articles/24/06/21/save-up-to-650-on-apples-latest-14-inch-macbook-pro-with-m3-pro-m3-max-chip",
            "urlToImage": "https://photos5.appleinsider.com/gallery/60137-123457-macbook-pro-m3-pro-m3-max-deals-xl.jpg",
            "publishedAt": "2024-06-21T19:28:12Z",
            "content": "Save on Apple's latest 14-inch MacBook Pro.\r\nSteeper discounts are in effect on Apple's current 14-inch MacBook Pro, with every M3 Pro and M3 Max configuration up to $650 off. Plus, grab a bonus disc… [+1959 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Malcolm Owen)",
            "title": "Mac App Store's new game sale has big discounts on major titles",
            "description": "A bunch of big Mac games like \"Death Stranding\" and \"Resident Evil Village\" are discounted in the Mac App Store, with some being offered at well below half price.Hideo Kojima's Death Stranding is among the discounted titles in the Mac App StoreWWDC had Apple …",
            "url": "https://appleinsider.com/articles/24/06/21/mac-app-stores-new-game-sale-has-big-discounts-on-major-titles",
            "urlToImage": "https://photos5.appleinsider.com/gallery/60134-123449-56443-114621-death-stranding-directors-cut-xl-xl.jpg",
            "publishedAt": "2024-06-21T12:12:15Z",
            "content": "Hideo Kojima's Death Stranding is among the discounted titles in the Mac App Store\r\nA bunch of big Mac games like \"Death Stranding\" and \"Resident Evil Village\" are discounted in the Mac App Store, wi… [+1775 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Chip Loder)",
            "title": "How to run Xbox 360 games on macOS Sequoia",
            "description": "Upgrades in macOS Sequoia make it possible to run the Windows-based Xenia Xbox 360 emulator on your Mac. Here's how.Xbox 360 and 360 \"S\" models.Xbox 360 was the second, third, and fourth generation of Microsoft's game console which launched in 2005. There wer…",
            "url": "https://appleinsider.com/inside/macos-sequoia/tips/how-to-run-xbox-360-games-on-macos-sequoia",
            "urlToImage": "https://photos5.appleinsider.com/gallery/60064-123400-Xenia-Tsai-xl.jpg",
            "publishedAt": "2024-06-21T03:21:25Z",
            "content": "Xbox 360 and 360 \"S\" models.\r\nUpgrades in macOS Sequoia make it possible to run the Windows-based Xenia Xbox 360 emulator on your Mac. Here's how. \r\nXbox 360 was the second, third, and fourth generat… [+7921 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (William Gallagher)",
            "title": "There's a new classic arcade game streaming service coming to iPhone",
            "description": "Subscription games service Antstream Arcade is about to bring its catalog of over 1,300 retro titles to the iPhone for a low monthly fee.Retro games are coming to the iPhone (Source: Antstream Arcade)In January 2024, Apple dropped its previous stringent App S…",
            "url": "https://appleinsider.com/articles/24/06/21/theres-a-new-classic-arcade-game-streaming-service-coming-to-iphone",
            "urlToImage": "https://photos5.appleinsider.com/gallery/60136-123453-000-lede-retro-games-xl.jpg",
            "publishedAt": "2024-06-21T16:20:00Z",
            "content": "Retro games are coming to the iPhone (Source: Antstream Arcade)\r\nSubscription games service Antstream Arcade is about to bring its catalog of over 1,300 retro titles to the iPhone for a low monthly f… [+2257 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.jp"
            },
            "author": "村上タクタ",
            "title": "アップルもSiriも変わっていく。現地で見たWWDC24の「例年と違った」ところ",
            "description": "Photo:村上タクタアップルの次期OSの詳細やAppleIntelligenceが発表されたWWDC24。例年と比べるとだいぶ様子が変わってきています。現地で取材をした筆者が、今年のWWDC現地の様子をお伝えしつつ、AppleIntelligenceで何ができるかをお届けしましょう。世界のアップル系アプリ開発者の祭典WWDCWWDCっていうのは元々デベロッパー（開発者）のためのイベントなので、我",
            "url": "https://www.gizmodo.jp/2024/06/wwdc24-report.html",
            "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2024/06/20/01-1.jpeg?w=1280&h=630&f=jpg",
            "publishedAt": "2024-06-21T02:00:00Z",
            "content": "OSApple IntelligenceWWDC24\r\nWWDCApple Intelligence \r\nWWDC \r\nWWDC176,000OSOS \r\n2020 \r\n1,0001,0006,000Apple Park \r\n2022RingKeynote2017iPhoneSteve Jobs Theater \r\nNG\r\niJustineMarques Brownlee7101900YouTu… [+540 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Ian Sherr",
            "title": "Meta Is Labeling Some Real Photos As Made With AI, Report Says - CNET",
            "description": "Advanced editing software is making it increasingly hard to detect AI-generated posts.",
            "url": "https://www.cnet.com/tech/services-and-software/meta-is-labeling-some-real-photos-as-made-with-ai-report-says/",
            "urlToImage": "https://www.cnet.com/a/img/resize/30f21009622d5015c51ab2a00569d0e86b5d1d3b/hub/2024/06/21/2c88bd39-3ded-4cfa-b5d3-95080a857ac2/photography-computer.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-06-21T20:40:39Z",
            "content": "Facebook and Instagram parent Meta is reportedly struggling to detect social-media posts that have been made or manipulated with artificial intelligence, sometimes mislabeling real-life photos in the… [+2470 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yanko Design"
            },
            "author": "Gaurav Sood",
            "title": "With integrated ChatGPT, Play T 1 foldable phone is effortless to use via voice commands",
            "description": "With integrated ChatGPT, Play T 1 foldable phone is effortless to use via voice commandsWhen the mobile phone industry is swaying toward convenience and ergonomics, here’s one phone concept deviating from the norm but putting ChatGPT in your pocket....",
            "url": "https://www.yankodesign.com/2024/06/21/with-integrated-chatgpt-play-t-1-foldable-phone-is-effortless-to-use-via-voice-commands/",
            "urlToImage": "https://www.yankodesign.com/images/design_news/2024/06/with-integrated-chatgpt-play-t-1-foldable-phone-is-effortless-to-use-via-voice-commands/Play-T-1-chat-GPT-mobile-phone-8.jpg",
            "publishedAt": "2024-06-21T19:15:15Z",
            "content": "When the mobile phone industry is swaying toward convenience and ergonomics, heres one phone concept deviating from the norm but putting ChatGPT in your pocket. Well, if youve not been living under a… [+2112 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Windows Central"
            },
            "author": "kevinokemwa@outlook.com (Kevin Okemwa)",
            "title": "Anthropic rivals OpenAI's 'magical' GPT-4o with impressive vision (and a great sense of humor)",
            "description": "Anthropic unveiled Claude 3.5 Sonnet to take on GPT-4o, Gemini 1.5 Pro, and Meta’s Llama 3 400B. It spots great coding and vision capabilities and ships with a new Artifacts feature to improve the user experience.",
            "url": "https://www.windowscentral.com/software-apps/anthropic-rivals-openais-magical-gpt-4o-with-impressive-vision-and-a-great-sense-of-humor",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/rNCY8sq3Lbs4Tri4MbADh5-1200-80.jpg",
            "publishedAt": "2024-06-21T15:51:30Z",
            "content": "What you need to know\r\n<ul><li>Anthropic unveiled Claude 3.5 Sonnet, available on the web or iOS.</li><li>The model is great at interpreting complex graphs and charts, translating code, and more.</li… [+3312 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Journal du geek"
            },
            "author": "tristan carballeda",
            "title": "Apple met à jour Final Cut Pro et lance une nouvelle application sur iPhone",
            "description": "Apple vient d'annoncer la mise à jour de Final Cut Pro son logiciel de montage pour les iPad et Mac. Une application partenaire sort également sur iPhone.",
            "url": "https://www.journaldugeek.com/2024/06/21/apple-met-a-jour-final-cut-pro-et-lance-une-nouvelle-application-sur-iphone/",
            "urlToImage": "https://www.journaldugeek.com/app/uploads/2024/06/final-cut-pro-ipad.jpg",
            "publishedAt": "2024-06-21T11:34:54Z",
            "content": "Final Cut Camera, c’est le nom donné par Apple à la nouvelle application développée pour les iPhone. Selon les dires de la marque à la pomme, ce service devrait permettre aux utilisateurs des dernier… [+2601 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Journal du geek"
            },
            "author": "Julie Hay",
            "title": "Canal+ a une mauvaise nouvelle pour les abonnés Disney+",
            "description": "Canal+ informe ses abonnés d'un changement de leur offre Disney+ via les bouquets Ciné/Séries et Rat+.",
            "url": "https://www.journaldugeek.com/2024/06/21/canal-a-une-mauvaise-nouvelle-pour-les-abonnes-disney/",
            "urlToImage": "https://www.journaldugeek.com/app/uploads/2024/06/canal-plus-disney-pub.jpg",
            "publishedAt": "2024-06-21T10:02:02Z",
            "content": "Une mauvaise nouvelle peut en cacher une autre. Quelques jours après l’officialisation d’une disparition prochaine de Disney+ des offres Ciné/Séries et Rat+, Canal+ assène un nouveau coup à ses abonn… [+2489 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Theregister.com"
            },
            "author": "Thomas Claburn",
            "title": "How Europe can force Apple to support competition",
            "description": "Open Web Advocacy report calls for these extensive changes to iGiant's rules\nExclusive The results of the European Commission's inquiry into Apple's response to the continent's competition rules are expected to surface soon – and reports indicate the regulato…",
            "url": "https://www.theregister.com/2024/06/21/eu_apple_owa/",
            "urlToImage": "https://regmedia.co.uk/2024/06/21/shutterstock_apple_eu.jpg",
            "publishedAt": "2024-06-21T06:30:13Z",
            "content": "Exclusive The results of the European Commission's inquiry into Apple's response to the continent's competition rules are expected to surface soon and reports indicate the regulators are less than en… [+8756 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Applesfera.com"
            },
            "author": "Pedro Aznar",
            "title": "Apple Intelligence: La revolución con la IA de Apple que transformará tu relación con el iPhone",
            "description": "El maridaje de la IA con la tecnología es algo que se lleva fraguando desde las primeras novelas de ciencia ficción. La comunicación natural con las máquinas, sin pantallas ni más artilugios que nuestra propia voz, es la base de muchas películas y el sueño de…",
            "url": "https://www.applesfera.com/applesfera-podcast/apple-intelligence-revolucion-ia-apple-que-transformara-tu-relacion-iphone",
            "urlToImage": "https://i.blogs.es/b62d95/img_8712-copia/840_560.jpeg",
            "publishedAt": "2024-06-21T07:09:15Z",
            "content": "El maridaje de la IA con la tecnología es algo que se lleva fraguando desde las primeras novelas de ciencia ficción. La comunicación natural con las máquinas, sin pantallas ni más artilugios que nues… [+2465 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Applesfera.com"
            },
            "author": "Álvaro García M.",
            "title": "El día que Steve Jobs casi pierde el nombre \"Apple\": una historia negociación que estuvo a punto de irse al traste",
            "description": "En el origen del nombre de Apple, empresa que actualmente conocemos simplemente como \"Apple\" y anteriormente \"Apple Computers\", nos encontramos con numerosas anécdotas. De las pocas confirmadas por sus protagonistas es que Steve Jobs la eligió para salir ante…",
            "url": "https://www.applesfera.com/curiosidades/dia-que-steve-jobs-casi-pierde-nombre-apple-historia-negociacion-que-estuvo-a-punto-irse-al-traste",
            "urlToImage": "https://i.blogs.es/c01932/nombre-apple-1/840_560.jpeg",
            "publishedAt": "2024-06-21T15:01:06Z",
            "content": "En el origen del nombre de Apple, empresa que actualmente conocemos simplemente como \"Apple\" y anteriormente \"Apple Computers\", nos encontramos con numerosas anécdotas. De las pocas confirmadas por s… [+7547 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Applesfera.com"
            },
            "author": "Álvaro García M.",
            "title": "Uno de los proveedores japoneses clave de Apple ha descubierto cómo multiplicar por cinco la batería del Apple Watch. Así lo ha conseguido",
            "description": "Pocas dudas hay a estas alturas de las grandes capacidades del Apple Watch para ser nuestro compañero de batallas y ya no sólo mostrándonos notificaciones, también en el ámbito de la salud y el deporte. Sin embargo, tantos sensores como tienen, y en funcionam…",
            "url": "https://www.applesfera.com/apple-watch/uno-proveedores-japoneses-clave-apple-ha-descubierto-como-multiplicar-cinco-bateria-apple-watch-asi-ha-conseguido",
            "urlToImage": "https://i.blogs.es/ddace8/apple-watch-bateria/840_560.jpeg",
            "publishedAt": "2024-06-21T08:00:46Z",
            "content": "Pocas dudas hay a estas alturas de las grandes capacidades del Apple Watch para ser nuestro compañero de batallas y ya no sólo mostrándonos notificaciones, también en el ámbito de la salud y el depor… [+3575 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Applesfera.com"
            },
            "author": "Jesús Quesada",
            "title": "Estos descuentazos hacen que comprar un iPad o Apple Watch sea ahora mucho más barato: Cazando Gangas",
            "description": "Ya es oficialmente verano y se nota en el ambiente: mejor tiempo (más calor), los viajes a la vuelta de la esquina, los chapuzones en playas y piscinas... Si quieres irte de vacaciones estrenando dispositivo de Apple, te proponemos estas ofertas de iPhone, Ap…",
            "url": "https://www.applesfera.com/seleccion/estos-descuentazos-hacen-que-comprar-ipad-apple-watch-sea-ahora-mucho-barato-cazando-gangas",
            "urlToImage": "https://i.blogs.es/038eee/cazando-gangas/840_560.jpeg",
            "publishedAt": "2024-06-21T06:30:42Z",
            "content": "Ya es oficialmente verano y se nota en el ambiente: mejor tiempo (más calor), los viajes a la vuelta de la esquina, los chapuzones en playas y piscinas... Si quieres irte de vacaciones estrenando dis… [+4500 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Applesfera.com"
            },
            "author": "Álvaro García M.",
            "title": "\"Soy un ex empleado de Apple y esto es lo que pensábamos de la gente que compraba los dispositivos de la marca\"",
            "description": "Para muchos es el sueño de su vida, para algunos otros un trabajo más y para el resto una pesadilla. Trabajar en Apple y más en concreto en una de sus tiendas es lo que hizo el ahora tiktoker Tyler Morgan, quien no sólo aprovecha la red social para descubrir …",
            "url": "https://www.applesfera.com/curiosidades/soy-ex-empleado-apple-esto-que-pensabamos-gente-que-compraba-dispositivos-marca",
            "urlToImage": "https://i.blogs.es/6f8694/apple-store/840_560.jpeg",
            "publishedAt": "2024-06-21T09:01:01Z",
            "content": "Para muchos es el sueño de su vida, para algunos otros un trabajo más y para el resto una pesadilla. Trabajar en Apple y más en concreto en una de sus tiendas es lo que hizo el ahora tiktoker Tyler M… [+5433 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Applesfera.com"
            },
            "author": "Eduardo Archanco",
            "title": "Apple iCloud+: qué es, qué tarifas incluye y cuánto almacenamiento puedes tener",
            "description": "El servicio de almacenamiento en la nube de Apple se llama iCloud. Seguramente lo conozcas de sobra y hagas uso de sus servicios. iCloud es mucho más que almacenamiento. Te ayuda a sincronizar las notas, eventos del calendario, pestañas abiertas de Safari... …",
            "url": "https://www.applesfera.com/nuevo/icloud-caracteristicas-precios",
            "urlToImage": "https://i.blogs.es/fa666f/icloud/840_560.jpg",
            "publishedAt": "2024-06-21T14:03:40Z",
            "content": "El servicio de almacenamiento en la nube de Apple se llama iCloud. Seguramente lo conozcas de sobra y hagas uso de sus servicios. iCloud es mucho más que almacenamiento. Te ayuda a sincronizar las no… [+4150 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Applesfera.com"
            },
            "author": "Guille Lomener",
            "title": "Esto es lo que dice la DGT sobre cómo colocar tus maletas para evitar multas: cómo organizar tu equipaje y usar el iPhone para viajar más seguro",
            "description": "Comienzan las vacaciones de verano para muchas personas a lo largo del país. Por ejemplo, los jóvenes ya pueden comprar sus billetes de tren o autobús con hasta un 90% de descuento. Si por otro lado vas a ir en coche a tu destino, la DGT nos ayuda a saber cóm…",
            "url": "https://www.applesfera.com/seguridad/esto-que-dice-dgt-como-colocar-tus-maletas-para-evitar-multas-como-organizar-tu-equipaje-usar-iphone-para-viajar-seguro",
            "urlToImage": "https://i.blogs.es/4b5f45/conducir/840_560.jpeg",
            "publishedAt": "2024-06-21T14:01:04Z",
            "content": "Comienzan las vacaciones de verano para muchas personas a lo largo del país. Por ejemplo, los jóvenes ya pueden comprar sus billetes de tren o autobús con hasta un 90% de descuento. Si por otro lado … [+4832 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Applesfera.com"
            },
            "author": "Isra Fdez",
            "title": "Han encontrado una brutal referencia a Apple en 'Inside Out 2'. Cuando la veas tú también vas a quedarte del revés",
            "description": "La relación de Pixar y Apple siempre fue intensa. No en vano, sin Steve Jobs, puede que Pixar ni siquiera existiría. Pero puso dinero en aquella empresa porque confiaba en el enorme talento tras el equipo del flexo. Y Toy Story es buena prueba de ello. Sin em…",
            "url": "https://www.applesfera.com/curiosidades/han-encontrado-brutal-referencia-a-apple-inside-out-2-cuando-veas-tu-tambien-vas-a-quedarte-reves",
            "urlToImage": "https://i.blogs.es/f0fca5/inside/840_560.jpeg",
            "publishedAt": "2024-06-21T17:01:08Z",
            "content": "La relación de Pixar y Apple siempre fue intensa. No en vano, sin Steve Jobs, puede que Pixar ni siquiera existiría. Pero puso dinero en aquella empresa porque confiaba en el enorme talento tras el e… [+3113 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Applesfera.com"
            },
            "author": "Álvaro García M.",
            "title": "Robó un botín de 4.000 euros y dio esquinazo a la policía. Lo cazaron en L'Hospitalet de Llobregat gracias a unos AirPods",
            "description": "Robar tiene sus riesgos y lamentablemente muchas veces le sale bien al ladrón y en otras, ojalá cada vez más, les sale mal. Es lo que le ocurrió a principios de año a un ladrón de Barcelona que acabó siendo detenido en L'Hospitalet de Llobregat. Entre medias …",
            "url": "https://www.applesfera.com/curiosidades/robo-botin-4-000-euros-dio-esquinazo-a-policia-cazaron-lhospitalet-llobregat-gracias-a-unos-airpods",
            "urlToImage": "https://i.blogs.es/f6d839/ladron-airpods/840_560.jpeg",
            "publishedAt": "2024-06-21T16:01:06Z",
            "content": "Robar tiene sus riesgos y lamentablemente muchas veces le sale bien al ladrón y en otras, ojalá cada vez más, les sale mal. Es lo que le ocurrió a principios de año a un ladrón de Barcelona que acabó… [+2883 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Applesfera.com"
            },
            "author": "Guille Lomener",
            "title": "Esta función oculta de iOS 18 se ha vuelto una de mis favoritas. Está en Safari y reconozco que me he vuelto adicto a ella",
            "description": "La nueva versión del sistema operativo para el iPhone es especial porque se presenta en dos partes: la primera, con las novedades \"normales\" de iOS 18 que llegarán este próximo septiembre. La segunda, con todo lo relacionado con Apple Intelligence, que llegar…",
            "url": "https://www.applesfera.com/ios/esta-funcion-oculta-ios-18-se-ha-vuelto-mis-favoritas-esta-safari-reconozco-que-me-he-vuelto-adicto-a-ella",
            "urlToImage": "https://i.blogs.es/b3aca5/safari-ios-18/840_560.jpeg",
            "publishedAt": "2024-06-21T12:00:51Z",
            "content": "La nueva versión del sistema operativo para el iPhone es especial porque se presenta en dos partes: la primera, con las novedades \"normales\" de iOS 18 que llegarán este próximo septiembre. La segunda… [+2955 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <div className="conatiner d-flex justify-content-between">
                    <button disabled={this.state.page = 1} type="button" className="btn btn-dark" onclick={this.previousclick}>previous</button>
                    <button type="button" class="btn btn-dark" onclick={this.nextclick}>Next</button>
                </div>

                <h2 className="text-center">Top Heading</h2>

                <div className="row">
                    {
                        this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsUpdate title={element.title} newsurl={element.url} description={element.description.slice(0, 80)} imageurl={element.urlToImage} />

                            </div>
                        })
                    }
                </div>

                <div className="conatiner d-flex justify-content-between">
                    <button disabled={this.state.page = 1} type="button" className="btn btn-dark" onclick={this.previousclick}>previous</button>
                    <button type="button" class="btn btn-dark" onclick={this.nextclick}>Next</button>
                </div>
            </div>


        )
    }
}

export default News
