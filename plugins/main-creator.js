let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;ㅤㅤㅤㅤㅤ…⁠ᘛDaniel;;\nFN:ㅤㅤㅤㅤㅤ…⁠ᘛDaniel⁩\nORG:ㅤㅤㅤㅤㅤ…⁠ᘛDaniel⁩\nTITLE:\nitem1.TEL;waid=51913776697:51913776697\nitem1.X-ABLabel:ㅤㅤㅤㅤㅤ…⁠ᘛDaniel\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:ㅤㅤㅤㅤㅤ…⁠ᘛDaniel⁩\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'ㅤㅤㅤㅤㅤ…⁠ᘛDaniel⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
