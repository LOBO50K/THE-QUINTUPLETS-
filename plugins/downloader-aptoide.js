let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
if (!args[0]) throw `\`\`\`[ ¥ ] Ingresa el nombre de la aplicación que quieres descargar. Ejemplo:\n${usedPrefix + command} WhatsApp\`\`\``
let res = await fetch(`https://api.dorratz.com/v2/apk-dl?text=${args[0]}`);
let result = await res.json();
let { name, size, lastUpdate, icon } = result;
let URL = result.dllink
let packe = result.package
let texto = `  ❯───「 𝑫𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒔 𝑵𝒂𝒌𝒂𝒏𝒐 」───❮
    💌 𝐍𝐨𝐦𝐛𝐫𝐞 : ⇢ ${name} 📩
    💟 𝐓𝐚𝐦𝐚𝐧̃𝐨 : ⇢ ${size} ⚖️
    💞 𝐏𝐚𝐜𝐤𝐚𝐠𝐞 : ⇢ ${packe} 📦
    💖 𝐀𝐜𝐭𝐮𝐚𝐥𝐢𝐳𝐚𝐝𝐨 : ⇢ ${lastUpdate} 🗓️
    
♡ *𝑷𝒐𝒓 𝒇𝒂𝒗𝒐𝒓 𝒆𝒔𝒑𝒆𝒓𝒆 𝒖𝒏 𝒎𝒐𝒎𝒆𝒏𝒕𝒐 𝒆𝒔𝒕𝒂𝒎𝒐𝒔 𝒆𝒏𝒗𝒊𝒂𝒏𝒅𝒐 𝒔𝒖 𝑨𝑷𝑲* . . .`
await conn.sendFile(m.chat, icon, name + '.jpg', texto, m)

await conn.sendMessage(m.chat, { document: { url: URL }, mimetype: 'application/vnd.android.package-archive', fileName: name + '.apk', caption: ''}, { quoted: m });
}
handler.tags = ['descargas']
handler.help = ['apkmod']
handler.command = /^(apkmod|apk|dapk2|aptoide|aptoidedl)$/i
handler.register = true
handler.estrellas = 1

export default handler
