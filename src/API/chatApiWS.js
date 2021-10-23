let subscribers = null 
let newWS;

const closeHandler = () => {
    setTimeout(createSocket, 3000)
}
const messageHandler = (e) => {
    const newMwssage = JSON.parse(e.data)
    subscribers(newMwssage)
    //subscribers.forEach(s => s(newMwssage))
}
function createSocket() {
    if (!!newWS) {
        newWS.removeEventListener('close', closeHandler)
        newWS.close()
    }
    newWS = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    newWS.addEventListener('close', closeHandler)
    newWS.addEventListener('message', messageHandler)
}

export const chatAPI = {
    start() {
        createSocket()
    },
    stop() {
        newWS.close()
        newWS.removeEventListener('close', closeHandler)
        newWS.removeEventListener('message', messageHandler)

    },
    subscribe(callback) {
        subscribers = callback
        return () => {
            subscribers = null //subscribers.filter(s => s !== callback)
        }
    },
    unSubscribe(callback) {
        subscribers = null//subscribers.filter(s => s !== callback)
    },
    sendMessage(message) {
        newWS.send(message)
    }
}
