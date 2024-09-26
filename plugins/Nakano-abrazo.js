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
    m.react('🥰');
    let str = `${name2} Le esta dando un fuerte abrazo a ${name}`.trim();
    if (m.isGroup){
    
    let pp = 'https://telegra.ph/file/ef3a13555dfa425fcf8fd.mp4' 
    let pp2 = 'https://telegra.ph/file/fce96960010f6d7fc1670.mp4' 
    let pp3 = 'https://telegra.ph/file/582e5049e4070dd99a995.mp4' 
    let pp4 = 'https://telegra.ph/file/ab57cf916c5169f63faee.mp4' 
    let pp5 = 'https://telegra.ph/file/ef3a13555dfa425fcf8fd.mp4' 
    let pp6 = 'https://telegra.ph/file/582e5049e4070dd99a995.mp4' 
    let pp7 = 'https://telegra.ph/file/ab57cf916c5169f63faee.mp4' 
    let pp8 = 'https://telegra.ph/file/fce96960010f6d7fc1670.mp4' 
    const videos = [pp, pp2, pp3, pp4, pp5, pp6, pp7, pp8];
    const video = videos[Math.floor(Math.random() * videos.length)];
    conn.sendMessage(m.chat, { video: { url: video }, gifPlayback: true, caption:str, mentions: [m.sender] },{ quoted: estilo })
    };
   
}

handler.help = ['abrazar @tag'];
handler.tags = ['nakano react'];
handler.command = ['abrazo','abrazar'];
handler.group = true;

export default handler;
