let handler = async (m, { conn, command, usedPrefix }) => {
let txt = `*¿Tu Nokia es muy lento y necesitas que tu bot esté activo 24/7?* 🌑💯
¡Tenemos la solución perfecta para ti! ✨ Mantén tu bot funcionando sin interrupciones con nuestros servidores, Ofrecemos servidores gratuitos y de pago a precios súper accesibles, al alcance de todos. 🌸 
🖥️ *Totalmente compatible con YurineBot:* Disfruta al máximo de su potencial en nuestros servidores de alto rendimiento, asegurando una experiencia fluida y de alta calidad. El staff de YurineBot y Kira-Host se encarga de que disfrutes de todas sus funciones al máximo. 💯💥

━━━━━━━━》❈《 ━━━━━━━

_Precios servidores Javascript:_

* 1gb ram, 1,5gb almacenamiento, 95% CPU = $1,34 / mes
* 1,5gb ram, 2gb almacenamiento 115% CPU = $2,39 / mes
* 2gb de ram, 2,5gb almacenamiento, 125% CPU = $3,12 / mes

━━━━━━━━》❈《 ━━━━━━━

_*¡¡ATENCIÓN!!*_

_Los precios de los servidores ya vienen con comisión incluida_

━━━━━━━━》❈《 ━━━━━━━

_*METODOS DE PAGO:*_

* Yape Perú, Número: +51913776697

* Paypal, Link: https://www.paypal.me/KurodaC

* Mercado pago argentino, Alias: matias.381.mp

🍁 \`\`\`Información del Host-Akira\`\`\`

━━━━━━━━》❈《 ━━━━━━━

👑 *PáginaOFC de Akira-Host:*

https://dash.akira-host.store

━━━━━━━━》❈《 ━━━━━━━

*💯 PanelOfc De Akira-Host:*

https://panel.akira-host.store

━━━━━━━━》❈《 ━━━━━━━

💥 *Comunidad de Akira-Host WhatsApp:*

https://chat.whatsapp.com/HjYvHMNz0s1EwBl8sHs2Bj

━━━━━━━━》❈《 ━━━━━━━

🧡 *Canal de Akira-Host WhatsApp:*

https://whatsapp.com/channel/0029VajfXO7CnA7zhERSe63s

━━━━━━━━》❈《 ━━━━━━━

🗣_*CREADORES:*_

_Daniel:_
* Wa.me/+51913776697

_Matías:_
* Wa.me/+5492215034412

No esperes más y lleva tu bot al siguiente nivel con nuestro servicio de alojamiento. ¡Es fácil, rápido y económico! 💪🚀` 
await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363318492622729@newsletter', 
serverMessageId: '', 
newsletterName: 'Akira-Host 💥' }, 
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🌑 𝗔𝗞𝗜𝗥𝗔-𝗛𝗢𝗦𝗧 🌑`,
body: `¡El plus que necesitas!_`,
"previewType": "PHOTO",
thumbnailUrl: 'https://qu.ax/WgwA.jpg', 
sourceUrl: redeshost}}},
{ quoted: fkontak})
} 
handler.tags = ['main'] 
handler.help = ['host', 'hosting'] 
handler.command = ['host', 'Kira', 'Kira-Host', 'hosting']
export default handler