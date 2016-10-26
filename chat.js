module.exports = class chat {
    constructor() {
        this.clients = [];
        this.clientNum = 1;
    };

    add(client) {
        client.name = `Guest ${(this.clientNum++)}`
        this.clients.push(client);
        this.clients.forEach(c => {
            client.write('Welcome to the Steven\'s Chat, you are connected!\n');
            client.write(`Hello, ${client.name} !\n`);
            client.write(`If you wish to change your name use \n \nick <yourName>.\n`);
        });
    console.log(`${client.name} is connected!\n`);
    };

    chat(sender, message){
        this.clients.forEach(c => {
            if(c === client) return;
            c.write(`${sender.name}: ${message}`);
        });
    };

    leaveChat(client) {
        const index = this.clients.indexOf(client);
        if (index !== -1) this.clients.splice(index, 1);
        console.log(`${client.name} has disconnected.\n`)
    };

    changeName(sender) {
        let oldName = sender.name;
        this.clients.forEach(c => {
            if (c === sender) return;
            c.write(`${oldName} will now be dubbed ${sender.name}\n`);
        });
    };
};