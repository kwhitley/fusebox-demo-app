import io from 'socket.io-client'
import { eventChannel } from 'redux-saga'
import { fork, take, call, put, all, cancel } from 'redux-saga/effects'

import tags from './tags'
const CHANNEL_NAME = '/tags'

function connect(channel) {
  console.log('connecting to socket channel', channel)
  const socket = io()
  return new Promise((resolve) => {
    socket.on('connect', () => {
      console.log('connected to socket server')
      resolve(socket)
    })
  })
}

function subscribe(socket) {
  return eventChannel((emit) => {
    socket.on('tags/update', (data) => {
      emit(data)
    })
    socket.on('disconnect', () => {
      Message.warning('Streaming socket disconnected')
    })
    return () => { }
  })
}

function* listen(socket) {
  const channel = yield call(subscribe, socket)
  while (true) {
    const { id, values } = yield take(channel)
    // console.log(`receiving data from channel ${CHANNEL_NAME}`, id, values)
    yield put(tags.updateTagFromStream(id, values ))
  }
}

export default function* streamingSaga() {
  while (true) {
    // Wait until connect requested
    yield take('tags/stream/CONNECT')

    // Create a socket connection
    const socket = yield call(connect, CHANNEL_NAME)
    yield put(tags.connectStreamSuccess())
    /*
      Parallelize the following tasks, and continue:
        - listen for socket events
        - wait for user to start a signal stream
        - wait for user to stop a signal stream
    */
    const tasks = yield all([
      fork(listen, socket),
    ])

    // Wait until disconnect requested
    yield take('tags/stream/DISCONNECT')

    // Close the socket connection
    socket.emit('disconnect')
    socket.close()

    // stop each task
    // yield cancel(...tasks)
  }
}
