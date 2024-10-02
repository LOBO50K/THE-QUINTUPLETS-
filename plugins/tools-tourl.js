import fs from "fs"
import fetch from "node-fetch"
import FormData from "form-data"
const { proto, generateWAMessageFromContent } = (await import('@whiskeysockets/baileys')).default;


let handler = async m => {
  try {
    const q = m.quoted || m
    const mime = q.mediaType || ""    
    if (!/image|video|audio|sticker|document/.test(mime)) 
      throw "No hay medios marcados!"
          await conn.sendMessage(m.chat, { react: { text: '🔗', key: m.key } });
    const media = await q.download(true)
    const fileSizeInBytes = fs.statSync(media).size    
    if (fileSizeInBytes === 0) {
      await m.reply("Archivo vacio")
      await fs.promises.unlink(media)
      return
    }   
    if (fileSizeInBytes > 1073741824) {
      await m.reply("El archivo superó 1 GB")
      await fs.promises.unlink(media)
      return
    }    
    const { files } = await uploadUguu(media)
    const caption = "`U G U U - U P L O A D`"
        let buttonMessage = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: { text: caption },
                    nativeFlowMessage: {
                        buttons: [{
                "name": "cta_copy",
                "buttonParamsJson": JSON.stringify({
                "display_text": "Copiar Link",
                "copy_code": `${files[0]?.url}`
                })
              },],
                    }
                })
            }
        }
    }, { quoted: m });

    await conn.relayMessage(m.chat, buttonMessage.message, {});
    await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
//    await m.reply(caption)
  } catch (e) {
//    await m.reply(`${e}`)
    await conn.sendMessage(m.chat, { react: { text: '❎', key: m.key } });
  }
}

handler.help = ["tourl"]
handler.tags = ["tools"]
handler.command = /^(tourl)$/i
export default handler

async function uploadUguu(path) {
  try {
    const form = new FormData()
    form.append("files[]", fs.createReadStream(path))   
    const res = await fetch("https://uguu.se/upload.php", {
      method: "POST",
      headers: form.getHeaders(),
      body: form
    })    
    const json = await res.json()
    await fs.promises.unlink(path)   
    return json
  } catch (e) {
    await fs.promises.unlink(path)
    throw "Error"
  }
}
