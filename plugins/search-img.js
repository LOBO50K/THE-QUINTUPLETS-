import {googleImage} from '@StarlightsTeam/Scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) return conn.reply(m.chat, `*🌸 Uso Correcto: ${usedPrefix + command} Nakano NIno*`, m, rcanal);
conn.reply(m.chat, '🌸 *Descargando su imagen...*', m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: wm,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})
const res = await googleImage(text);
const image = await res.getRandom();
const link = image;
const messages = [['Imagen 1', dev, await res.getRandom(),
[[]], [[]], [[]], [[]]], ['Imagen 2', dev, await res.getRandom(), [[]], [[]], [[]], [[]]], ['Imagen 2', dev, await res.getRandom(), [[]], [[]], [[]], [[]]], ['Imagen 4', dev, await res.getRandom(), [[]], [[]], [[]], [[]]]]
await conn.sendCarousel(m.chat, `🌸 Resultado de ${text}`, '🔎 Imagen - Descargas', null, messages, m);
};
handler.help = ['ni <query>'];
handler.tags = ['buscador', 'tools', 'descargas'];
handler.command = ['si', 'ni'];
handler.register = true;
export default handler;
