import { igdl } from 'ruhend-scraper'

const handler = async (m, { text, conn, args, usedPrefix, command }) => {
if (!args[0]) {
return conn.reply(m.chat, '🍟 *Ingresa Un Link De Facebook*', m, rcanal)}
let res
try {
conn.reply(m.chat, `𖤛 *𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐧𝐝𝐨 𝐬𝐮 𝐯𝐢𝐝𝐞𝐨 𝐝𝐞 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐞𝐬𝐩𝐞𝐫𝐞...*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: wm,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})
await m.react(rwait)
res = await igdl(args[0])
} catch {
await m.react(error)
return conn.reply(m.chat, '🚩 *Error al obtener datos. Verifica el enlace.*', m, fake)}
let result = res.data
if (!result || result.length === 0) {
return conn.reply(m.chat, '🚩 *No se encontraron resultados.*', m, fake)}
let data
try {
await m.react(rwait)
data = result.find(i => i.resolution === "720p (HD)") || result.find(i => i.resolution === "360p (SD)")
} catch {
await m.react(error)
return conn.reply(m.chat, '🚩 *Error al procesar los datos.*', m, rcanal)}
if (!data) {
return conn.reply(m.chat, '🚩 *No se encontró una resolución adecuada.*', m, rcanal)}
let video = data.url
try {
await m.react(rwait)
await conn.sendMessage(m.chat, { video: { url: video }, caption: '🍟 *Tu video de facebook.*\n' + textbot, fileName: 'fb.mp4', mimetype: 'video/mp4' }, { quoted: fkontak })
await m.react(done)
} catch {
await m.react(error)
return conn.reply(m.chat, '🚩 *Error al enviar el video.*', m, rcanal)}}

handler.help = ['facebook', 'fb']
handler.tags = ['descargas']
handler.command = ['facebook', 'fb']
handler.cookies = 1
handler.register = true

export default handler