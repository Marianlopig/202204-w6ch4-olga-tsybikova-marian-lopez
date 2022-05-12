const initizeServer = require("./server");

const port = process.env.SERVER_PORT || 4000;

initizeServer(port);
