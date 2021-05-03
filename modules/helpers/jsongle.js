const { generateNewId } = require("./common");
const { JSONGLE_ERROR_CODE, JSONGLE_MESSAGE_TYPE } = require('./helper');

exports.describeHello = (serverId, serverVersion, serverDescription) => (
  {
    version: serverVersion,
    sn: serverId,
    info: serverDescription,
    connected: new Date().toJSON()
  }
);

exports.describeJoined = (description) => (
  {
      description,
    joined: new Date().toJSON()
  }
);

exports.buildIQ = (from, to, iqType, transaction, query, description) => (
  {
    id: generateNewId(),
    from: from,
    to: to,
    jsongle: {
      action: iqType,
      query,
      transaction,
      description,
    },
  }
);

exports.buildAck = (from, to, transaction) => (
  {
    id: generateNewId(),
    from: from,
    to: to,
    jsongle: {
      action: JSONGLE_MESSAGE_TYPE.ACK,
      transaction
    }
  }
);

exports.buildError = (from, to, description) => (
  {
    id: generateNewId(),
    from: from,
    to: to,
    jsongle: {
      action: JSONGLE_MESSAGE_TYPE.ERROR,
      description,
    },
  }
)

exports.describeIQNotFound = (query) => (
  {
    errorCode: JSONGLE_ERROR_CODE.NOT_FOUND,
    errorDetails: `The query '${query}' is not supported`
  }
);

exports.describeErrorHello = (details) => (
  {
    errorCode: JSONGLE_ERROR_CODE.BAD_PARAMETERS,
    errorDetails: details
  }
)

exports.isHelloValid = (hello) => {
  if (!hello || !hello.uid) {
    return false;
  }
  return true;
}

