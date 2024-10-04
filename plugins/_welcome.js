import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://tinyurl.com/238t2yav')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]

  if (chat.bienvenida && m.messageStubType == 27) {
    let bienvenida = `\n ᪥ *Bienvenido* a\n ᪥ *${groupMetadata.subject}* \n \n ᪥ @${m.messageStubParameters[0].split`@`[0]}\n> Puedes usar #menu/#help para ver la lista de comandos`
    
await conn.sendAi(m.chat, botname, textbot, bienvenida, img, img, canal, estilo)
  }
  
  if (chat.bienvenida && m.messageStubType == 28) {
    let bye = `\n᪥ *Hasta pronto*\n᪥ *${groupMetadata.subject}*\n \n `
await conn.sendAi(m.chat, botname, textbot, bye, img, img, canal, estilo)
  }
  
  if (chat.bienvenida && m.messageStubType == 32) {
    let kick = `\n᪥ *Hasta pronto*\n᪥ *${groupMetadata.subject}*\n\n`
await conn.sendAi(m.chat, botname, textbot, kick, img, img, canal, estilo)
}}
