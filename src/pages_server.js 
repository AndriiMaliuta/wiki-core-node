const PROTO_PATH = __dirname + './proto/pages.proto';
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const {PageServiceService} = require("./proto/pages_grpc_pb");

let page = {
    id: '',
    title: '',
    body: ''
}

function getPage(call, callback) {
    let id = call.request.id
    page.id = id;
    callback(null, {message: page});
}

// function sayHelloAgain(call, callback) {
//     callback(null, {message: 'Hello again, ' + call.request.name});
// }

function main() {
    let server = new grpc.Server();
    server.addService(PageServiceService.service, {
        getPage: getPage
    });
    server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
        server.start();
    });
}

main();