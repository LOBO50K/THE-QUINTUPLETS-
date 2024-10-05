import db from '../lib/database.js'
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner, usedPrefix, command }) => {
	
	if (!text) return m.reply(`🚩 Ingresa el enlace del Grupo.`)
    let [_, code, expired] = text.match(linkRegex) || []
    if (!code) return m.reply('🚩 Enlace invalido.')
    let res = await conn.groupAcceptInvite(code)
    expired = Math.floor(Math.min(999, Math.max(1, isOwner ? isNumber(expired) ? parseInt(expired) : 0 : 3)))
    m.reply(`🚩 Me uní correctamente al Grupo *${res}${expired ? `* Durante *${expired}* días.` : ''}`)
    let chats = global.db.data.chats[res]
    if (!chats) chats = global.db.data.chats[res] = {}
    if (expired) chats.expired = +new Date() + expired * 1000 * 60 * 60 * 24
    let pp = 'https://f.uguu.se/YCdNbzQM.mp4'
   await conn.sendMessage(res, { video: { url: pp }, gifPlayback: true, caption: ' *✎𝑯𝒐𝒍𝒂 𝒔𝒐𝒚 𝒊𝒕𝒔𝒖𝒌𝒊 𝒖𝒏𝒂 𝒅𝒆 𝒍𝒂𝒔 𝒄𝒊𝒏𝒄𝒐 𝒉𝒆𝒓𝒎𝒂𝒏𝒂𝒔 𝒏𝒂𝒌𝒂𝒏𝒐, 𝒚 𝒂𝒉𝒐𝒓𝒂 𝒆𝒔𝒕𝒐𝒚 𝒆𝒏 𝒔𝒖 𝒈𝒓𝒖𝒑𝒐*.', mentions: [m.sender] }, { quoted: estilo })
}
handler.help = ['join *<link> <días>*']
handler.tags = ['owner']

handler.command = ['join', 'entrar'] 
handler.owner = true

export default handler

const isNumber = (x) => (x = parseInt(x), typeof x === 'number' && !isNaN(x))
