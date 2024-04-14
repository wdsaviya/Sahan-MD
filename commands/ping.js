/**
========================================================

██████╗░░█████╗░██████╗░██╗░░██╗
██╔══██╗██╔══██╗██╔══██╗██║░██╔╝
██║░░██║███████║██████╔╝█████═╝░
██║░░██║██╔══██║██╔══██╗██╔═██╗░
██████╔╝██║░░██║██║░░██║██║░╚██╗
╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝

░██████╗██╗░░██╗░█████╗░███╗░░██╗
██╔════╝██║░░██║██╔══██╗████╗░██║
╚█████╗░███████║███████║██╔██╗██║
░╚═══██╗██╔══██║██╔══██║██║╚████║
██████╔╝██║░░██║██║░░██║██║░╚███║
╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝

███╗░░░███╗██████╗░
████╗░████║██╔══██╗
██╔████╔██║██║░░██║
██║╚██╔╝██║██║░░██║
██║░╚═╝░██║██████╔╝
╚═╝░░░░░╚═╝╚═════╝░
========================================================
 Copyright (C) 2022.                                                                                        
 Licensed under the  GPL-3.0 License;                                                      
 You may not use this file except in compliance with the License.    
 It is supplied in the hope that it may be useful                                     
 * @project_name : DARK SHAN MD                                                                    
 * @author : kushansewmina1234 <https://github.com/kushansewmina1234>   
 * @description : DARK SHAN MD ,A Multi-functional whatsapp bot.       
 * @version 0.0.1                                                                                             
 ========================================================
 **/
 
const Secktor = require('../lib')
Secktor.cmd({
        pattern: "ping",
        desc: "To check ping",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        var inital = new Date().getTime();
        const { key } = await Void.sendMessage(citel.chat, {text: '```ᴘɪɴɢ ᴅᴀʀᴋ sʜᴀɴ ᴍᴅ..```'});
        var final = new Date().getTime();
       // await Secktor.sleep(1000)
       return await Void.sendMessage(citel.chat, {text: '_𝐷𝐴𝑅𝐾 𝑆𝐻𝐴𝑁 𝑃𝑂𝑁𝐺_\n *' + (final - inital) + ' ms* ', edit: key});
    }
);
