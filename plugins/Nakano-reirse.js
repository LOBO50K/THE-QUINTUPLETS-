import fs from 'fs';
import path from 'path';

let handler = async (m, { conn, usedPrefix }) => {
    let who;
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
    else who = m.chat;
    if (!who) throw 'Etiqueta o menciona a alguien';

    let user = global.db.data.users[who];
    let name = conn.getName(who);
    let name2 = conn.getName(m.sender);
    m.react('😆');
    let str = `${name2} se está riendo de  ${name}`.trim();
    if (m.isGroup){
    
    let pp = 'https://files.catbox.moe/0zrnuq.mp4' 
    let pp2 = 'https://files.catbox.moe/hd569j.mp4' 
    let pp3 = 'https://files.catbox.moe/e0ybd8.mp4'
    let pp4 = 'https://files.catbox.moe/0dmyx7.mp4'
    let pp5 = 'https://files.catbox.moe/tbycri.mp4'
    const videos = [pp, pp2, pp3, pp4, pp5];
    const video = videos[Math.floor(Math.random() * videos.length)];
    conn.sendMessage(m.chat, { video: { url: video }, gifPlayback: true, caption:str, mentions: [m.sender] },{ quoted: estilo })
    };
   
}

handler.help = ['laugh  @tag'];
handler.tags = ['nakano react'];
handler.command = ['laugh','reírse','reirse'];
handler.group = true;

export default handler;
