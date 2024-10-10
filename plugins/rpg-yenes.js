import MessageType from '@whiskeysockets/baileys'
let impuesto = 0.02
let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'mensione al usuario *@user*'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw 'Cuantos *¥ Yenes* deseas transferir?.'
    if (isNaN(txt)) throw 'Sólo números.'
    let poin = parseInt(txt)
    let limit = poin
    let imt = Math.ceil(poin * impuesto)
    limit += imt
    if (limit < 200) throw 'Mínimo *200* ¥ Yenes.'
    let users = global.db.data.users
    if (limit > users[m.sender].limit) throw '*¥ Yenes* insuficientes para transferir.'
    users[m.sender].limit -= limit
    users[who].limit += poin
    
    await m.reply(`*${-poin}* *¥ Yenes*
Impuesto 2% : *${-imt}* *¥ Yenes*
Total gastado: *${-limit}* *¥ Yenes*`)
    conn.fakeReply(m.chat, `*+${poin}* *¥ Yenes.*`, who, m.text)
}
handler.help = ['pay *@user <cantidad>*']
handler.tags = ['rpg']
handler.command = ['pay', 'transferir']
handler.register = true 

export default handler
