let handler = async (m, { conn, isAdmin, isROwner }) => {
    if (!(isAdmin || isROwner)) return dfail('admin', m, conn)
    global.db.data.chats[m.chat].isBanned = true
    await conn.reply(m.chat, ` ˚₊· ͟͟͞͞➳❥ 🌄⚘ 🍪  🍰  𝐻𝒜𝒮𝒯𝒜 𝐿𝒰𝐸𝒢❁  🎀  🍪 🌄⚘.`, m, rcanal)
    await m.react('✅')
}
handler.help = ['banearbot']
handler.tags = ['group']
handler.command = ['banearbot', 'banchat']
handler.group = true 
export default handler
