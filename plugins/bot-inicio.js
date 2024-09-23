let handler = async (m, { conn, command, usedPrefix }) => {
let pp = menusImgs4.getRandom()
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado = `Hola, bienvenido usuario/a
seleccione los botones de abajo.`
await conn.sendButton(m.chat, estado, `😃 𝗥𝗘𝗖𝗨𝗘𝗥𝗗𝗔 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗔𝗥𝗧𝗘 𝗖𝗢𝗡:\nAutoVerify\n🥳 𝗗𝗶𝘀𝗳𝗿𝘂𝘁𝗮 𝗱𝗲𝗹 𝗯𝗼𝘁 💯\n` + nameN3 + '\n' + nameNN2, pp, [
['🍁 𝗠𝗲𝗻𝘂 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗼 🍁', '.allmenu'],
['🌎 𝗘𝘀𝘁𝗮𝗱𝗼 🌎', '/estado'],
['✅ 𝗔𝘂𝘁𝗼𝗩𝗲𝗿𝗶𝗳𝘆 ✅', '#reg NilouBot.19']], null,
['EnzitoOfc', `${creador}`]], m)
}
handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(menu)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}