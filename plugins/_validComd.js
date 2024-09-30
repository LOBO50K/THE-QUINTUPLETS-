import didyoumean from 'didyoumean'
import similarity from 'similarity'

export async function before(m, { conn, match, usedPrefix, command }) {
	
if ((usedPrefix = (match[0] || '')[0])) {
let noPrefix = m.text.replace(usedPrefix, '')
let args = noPrefix.trim().split` `.slice(1)
let text = args.join` `
let help = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
if (help.includes(noPrefix)) return
let mean = didyoumean(noPrefix, help)
let sim = similarity(noPrefix, mean)
let som = sim * 100
await conn.sendPresenceUpdate('composing', m.chat)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let caption = `*☁  Hola* @${who.split('@')[0]}
ʕ·ᴥ·ʔ𝑬𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒏𝒐 𝒆𝒙𝒊𝒔𝒕𝒆, 𝒑𝒆𝒓𝒐 𝒔𝒆 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒂𝒓𝒐𝒏 𝒓𝒆𝒔𝒖𝒍𝒕𝒂𝒅𝒐𝒔 𝒔𝒊𝒎𝒊𝒍𝒂𝒓𝒆𝒔
 ☁ *${usedPrefix + mean}*
 ☁ *Similitud:* _${parseInt(som)}%_`
if (mean) conn.reply(m.chat, caption, m, { mentions: [who]})
}
  }
