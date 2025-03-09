import express from "express";
import cors from "cors";
import saludoRoutes from "./routes/saludo.routes.js"; 

const expressApp = express();

expressApp.use(
  cors({
    origin: ["*"],
    allowedHeaders: ["Content-Type", "Authorization", "reset", "post"],
    methods: ["GET", "PUT", "POST", "DELETE"],
  })
);

expressApp.use(express.json());

// Middleware global para errores
expressApp.use((err, _req, res, _next) => {
  const status = err.status || 500;
  const message = err.message || err;
  res.status(status).send(message);
});

// Se define el prefix de la ruta usando el router importado
expressApp.use("/", saludoRoutes);

export default expressApp;
