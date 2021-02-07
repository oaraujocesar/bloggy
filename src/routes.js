import express from 'express'

const routes = express.Router()

routes.get('/', (request, response) => {
  response.status(201).json({ message: 'Hello, GoKursoss!' })
})

export default routes
