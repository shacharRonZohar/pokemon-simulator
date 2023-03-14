import { type Db, type Document, MongoClient } from 'mongodb'
import { env } from '~/env.mjs'

let dbConn: Db | null = null

export async function getCollection<T extends Document>(collectionName: string) {
  try {
    const db = await connect()
    const collection = db.collection<T>(collectionName)
    return collection
  } catch (err) {
    console.error('Cannot get collection', err)
    throw err
  }
}

async function connect() {
  if (dbConn) return dbConn
  try {
    const client = await MongoClient.connect(env.DATABASE_URL)
    const db = client.db(env.DATABASE_NAME)
    dbConn = db
    return db
  } catch (err) {
    console.error('Cannot Connect to DB', err)
    throw err
  }
}
