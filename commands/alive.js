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

 var alivemessage = `*HELLO IM MASTER MD*
 
_IM MULTI DEVICE WHATSAPP BOT_ 

_If any query : wa.me/94720797915_


*_Update Alive Message by adding text with Alive_*
*Eg: _.alive Your_Alive_Message_*`;
  





 const { tlang, ffmpeg,cmd ,alive,botpic} = require('../lib')

 cmd({
    pattern: "alive",
    category: "general",
    filename: __filename,
    desc: "is bot alive??"
},
async(Suhail, msg, text, {isCreator}) => {
  let get = text;
let urll = '';     
  let image = false;
  let video = false;
  
if(isCreator && text){
let aliv = await alive.findOne({ id:"Suhail_Md" }) || await new alive({ id:"Suhail_Md"}).save();
if (text.startsWith("get")) return msg.reply(aliv.get);

const linkPattern = /(https?:\/\/\S+)/gi;
const imageExtensions = ['.jpg', '.jpeg', '.png'];
const videoExtensions = ['.mp4', '.avi', '.mov', '.mkv', '.gif'];
let match = text.match(linkPattern) || false ; 
if(match)
{
    let i = 0;
    while (i < match.length && !image && !video ) 
    {
          urll = match[i];
          const extension = urll.substring(urll.lastIndexOf('.')).toLowerCase();
          if (imageExtensions.includes(extension)) { image = true;  video = false; } 
          else if (videoExtensions.includes(extension)) { video = true; image = false; }
          else { console.log(`Unknown link: ${urll}`)  }
          i++;
    }
}
if( video || image) { text = text.replace(urll, ''); }
await alive.updateOne({ id: 'Suhail_Md' }, { text: text, get : get, url: urll,  image: image,   video: video });
}
let aliv = await alive.findOne({ id:"Suhail_Md" }) || await new alive({ id:"Suhail_Md"}).save() ; 


alivemessage = aliv.text || "";
 

  image = aliv.image || false;
  video=aliv.video || false ;
  urll = aliv.url || await botpic() ;

  

const messageOptions = image ? { image: { url: urll }, caption: alivemessage } : video? { video: { url: urll },gifPlayback: true, caption: alivemessage } : {  text: alivemessage }

Suhail.sendMessage(msg.chat, messageOptions,{quoted : msg });
}
)

