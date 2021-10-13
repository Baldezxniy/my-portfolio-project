import MessageBody from './../MessageMessage/MessageBody.js'




let message = messageData.map(m => <MessageBody id={m.id} messageImg={m.img} messageName={m.name} messageSurname={m.surname} messageText={m.text} messageTime={m.time}/>)

export default message