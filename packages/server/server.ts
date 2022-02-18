import express from 'express'

const app = express();
const port = 3001;


// Allow any website to connect
app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/', (req, res) => {
  res.status(200).json({foo: "bar"});
})

app.get('/data', (req, res) => {
  res.status(200).json({foo: "bar"});
})

app.listen(port, () => {
  console.log(`Sever listening on port:${port}`)
})
