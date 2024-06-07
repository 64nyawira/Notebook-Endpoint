import {Router} from 'express'
import { addNote, getAllNotes, getonenote } from '../controller/notebook.controller'

let noteRouter= Router()

noteRouter.post('/create-new',addNote)
noteRouter.get('/all',getAllNotes)
noteRouter.get('/:note_id',getonenote)

export default noteRouter