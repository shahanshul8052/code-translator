// import Fastify web framework and cors plugin
import Fastify from "fastify";
import cors from "@fastify/cors";

// Create a new Fastify instance with logging enabled
const fastify = Fastify({ 
    logger: true, // shows helpful request/response logs in terminal
});


// regosyer cors plugin so react frontend can talk to backend
await fastify.register(cors, {
    origin: true, //allow all origins 
});

// define POST route for /translate
fastify.post('/translate', async (request, reply) => {
    const { code, from, to } = request.body
  
    // return translated code (placeholder for now)
    return {
      translatedCode: `// Translated version of your code from ${from} to ${to} goes here.\n${code}`,
    }
  })

// Start the server on port 3001
fastify.listen({ port: 3001 }, (err, address) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    console.log(`🚀 Server listening at ${address}`)
  })