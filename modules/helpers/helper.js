exports.COMMON = {
  JSONGLE: 'jsongle',
}

exports.JSONGLE_MESSAGE_TYPE = {
  IQ_SET: 'iq-set',
  IQ_GET: 'iq-get',
  IQ_ERROR: 'iq-error',
  IQ_RESULT: 'iq-result',
  ERROR: 'session-error',
  ACK: 'ack',
  EVENT: 'session-event',
  PROPOSE: 'session-propose',
  INFO: 'session-info',
  PROCEED: 'session-proceed',
  INITIATE: 'session-initiate',
  TRANSPORT: 'transport-info',
  DECLINE: 'session-decline',
  RETRACT: 'session-retract'
};

exports.JSONGLE_SESSION_INFO_REASON = {
  TRYING: 'trying',
  UNREACHABLE: 'unreachable'
}

exports.JSONGLE_EVENTS_NAMESPACE = {
  ROOM: 'room'
}

exports.JSONGLE_IQ_QUERY = {
  HELLO: 'session-hello',
  JOIN: 'session-join',
  LEAVE: 'session-leave',
}

exports.JSONGLE_ERROR_CODE = {
  BAD_PARAMETERS: 400001,
  FORBIDDEN_FULL: 403001,
  NOT_FOUND: 404001,
  NOT_PART: 404002,
  MEMBER_NOT_FOUND: 404002
}

exports.JSONGLE_ACK_VALUE = {
  SUCCESS: 'success',
  PENDING: 'pending',
  FAILED: 'failed'
}

exports.JSONGLE_ROOM_EVENTS = {
  JOINED: 'joined',
  LEFT: 'left'
}