import db from '../lib/database.js'
import { createHash } from 'crypto'
import fs from 'fs'
import fetch from 'node-fetch'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) return m.reply(`🚩 Ya estás registrado.\n\n*¿Quiere volver a registrarse?*\n\nUse este comando para eliminar su registro.\n*${usedPrefix}unreg* <Número de serie>`)
  if (!Reg.test(text)) return m.reply(`🚩 Formato incorrecto.\n\nUso del comamdo: *${usedPrefix + command} nombre.edad*\nEjemplo : *${usedPrefix + command} ${name2}.16*`)
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) return m.reply('🚩 El nombre no puede estar vacío.')
  if (!age) return m.reply('🚩 La edad no puede estar vacía.')
  if (name.length >= 100) return m.reply('🚩 El nombre es demasiado largo.' )
  age = parseInt(age)
  if (age > 100) return m.reply('👴🏻 Wow el abuelo quiere jugar al bot.')
  if (age < 5) return m.reply('🚼  hay un abuelo bebé jsjsj. ')
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let img = await (await fetch(`https://tinyurl.com/29jprgkw`)).buffer()
  let txt = ` –  *💞 𝑹 𝑬 𝑮 𝑰 𝑺 𝑻 𝑹 𝑨 𝑫 𝑶 💞*\n\n`
      txt += ` ‧̍̊·̊‧̥°̩̥˚̩̩̥͙°̩̥‧̥·̊‧̍̊ ♡ °̩̥˚̩̩̥͙°̩̥ ·͙*̩̩͙˚̩̥̩̥*̩̩̥͙·̩̩̥͙*̩̩̥͙˚̩̥̩̥*̩̩͙‧͙ °̩̥˚̩̩̥͙°̩̥ ♡ ‧̍̊·̊‧̥°̩̥˚̩̩̥͙°̩̥‧̥·̊‧̍̊`
      txt += `     * . °•★|•°∵∵°•|☆•° . *`
      txt += `┌  ·˚ ༘₊·꒰➳: ̗̀➛  *𝑵𝒐𝒎𝒃𝒓𝒆* : ${name}\n`
      txt += `│  ·˚ ༘₊·꒰➳: ̗̀➛  *𝑬𝒅𝒂𝒅* : ${age} años\n`
      txt += `│  ·˚ ༘₊·꒰➳: ̗̀➛  *𝑵𝒖𝒎𝒆𝒓𝒐 𝒅𝒆 𝒔𝒆𝒓𝒊𝒆*\n`
      txt += `└  ·˚ ༘₊·꒰➳: ̗̀➛  ${sn}`
      txt += `   ⁺˚*•̩̩͙✩•̩̩͙*˚⁺‧͙⁺˚*•̩̩͙✩•̩̩͙*˚⁺‧͙⁺˚*•̩̩͙✩•̩̩͙*˚⁺‧͙`
      txt += ` 𝑵𝒐 𝒐𝒍𝒗𝒊𝒅𝒆𝒔 𝒂𝒑𝒐𝒚𝒂𝒓𝒏𝒐𝒔 𝒔𝒊𝒈𝒖𝒊𝒆𝒏𝒅𝒐 𝒏𝒖𝒆𝒂𝒕𝒓𝒐 𝒄𝒂𝒏𝒂𝒍`
      txt += ` https://whatsapp.com/channel/0029VaXDEwlC1FuFm82otA0K `
      txt += ` ↻ ◁ II ▷ ↺ 1:35 ───ㅇ───── 3:47`
await conn.sendAi(m.chat, botname, textbot, txt, img, img, canal, m)
await m.react('✅')
}
handler.help = ['reg'].map(v => v + ' *<nombre.edad>*')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'registrar'] 

export default handler
