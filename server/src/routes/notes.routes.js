const { Router } = require('express')

const notesRoutes = Router();
const NotesController = require('../controllers/notesController')
const ensureAuthenticated = require("../middleware/ensureAuthenticated")

const notesController = new NotesController()

notesRoutes.use(ensureAuthenticated)

notesRoutes.get('/', notesController.index)
notesRoutes.post('/', notesController.create)
notesRoutes.get('/:id', notesController.show)
notesRoutes.delete('/:id', notesController.delete)

module.exports = notesRoutes