import { mediafiredl } from '@bochilteam/scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return conn.reply(m.chat, 'ingresa Un Link De Mediafire', m)
let mf = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = mf
let Jt = `*Nombre:* ${filename}
*Tamaño:* ${filesizeH}
*Extension:* ${ext}
*Subido:* ${aploud}`.trim()
m.reply(Jt)
await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
}


handler.command =['mediafire']

export default handler
