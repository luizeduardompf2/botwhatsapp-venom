import { VenomBot } from './venom.js'
import { stages, getStage } from './stages.js'

const main = async () => {
  try {
    const venombot = await VenomBot.getInstance().init({
      session: 'Delícias da Neide',
      headless: true,
      useChrome: false,
    })

    venombot.onMessage(async (message) => {
      if (message.isGroupMsg) return

<<<<<<< Updated upstream
      const currentStage = getStage({ from: message.from })
=======
function start(client) {
    client.onMessage((message) => {

      console.error(message);

      if (!message.isGroupMsg) {
          const currentStage = getStage({ from: message.from });
>>>>>>> Stashed changes

      await stages[currentStage].stage.exec({
        from: message.from,
        message: message.body,
      })
    })
  } catch (error) {
    console.error(error)
  }
}

main()
