let handler = async (m, { conn, isAdmin, isROwner} ) => {
    if (!(isAdmin || isROwner)) return dfail('admin', m, conn)
    global.db.data.chats[m.chat].isBanned = false
    await conn.reply(m.chat, ' ִ✧༝┉˚*❋❤❋*˚┉༝✧ ࣪𖤐◞ ꙳ ๋࣭ ⭑ `✨𝕳𝕺𝕷𝕬 𝕯𝕰 𝕹𝖀𝕰𝖁𝕺✨ੈ✩‧₊˚✧༝┉˚*❋❤❋*˚┉༝✧ .', m, rcanal)
    await m.react('✅')
}
handler.help = ['desbanearbot']
handler.tags = ['group']
handler.command = ['desbanearbot', 'unbanchat']
handler.group = true 
export default handler
