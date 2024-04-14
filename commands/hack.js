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
const {fetchJson,cmd, tlang,sleep } = require('../lib')

//---------------------------------------------------------------------------

cmd({

            pattern: "hack",

            category: "prank",

            desc: "hacking prank",

            use: ' ',

            filename: __filename,

        },

        async(Void,citel, text) => {

citel.reply("```Injecting malware```")

await sleep(1000)

citel.reply("```hacking into device \n 0%```")

await sleep(1000)

citel.reply("```transfering photos \n █ 10%```")

await sleep(1000)

citel.reply("```transfer successful \n █ █ 20%```")

await sleep(1000)

citel.reply("```transfering videos \n █ █ █ 30%```")

await sleep(1000)

citel.reply("```transfer successful \n █ █ █ █ 40%```")

await sleep(1000)

citel.reply("```transfering audio \n █ █ █ █ █ 50%```")

await sleep(1000)

citel.reply("```transfer successful \n █ █ █ █ █ █ 60%```")

await sleep(1000)

citel.reply("```transfering hidden files \n █ █ █ █ █ █ █ 70%```")

await sleep(1000)

citel.reply("```transfer successful \n █ █ █ █ █ █ █ █ 80%```")

await sleep(1000)

citel.reply("```transfering whatsapp chat \n █ █ █ █ █ █ █ █ █ 90%```")

await sleep(1000)

citel.reply("```transfer successful \n █ █ █ █ █ █ █ █ █ █ 100%```")

await sleep(1000)

citel.reply("```System hyjacking on process.. \n Conecting to Server ```")

await sleep(1000)

citel.reply("```Divice successfully connected... \n Riciving data...```")

await sleep(1000)

citel.reply("```Data hyjacked from divice 100% completed \n killing all evidence killing all malwares...```")

await sleep(1000)

citel.reply("``` MASTER MIND IS HACKING YOUR WHATSAPP ```")

await sleep(1000)

citel.reply("``` SENDING PHONE DOCUMENTS...```")

await sleep(1000)

citel.reply("``` SUCCESSFULLY SENT DATA AND Connection disconnected```")

await sleep(1000)

            return citel.reply('*ALL FILES TRANSFERRED*');

        }

    )
