import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch(`https://i.ibb.co/b2JSVHF/file.jpg`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `*Hola!, te invito a unirte a los grupos oficiales de del Bot para convivir con la comunidad :D*

1-Grupo
【 🔰𝘾𝙤𝙢𝙪𝙣𝙞𝙩𝙮 𝙉𝙚𝙭𝙪𝙨 𝙃𝙤𝙨𝙩🔰  】
*✰* ${group}

*─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ*

➠ Enlace anulado? entre aquí! 

2.-Canal :
🔰𝘾𝙤𝙢𝙪𝙣𝙞𝙩𝙮 𝙉𝙚𝙭𝙪𝙨 𝙃𝙤𝙨𝙩🔰
*✰* ${canal}

> 🚩 ${textbot}`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = /^(grupos)$/i
export default handler
