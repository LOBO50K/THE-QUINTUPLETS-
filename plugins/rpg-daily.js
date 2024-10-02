const free = 5000
const prem = 10000
const cooldowns = {}

let handler = async (m, { conn, isPrems }) => {
  let user = global.db.data.users[m.sender]
  const tiempoEspera = 24 * 60 * 60
  if (cooldowns[m.sender] && Date.now() - cooldowns[m.sender] < tiempoEspera * 1000) {
    const tiempoRestante = segundosAHMS(Math.ceil((cooldowns[m.sender] + tiempoEspera * 1000 - Date.now()) / 1000))
    conn.reply(m.chat, `᪥ Ya has realizado tu pedido gratis de hoy.\nRecuerda que solo puedes realizarlo 1 vez cada 24 horas.\n\n*Próximo Monto* : +${isPrems ? prem : free} 💴 Zenis\n*En* : ⏱ ${tiempoRestante}`, m, rcanal)
    return
  }

  global.db.data.users[m.sender].limit += isPrems ? prem : free
  conn.reply(m.chat, `᪥ Felicidades , reclamaste +${isPrems ? prem : free} *Yenes*.`, m, rcanal)

  cooldowns[m.sender] = Date.now()
}

handler.help = ['claim']
handler.tags = ['rpg']
handler.command = ['daily', 'claim']
handler.register = true

export default handler

function segundosAHMS(segundos) {
  const horas = Math.floor(segundos / 3600)
  const minutos = Math.floor((segundos % 3600) / 60)
  const segundosRestantes = segundos % 60
  return `${horas} horas, ${minutos} minutos y ${segundosRestantes} segundos`;
}
