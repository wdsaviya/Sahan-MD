const { cmd } = require('../lib')
const { IOSNEWS } = require('ios-news')

cmd({
        pattern: "ios",
        category: "news",
        react: "📰",

        filename: __filename
    },
    async(Void, citel,text) => {
      const data = await IOSNEWS()
      const ios = data.latest()
      

      const kushan = `🗞️ *DARK SHAN MD IOS NEWS*\n
      ⌨️ TITLE ${data.ios.result.title}\n\n
      💎 DESCRIPTION ${data.ios.result.desc}\n\n
      🎗️ LINK ${data.ios.result.link}\n\n
©️ POWER BY DARK SHAN MD`

    await Void.sendMessage(citel.chat, { image: { url: data.ios.result.images }, caption: kushan }, { quoted: citel })

    })
