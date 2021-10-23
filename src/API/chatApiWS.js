const subscribers = {
    'messages': [],
    'statusChange': []
}
let newWS;

const closeHandler = () => {
    subscribers['statusChange'].forEach(s=> s(true))
    setTimeout(createSocket, 3000)

}
const messageHandler = (e) => {
    const newMwssage = JSON.parse(e.data)
    subscribers['messages'].forEach(s => s(newMwssage))
}

const cltanUp = () => {
    newWS.removeEventListener('open', openHandler)
    newWS.removeEventListener('close', closeHandler)
    newWS.removeEventListener('message', messageHandler)
}
const openHandler = ()=>{

    subscribers['statusChange'].forEach(s=> s(false))
}

function createSocket() {
    if (!!newWS) {
        cltanUp()
        newWS.close()
    }
    newWS = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    subscribers['statusChange'].forEach(s=> s(true))
    newWS.addEventListener('close', closeHandler)
    newWS.addEventListener('open', openHandler)
    newWS.addEventListener('message', messageHandler)
}
 
export const chatAPI = {
    start() {
        createSocket()
    },
    stop() {
        subscribers['messages'] = []
        subscribers['statusChange'] = []
        newWS.close()
        cltanUp()

    },
    subscribe(eventName, callback) {
        
        subscribers[eventName].push(callback)
        return () => {
            subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
        }
    },
    unSubscribe(eventName, callback) {
        subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    },
    sendMessage(message) {
        newWS.send(message)
    }
}
