import {createServer} from './server'

const start =  () => {
  try {
    const server = createServer();
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

start()
