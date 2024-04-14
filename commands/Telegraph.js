
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
 
 
const { cmd }   = require('../lib');
const util = require('util');
const axios = require('axios');
cmd({
        pattern: "paste",
        desc: "create paste of text.",
        category: "user",
        filename: __filename,
    },
    async(Void, citel,text) => {
 let a = citel.quoted ? citel.quoted.text : citel.text;
let { data } = await axios.get(`https://api.telegra.ph/createPage?access_token=d3b25feccb89e508a9114afb82aa421fe2a9712b963b387cc5ad71e58722&title=DARK-SHAN-MD+Bot&author_name=kushansewmina &content=[%7B"tag":"p","children":["${a.replace(/ /g,'+')}"]%7D]&return_content=true`);
return citel.reply(`*Paste created on telegraph*\nName:-${util.format(data.result.title)}`)
    }
);

