/*import moment from 'moment-timezone'
import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
let res = await fetch('https://api.github.com/repos/LOBO50K/THE-QUINTUPLETS-')
let json = await res.json()
try {
let txt = '`- 乂  S C R I P T`\n\n'
    txt += `	•   *𝕹𝖔𝖒𝖇𝖗𝖊* : ${json.name}\n`
    txt += `	•   *𝖁𝖎𝖘𝖎𝖙𝖆𝖘* : ${json.watchers_count}\n`
    txt += `	•   *𝕻𝖊𝖘𝖔* : ${(json.size / 1024).toFixed(2)} MB\n`
    txt += `	•   *𝕬𝖈𝖙𝖚𝖆𝖑𝖎𝖟𝖆𝖉𝖔* : ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}\n`
    txt += `	•   *𝖚𝖗𝖑* : ${json.html_url}\n`
    txt += `	•   *𝕱𝖔𝖗𝖐𝖘* : ${json.forks_count}\n`
    txt += `	•   *𝕾𝖙𝖆𝖗𝖘* : ${json.stargazers_count}\n\n`
    txt += `> 💌 *${textbot}*`
let img = await (await fetch(`https://tinyurl.com/26ehamvg`)).buffer()

await conn.sendAi(m.chat, botname, textbot, txt, img, img, canal, m)
} catch {
await m.react('✖️')
}}
handler.help = ['script']
handler.tags = ['main']
handler.command = ['script', 'sc', 'repo', 'repository']
handler.register = true 
export default handler */
