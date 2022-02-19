const express = require('express')
const promBundle = require("express-prom-bundle")
const app = express()
const metricsApp = express();
const port = 8080
const metricport = 8081

const metricsMiddleware = promBundle({
  includeMethod: true,
  includePath: true,
  autoregister: false,
});

app.use(metricsMiddleware);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

metricsApp.use(metricsMiddleware.metricsMiddleware);

metricsApp.listen(metricport, () => {
  console.log(`Metrics listening on port ${metricport}`)
});
