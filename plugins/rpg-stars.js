import fetch from 'node-fetch'

let handler = async (m, {conn, usedPrefix}) => {
	
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    let name = conn.getName(who)
    if (!(who in global.db.data.users)) return conn.reply(m.chat, '🚩 El usuario no se encuentra en mi base de Datos.', m, rcanal).then(_ => m.react('✖️'))
    let img = await (await fetch(`https://f.uguu.se/LJGAUJcD.jpg`)).buffer()
    let txt = ` –  *B A L -  U S E R*\n\n`
        txt += `┌  ✩  *♧ Nombre * : ${user.name}\n`
        txt += `│  ✩  *¥ Yenes* : ${toNum(user.limit)} ( *${user.limit}* )\n`
        txt += `│  ✩  *◇ Banco* : ${toNum(user.bank)} ( *${user.bank}* )\n`
        txt += `└  ✩  *☆ exp* : ${toNum(user.exp)} ( *${user.exp}* )`
    let mentionedJid = [who]
        
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null)
}
handler.help = ['Yenes']
handler.tags = ['rpg']
handler.command = ['coins', 'wallet', 'cartera', 'Yenes', 'yenes', 'bal', 'balance']
handler.register = true 
export default handler

function toNum(number) {
    if (number >= 1000 && number < 1000000) {
        return (number / 1000).toFixed(1) + 'k'
    } else if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'M'
    } else if (number <= -1000 && number > -1000000) {
        return (number / 1000).toFixed(1) + 'k'
    } else if (number <= -1000000) {
        return (number / 1000000).toFixed(1) + 'M'
    } else {
        return number.toString()
    }
}
