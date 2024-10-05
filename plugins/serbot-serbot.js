const { WAConnection } = require('@adiwajshing/baileys');

// Configuración de la conexión
const conn = new WAConnection();

// Función para reconectar
async function reconnect() {
  try {
    await conn.connect();
    console.log('Conectado');
  } catch (error) {
    console.error('Error al conectar:', error);
    setTimeout(reconnect, 5000); // Reconectar después de 5 segundos
  }
}

// Eventos de conexión
conn.on('open', () => {
  console.log('Conectado');
  // ...
  reconnect(); // Llamar a la función de reconexión
});

conn.on('close', () => {
  console.log('Desconectado');
  reconnect(); // Llamar a la función de reconexión
});

conn.on('error', (error) => {
  console.error('Error:', error);
  reconnect(); // Llamar a la función de reconexión
});

// ...

const {
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion, 
  MessageRetryMap,
  makeCacheableSignalKeyStore, 
  jidNormalizedUser,
  PHONENUMBER_MCC
 } = await import('@whiskeysockets/baileys')
import moment from 'moment-timezone'
import NodeCache from 'node-cache'
import readline from 'readline'
import qrcode from "qrcode"
import fs from "fs"
import pino from 'pino'
import * as ws from 'ws'
const { CONNECTING } = ws
import { Boom } from '@hapi/boom'
import { makeWASocket } from '../lib/simple.js'

if (global.conns instanceof Array) console.log()
else global.conns = []

let handler = async (m, { conn: _conn, args, usedPrefix, command, isOwner }) => {
  let parent = args[0] && args[0] == 'plz' ? _conn : await global.conn
  if (!((args[0] && args[0] == 'plz') || (await global.conn).user.jid == _conn.user.jid)) {
	return m.reply(`❌𝕊𝕆𝕃𝕆 𝕊𝔼 ℙ𝕌𝔼𝔻𝔼 ℙ𝔼𝔻𝕀ℝ ℂ𝕆𝔻𝕀𝔾𝕆 𝔼ℕ 𝔼𝕃 𝔹𝕆𝕋 ℙℝ𝕁ℕℂ𝕀ℙ𝔸𝕃 wa.me/${global.conn.user.jid.split`@`[0]}?text=${usedPrefix}code`)
}

  async function serbot() {

  let authFolderB = m.sender.split('@')[0]

    if (!fs.existsSync("./serbot/"+ authFolderB)){
        fs.mkdirSync("./serbot/"+ authFolderB, { recursive: true });
    }
    args[0] ? fs.writeFileSync("./serbot/" + authFolderB + "/creds.json", JSON.stringify(JSON.parse(Buffer.from(args[0], "base64").toString("utf-8")), null, '\t')) : ""

const {state, saveState, saveCreds} = await useMultiFileAuthState(`./serbot/${authFolderB}`)
const msgRetryCounterMap = (MessageRetryMap) => { };
const msgRetryCounterCache = new NodeCache()
const {version} = await fetchLatestBaileysVersion();
let phoneNumber = m.sender.split('@')[0]

const methodCodeQR = process.argv.includes("qr")
const methodCode = !!phoneNumber || process.argv.includes("code")
const MethodMobile = process.argv.includes("mobile")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (texto) => new Promise((resolver) => rl.question(texto, resolver))

const connectionOptions = {
  logger: pino({ level: 'silent' }),
  printQRInTerminal: false,
  mobile: MethodMobile, 
  browser: [ "Ubuntu", "Chrome", "20.0.04" ], 
  auth: {
  creds: state.creds,
  keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
  },
  markOnlineOnConnect: true, 
  generateHighQualityLinkPreview: true, 
  getMessage: async (clave) => {
  let jid = jidNormalizedUser(clave.remoteJid)
  let msg = await store.loadMessage(jid, clave.id)
  return msg?.message || ""
  },
  msgRetryCounterCache,
  msgRetryCounterMap,
  defaultQueryTimeoutMs: undefined,   
  version
  }

  const store = (await import('../lib/store.js')).default

  const { printBarcode } = require('../lib/qrcode.js')

  const startSock = async () => {
    const { state, saveState } = await useMultiFileAuthState(`./serbot/${authFolderB}`)
    const { version, keys, saveCreds } = state
    const { logger } = connectionOptions
    const client = makeWASocket(connectionOptions)
    store.bind(client.ev)
    client.ev.on('creds.update', saveCreds)
    client.ev.on('connection.update', async (update) => {
      const { connection, lastDisconnect, qr } = update
      if (connection === 'close') {
        const shouldReconnect = (lastDisconnect.error as Boom)?.output?.statusCode !== DisconnectReason.loggedOut
        console.log('connection closed due to ', lastDisconnect.error, ', reconnecting ', shouldReconnect)
        // reconnect if not logged out
        if(shouldReconnect) {
          await startSock()
        }
      } else if (connection === 'open') {
        console.log('opened connection')
      }
    })
    client.ev.on('messages.upsert', m => {
      console.log(JSON.stringify(m, undefined, 2))
      // ...
    })
  }
  startSock()
  }
  serbot()
}

handler.help = ['serbot']
handler.tags = ['owner']
handler.command = ['serbot']

export default handler
