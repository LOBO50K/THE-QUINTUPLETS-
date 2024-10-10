import MessageType from '@whiskeysockets/baileys'
let impuesto = 0.02
let handler = async (m, { conn, text }) => {
   let who;
if (m.isGroup) who = m.mentionedJid[0];
else who = m.chat;
if (!who) return m.reply(lenguaje.owner.text15)   
const txt = text.replace('@' + who.split`@`[0], '').trim();
if (!txt) return m.reply(lenguaje.owner.text16)   
if (isNaN(txt)) return m.reply(lenguaje.owner.text17)   
const dmt = parseInt(txt);
let limit = dmt;
const pjk = Math.ceil(dmt * pajak);
limit += pjk;
if (limit < 1) return m.reply(lenguaje.owner.text18) 
const users = global.db.data.users;
users[who].limit += dmt;
m.reply(`≡ 💎 ${lenguaje.owner.text19}
`
}
handler.help = ['darstars *@user <cantidad>*']
handler.tags = ['rpg']
handler.command = ['darcoins', 'darstars']
handler.register = true 

export default handler
