if (command == 'addyenes' || command == 'dardiamantes' || command == 'addlimit') {
const pajak = 0;
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
m.reply(`≡ *¥* ${lenguaje.owner.text19}
┏╍╍╍╍╍╍╍╍╍╍╍╍╍
┃• *𝗍᥆𝗍ᥲᥣ:* ${dmt}
┗╍╍╍╍╍╍╍╍╍╍╍╍╍`)}
