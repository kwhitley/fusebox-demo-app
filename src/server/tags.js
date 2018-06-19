const app = require('express')()

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const VALUE_LIMIT = 20

const tags = [
  { id: 1, name: 'foo', created: new Date(), updated: new Date(), isActive: true, values: [] },
  { id: 2, name: 'bar', created: new Date(), updated: new Date(), isActive: true, values: [] },
  { id: 3, name: 'baz', created: new Date(), updated: new Date(), isActive: true, values: [] },
  { id: 4, name: 'cat', created: new Date(), updated: new Date(), isActive: false, values: [] },
  { id: 5, name: 'miffles', created: new Date(), updated: new Date(), isActive: false, values: [] },
  { id: 6, name: 'vlad', created: new Date(), updated: new Date(), isActive: true, values: [] },
  { id: 7, name: 'baxter', created: new Date(), updated: new Date(), isActive: true, values: [] },
]

app.get('*', (req, res) => res.json(tags))

export default app

export const registerTagMessages = io => {
  const updateTag = () => {
    const activeTags = tags.filter(tag => tag.isActive)
    const tag = activeTags[random(0, activeTags.length - 1)]
    const { values } = tag
    const lastValue = (values.length && values[values.length-1].value) || 0
    const up = Math.random() > 0.5
    const newValue = lastValue + (up ? 1 : -1)

    tag.values = ([ ...tag.values, { value: newValue, date: new Date() }]).slice(-VALUE_LIMIT)
    tag.updated = new Date()

    io.emit('tags/update', { id: tag.id, values: tag.values })
  }

  setInterval(updateTag, 100)
}
