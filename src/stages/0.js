import { storage } from '../storage.js'
import { VenomBot } from '../venom.js'
import { STAGES } from './index.js'

export const initialStage = {
  async exec({ from }) {
    storage[from].stage = STAGES.MENU

<<<<<<< Updated upstream
    const venombot = await VenomBot.getInstance()

    const message = `
      👋 Olá, como vai?
      Eu sou Carlos, o *assistente virtual* da ${venombot.getSessionName}.
      *Posso te ajudar?* 🙋‍♂️
      -----------------------------------
      1️⃣ - FAZER PEDIDO
      2️⃣ - VERIFICAR TAXA DE ENTREGA
      0️⃣ - FALAR COM ATENDENTE
    `
    await venombot.sendText({ to: from, message })
=======
    return '👋 Olá, como vai? \n\nEu sou a Rita, a *assistente virtual* da Dra. Luana Lyra. \n\n*Como posso te ajudar?* 🙋‍♂️ \n-----------------------------------\n0️⃣ - ```SOBRE A DRA LUANA LYRA``` \n1️⃣ - ```MARCAR CONSULTA```\n2️⃣ - ```MEUS AGENDAMENTOS```\n🆘 - ```EMERGÊNCIA``` ';
>>>>>>> Stashed changes
  },
}
