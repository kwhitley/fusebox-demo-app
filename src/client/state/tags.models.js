import { Record, List } from 'immutable'

export const Tag = new Record({
  id: undefined,
  name: 'new tag',
  created: undefined,
  updated: undefined,
  isActive: true,
  isWatching: true,
  values: List()
})

export const ApiResource = Record({
  isLoading: false,
  success: false,
  error: undefined,
})

export const Stream = Record({
  isConnected: false,
  lastMessageReceived: undefined,
  error: undefined,
})
