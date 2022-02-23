import * as express from 'express'
import request from 'supertest'
// import app from '../../server'
import { createApp } from "../../app"
import { db } from '../../db'
import { StatusCodes} from 'http-status-codes'

const app = createApp(db)
app.listen(3003)

describe('GET /', () => {
  it('should return 200 OK', () => {
    return request(app).get('/').expect(200)
  })
})
