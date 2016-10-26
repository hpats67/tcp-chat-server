const net = require('net');
const chat = require('./chat');

const newChat = new chat();

const server = net.createServer(socket => {
    socket.setEncoding('utf-8');

    chat.add(c);

    socket.on('data', message => {
        chat.send(message,data);
    });

    socket.on('close', () => {
        chat.remove(client);
        console.log(`${client.name} has disconnected`);
    });
});

const port = 55555;
server.listen(port, err => {
    if (err) console.log('error!', err);
    else console.log('Server listening on port: ', port);
});