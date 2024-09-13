/*
   - torul by kenisawadev (no borrar creditos)
   - api uguu.se upload video and photos
   - limite de subida (1GB)
*/
import fs from "fs"
import fetch from "node-fetch"
import FormData from "form-data"

let handler = async m => {
  try {
    const q = m.quoted || m
    const mime = q.mediaType || ""    
    if (!/image|video|audio|sticker|document/.test(mime)) 
      throw "¡No se proporcionan medios!"
    const medio = await q.download(true)
    const PesoEnByte = fs.statSync(medio).size    
    if (PesoEnByte === 0) {
      await m.reply("archivo vacio")
      await fs.promises.unlink(medio)
      return
    }   
    if (PesoEnByte > 1073741824) {
      await m.reply("El archivo es demasiado grande, el tamaño máximo es 1 GB")
      await fs.promises.unlink(medio)
      return
    }    
    const { archivo } = await uploadUguu(medio)
    const txt = `*Link:*\n${archivo[0]?.url}`
    await m.reply(txt)
  } catch (e) {
    await m.reply(`${e}`)
  }
}

handler.help = ['tourl']
handler.tags = ['convertir']
handler.command = /^(tourl|upload)$/i
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
    throw "Subida fallida"
  }
}
