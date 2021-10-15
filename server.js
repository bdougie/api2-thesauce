// Require the framework and instantiate it
import { createClient } from '@supabase/supabase-js'
const SUPABASE_URL = "https://ibcwmlhcimymasokhgvn.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyOTkzMDc3OCwiZXhwIjoxOTQ1NTA2Nzc4fQ.zcdbd7kDhk7iNSMo8SjsTaXi0wlLNNQcSZkzZ84NUDg"
const supabase = createClient([SUPABASE_URL], [SUPABASE_ANON_KEY])

// Make a request
let { data: recommendations, error } = await supabase
  .from('recommendations')
  .select('*')


console.log(recommendations)
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()