/**
//════════════════════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                                    //
//                                             W H A T S A P P _ U S E R _ BOT                                        //
//                                                                                                                    //
//                                                     V E R S I O N：１.0                                             //
//                                                                                                                    //
//            ███╗░░░███╗░░█████╗░░███████╗░████████░░███████╗░████████╗░░░░░░░░░░░░███╗░░░███╗░░██████╗░░░░░         //   
//            ████╗░████║░██╔══██╗░██╔════╝░╚══██║══╝░██║════╝░██╔═══██╗░░░░░░░░░░░░████╗ ████║░░██╔══██╗░░░░         //
//            ██╔████╔██║░███████║░███████╗░░░░██║░░░░███████║░███████╔╝░░███████░░░██╔████╔██║░░██║░░██║░░░░         // 
//            ██║░██║╚██║░██╔══██║░╚════██║░░░░██║░░░░██║════╝░██╔═══██╗░░╚══════╝░░██║░██░░██║░░██║░░██║░░░░         //
//            ██║░╚═╝░██║░██║░░██║░███████║░░░░██║░░░░███████║░██║░░░░██░░░░░░░░░░░░██║░╚═╝░██║░░██████╔╝░░░░         //
//            ╚═╝░░░░░╚═╝░╚═╝░░╚═╝░╚══════╝░░░░╚═╝░░░░░╚══════╝░╚═╝░░░░╚═╝░░░░░░░░░░░╚═╝░░░░░╚═╝░░╚═════╝░░░░░        //
//                                                                                                                    //
//                                 C R E A T E D _ B Y _ M R _ S A H A N _ O F C _ S L _ R G                          //  
//                                                                                                                    //
//                                                                                                                    //
//════════════════════════════════════════════════════════════════════════════════════════════════════════════════════//
 **/
const { cmd, fetchJson } = require('../lib');

cmd(
    {
        pattern: "fb",
        alias: ['facebook'],
        category:"downloader",
        react: "📽️",
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            if (!text) {
                citel.reply("*Please provide a valid URL* ✏️.");
                return;
            }

            const shan = await fetchJson(`https://kaveesha-sithum-api.cyclic.cloud/fbdl?url=${text}`);

            if (!shan.result || !shan.result.hd) {
                citel.reply("Failed to fetch video URL or HD link ❌.");
                return;
            }
            
            await Void.sendMessage(
                citel.chat,
                {
                    video: { url: shan.result.hd },
                    
                    caption:'┏━━━━━━━━━━━━━┓\n\n🐹 * MASTER MD FB VIDEO DOWNLOADER*🐹\n\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\n✷▎🎋⃟🥷 *ᴄʀᴇᴀᴛᴇʀ*: sahanmadu\n\n✷▎🎋⃟🥷 *ᴄʀᴇᴀᴛᴇʀ ɴᴜᴍʙᴇʀ*:  wa.me//+94720797915\n\n┗━━━━━━━━━━━━━┛\n\n*YOUR VIDEO IS DOWNLOADING..!*...🔥🔥'
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply("An error occurred: " + error.message);
        }
    }
);

//----------------------------------------------------------------------------------------// 
cmd({

            pattern: "fb2",

            desc: "fb down",

            react: "🎶",

            category: "downloader"

        },

        async(Void, citel, text) => {

            if (!text) return

const fbdls = await fetchJson(`https://api.botcahx.eu.org/api/dowloader/fbdown4?url=${text}&apikey=afYO6dXO}`)

const videolink = fbdls.result.audio

            citel.reply (`*Hello ${citel.pushName} I Am Finding Your Facebook Audio*`);

       return Void.sendMessage(citel.chat, {

                audio: {

                    url: videolink ,

                },

                mimetype: "audio/mpeg",

                fileName: `prabath-md-fb-song-downloader`,

            }, {

                quoted: citel,

            });

        }

    )
