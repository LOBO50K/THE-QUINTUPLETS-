import moment from 'moment-timezone'
import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
let res = await fetch('https://github.com/LOBO50K/THE-QUINTUPLETS-git')
let json = await res.json()
try {
let txt = `*乂  S C R I P T*\n\n`
    txt += `	✩   *N̶o̶m̶b̶r̶e̶* : ${json.name}\n`
    txt += `	✩   *V̶i̶s̶i̶t̶a̶s̶* : ${json.watchers_count}\n`
    txt += `	✩   *P̶e̶s̶o̶* : ${(json.size / 1024).toFixed(2)} MB\n`
    txt += `	✩   *A̶c̶t̶u̶a̶ñ̶i̶z̶a̶d̶o̶* : ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}\n`
    txt += `	✩   *U̶R̶L̶* : ${json.html_url}\n`
    txt += `	✩   *F̶o̶r̶k̶s̶* : ${json.forks_count}\n`
    txt += `	✩   *E̶s̶t̶r̶e̶l̶l̶a̶s̶* : ${json.stargazers_count}\n\n`
    txt += `> 💞 *${textbot}*`
let img = await (await fetch(`https://tinyurl.com/247ebo9v`)).buffer()

await conn.sendAi(m.chat, botname, textbot, txt, img, img, canal, m)
} catch {
await m.react('✖️')
}}
handler.help = ['script']
handler.tags = ['main']
handler.command = ['script','sc','repo']
handler.register = true 
export default handler
