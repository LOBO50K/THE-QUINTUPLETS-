import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch(`https://i.ibb.co/jGsgr5M/file.jpg`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `【H】【O】【L】【A】  ฅ^•ﻌ•^ฅ

1-Grupo
🅽🅰︎🅺🅰︎🅽🅾︎ 🆇 🅶🆁🆄🅿︎🅾︎🆂 
*✰* ${group}

*─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ*

➠ 𝑺𝒊 𝒆𝒍 𝒆𝒏𝒍𝒂𝒄𝒆 𝒏𝒐 𝒇𝒖𝒏𝒄𝒊𝒐𝒏𝒂 𝒆𝒏𝒕𝒓𝒆 𝒂𝒒𝒖𝒊 ⬃

2.-🅲🅰︎🅽🅰︎🅻 :
𝑻𝒆𝒂𝒎 𝒏𝒂𝒌𝒂𝒏𝒐
*✰* ${canal}

> 🚩 ${textbot}`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = /^(grupos)$/i
export default handler
