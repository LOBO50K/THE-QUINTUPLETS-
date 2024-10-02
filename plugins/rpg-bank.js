// Handler para los comandos de banco
let handler = async (m, { conn, usedPrefix, command, text }) => {
    let user = global.db.data.users[m.sender];

    // Comando .banco
    if (command === 'banco') {
        let saldoBanco = user.banco || 0;
        let depositos = user.depositos || 0;
        let retiros = user.retiros || 0;

        let mensaje = `*【 𝙱𝙰𝙽𝙲𝙾】*\n\n` +
                      `➢ *♤ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾:* @${m.sender.split('@')[0]}\n` +
                      `➢ *¥ Yenes:* ${saldoBanco}\n` +
                      `➢ *♡ 𝙳𝙴𝙿𝙾́𝚂𝙸𝚃𝙾𝚂:* ${depositos} veces\n` +
                      `➢ *☆ 𝚁𝙴𝚃𝙸𝚁𝙾𝚂:* ${retiros} veces

                      .prestamo  para pedir un prestamo 
                      
                      𝙿𝙰𝚁𝙰 𝙳𝙴𝙿𝙾𝚂𝙸𝚃𝙰𝚁 𝚃𝚄𝚂 *¥ Yenes* 𝙴𝙽 𝙴𝙻 𝙱𝙰𝙽𝙲𝙾 𝚄𝚂𝙰 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾
                      .depositar cantidad
                      
                      𝙿𝙰𝚁𝙰 𝚁𝙴𝚃𝙸𝚁𝙰𝚁 𝙻𝙾𝚂 *¥ Yenes* 𝙳𝙴𝙻 𝙱𝙰𝙽𝙲𝙾 𝚄𝚂𝙰 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 
                      .retirar cantidad
                      
                      .top  para ver los mejores en *¥ Yenes*`;

       
        let foto = 'https://f.uguu.se/XFGDTZgt.jpg'; 

        conn.sendFile(m.chat, foto, 'banco.jpg', mensaje, m);
    }

    
    else if (command === 'depositar') {
        if (!text || isNaN(text)) return conn.reply(m.chat, `Uso: ${usedPrefix}${command} <cantidad>`, m);
        
        let cantidad = parseInt(text);
        if (cantidad <= 0) return conn.reply(m.chat, 'La cantidad debe ser mayor que 0', m);
        
        if (user.limit < cantidad) return conn.reply(m.chat, 'No tienes suficientes *¥ Yenes* para depositar', m);
        
        user.limit -= cantidad;
        user.banco = (user.banco || 0) + cantidad;
        user.depositos = (user.depositos || 0) + 1;
        
        conn.reply(m.chat, `Has depositado *¥ ${cantidad} Yenes* en tu banco. Te quedan ${user.limit} créditos en tu perfil.\n\n .banco  para ver el banco `, m);
    }

    
    else if (command === 'retirar') {
        if (!text || isNaN(text)) return conn.reply(m.chat, `Uso: ${usedPrefix}${command} <cantidad>`, m);
        
        let cantidad = parseInt(text);
        if (cantidad <= 0) return conn.reply(m.chat, 'La cantidad debe ser mayor que 0', m);
        
        if ((user.banco || 0) < cantidad) return conn.reply(m.chat, 'No tienes suficientes *¥ Yenes* en tu banco', m);
        
        user.banco -= cantidad;
        user.limit += cantidad;
        user.retiros = (user.retiros || 0) + 1;
        
        conn.reply(m.chat, `*Has retirado ${cantidad} créditos de tu banco*. Te quedan *¥ ${user.limit} Yenes* en tu perfil.\n\n .banco para ver cuantos *¥ Yenes* tienes en el banco`, m);
    }
}

handler.help = ['banco', 'depositar', 'retirar']
handler.tags = ['juegos']
handler.command = /^banco|depositar|retirar$/i
handler.group = true
handler.register = true

export default handler
