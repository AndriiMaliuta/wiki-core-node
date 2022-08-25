// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_pages_pb = require('../proto/pages_pb.js');

function serialize_com_anma_Content(arg) {
  if (!(arg instanceof proto_pages_pb.Content)) {
    throw new Error('Expected argument of type com.anma.Content');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_anma_Content(buffer_arg) {
  return proto_pages_pb.Content.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_anma_PageRequest(arg) {
  if (!(arg instanceof proto_pages_pb.PageRequest)) {
    throw new Error('Expected argument of type com.anma.PageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_anma_PageRequest(buffer_arg) {
  return proto_pages_pb.PageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var PageServiceService = exports.PageServiceService = {
  getPage: {
    path: '/com.anma.PageService/getPage',
    requestStream: false,
    responseStream: false,
    requestType: proto_pages_pb.PageRequest,
    responseType: proto_pages_pb.Content,
    requestSerialize: serialize_com_anma_PageRequest,
    requestDeserialize: deserialize_com_anma_PageRequest,
    responseSerialize: serialize_com_anma_Content,
    responseDeserialize: deserialize_com_anma_Content,
  },
};

exports.PageServiceClient = grpc.makeGenericClientConstructor(PageServiceService);
