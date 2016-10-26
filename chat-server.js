const net = require('net');
const chat = require('./chat');

const newChat = new chat();

const server = net.createServer(socket => {
    socket.setEncoding('utf-8');

    newChat.add(socket);

    socket.on('data', message => {
        newChat.send(socket,message);
        let parsed = message.split(' ');
        if (parsed[0] === '/newName') {
            newName = parsed[1].replace('\r\n','');
            newChat.changeName(socket, newName);
            console.log(socket.name);
        }
    });

    socket.on('close', () => {
        newChat.remove(socket);
        console.log(`${socket.name} has disconnected`);
    });
});

const port = 55555;
server.listen(port, err => {
    if (err) console.log('error!', err);
    else console.log('Server listening on port: ', port);
});