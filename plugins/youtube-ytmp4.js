import Starlights from '@StarlightsTeam/Scraper'
import fetch from 'node-fetch' 
let limit = 100

let handler = async (m, { conn: star, args, text, isPrems, isOwner, usedPrefix, command }) => {
if (!args[0].match(/youtu/gi)) return star.reply(m.chat, '🚩 Ingresa el enlace del vídeo de YouTube junto al comando.\n\n`Ejemplo:`\n' + `> *${usedPrefix + command}* https://youtu.be/QSvaCSt8ixs`, m, rcanal)

await m.react('🕓')
try {
let { title, size, quality, thumbnail, dl_url } = await Starlights.ytmp4(args[0])

let img = await (await fetch(`${thumbnail}`)).buffer()
if (size.split('MB')[0] >= limit) return star.reply(m.chat, `El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, rcanal).then(_ => m.react('✖️'))
	let txt = '`乂  Y O U T U B E  -  M P 4`\n\n'
       txt += `	✩   *Titulo* : ${title}\n`
       txt += `	✩   *Calidad* : ${quality}\n`
       txt += `	✩   *Tamaño* : ${size}\n\n`
       txt += `> *- ↻ El vídeo se esta enviando espera un momento, soy lenta. . .*`
await star.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, rcanal)
await star.sendMessage(m.chat, { video: { url: dl_url }, caption: `${title}`, mimetype: 'video/mp4', fileName: `${title}` + `.mp4`}, {quoted: m })
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['ytmp4 *<link yt>*']
handler.tags = ['downloader']
handler.command = ['ytmp4', 'ytv', 'yt']
//handler.limit = 1
handler.register = true 

export default handler

const fetch = require("node-fetch")

module.exports = {

  name: "ytmp4",

  alias: ["youtubemp4", "youtubeaudio", "ytv", "ytvideo"],

  category: "downloader",

  use: "<link>",

  example: "%cmd https://youtube.com/",

  cooldown: 5,

  isSpam: true,

  isQuery: true,

  async run({ msg, conn }, { query }) {

      var ggapi = `https://api.dorratz.com/ytdl/ytmp4-mp3?url=${encodeURIComponent(query)}`



  const response = await fetch(ggapi)

  if (!response.ok) {

    console.log('Error searching for song:', response.statusText)

    throw 'Error searching for song'

  }

  const data = await response.json()

  if (!data.status) {

    throw '❎ Error: ' + data.msg

  }



  const caption = `✼ ••๑⋯❀ Y O U T U B E ❀⋯⋅๑•• ✼

	  

  ❏ Title: ${data.data.title}

  ❒ Link: ${query}

  ⊱─ BY DIEGO-OFC </> ⊰━─⊰`



  let vres = data.data.video.url 



  let vid = await fetch(vres)

  const vidBuffer = await vid.buffer()



  conn.sendFile(msg.from, vidBuffer, `error.mp4`, caption, msg, false, { asDocument: chat.useDocument })

    }

}
