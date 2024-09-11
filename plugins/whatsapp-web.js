javascript
const whatsapp = require('whatsapp-web.js');
// Configuración del bot
const bot = new whatsapp.Client({
puppeteer: {
headless: true,
args: ['--no-sandbox', '--disable-setuid-sandbox'],
},
});
// Función para reconectar al bot
async function reconnect() {
try {
await bot.initialize();
console.log('Bot reconectado con éxito!');
} catch (error) {
console.error('Error al reconectar el bot:', error);
setTimeout(reconnect, 30000); // Reintentar conexión en 30 segundos
}
}
// Evento de desconexión
bot.on('disconnected', () => {
console.log('Bot desconectado. Reconectando...');
reconnect();
});
// Inicializar el bot
reconnect();
