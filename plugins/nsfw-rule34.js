import Starlights from "@StarlightsTeam/Scraper"

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].nsfw) return conn.reply(m.chat, `❍⌇─➭ 𝑵𝒐 𝒆𝒔𝒕𝒂 𝒑𝒆𝒓𝒎𝒊𝒕𝒊𝒅𝒐 𝒆𝒍 𝑵𝑺𝑭𝑾 𝒆𝒏 𝒆𝒔𝒕𝒆 𝒈𝒓𝒖𝒑𝒐﹀﹀︵↷.*\n\n> ∴.·:*¨¨*:·. ☙.·:*¨ ¨*:·.♡ .·:*¨ ¨*:·. ❧.·:*¨ ¨*:·.∴𝑺𝒐𝒍𝒐 𝒖𝒏 𝒂𝒅𝒎𝒊𝒏 𝒍𝒐 𝒑𝒖𝒆𝒅𝒆 𝒂𝒄𝒕𝒊𝒗𝒂𝒓 𝒖𝒔𝒂𝒏𝒅𝒐 𝒆𝒍 /𝑶𝑵 𝑵𝑺𝑭𝑾∴.·:*¨¨*:·. ☙.·:*¨ ¨*:·.♡ .·:*¨ ¨*:·. ❧.·:*¨ ¨*:·.∴`, m, rcanal)
if (!text) return m.reply(' .˚₊‧༉︶︶︶︶︶︶︶︶︶༉‧₊˚.𝑯𝒐𝒍𝒂 𝒑𝒆𝒓𝒗𝒆𝒓𝒕𝒊𝒅𝒐,𝒒𝒖𝒆 𝒊𝒎𝒂𝒈𝒆𝒏 𝒃𝒖𝒔𝒄𝒂𝒔?.˚₊‧༉︶︶︶︶︶︶︶︶︶༉‧₊˚..')
await m.react('🕓')
try {
let { dl_url } = await Starlights.rule34(text)
await conn.sendFile(m.chat, dl_url, 'thumbnail.jpg', `*» Resultado* : ${text}`, m, null, rcanal)
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['rule34 *<búsqueda>*']
handler.tags = ['nsfw']
handler.command = ['rule34', 'r34']
handler.register = true 
//handler.limit = 20
handler.group = true 
export default handler
