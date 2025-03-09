import express from "express";
import dotenv from "dotenv";

dotenv.config(); // Cargar las variables de entorno

// Crear la instancia de Express
const expressApp = express();
expressApp.use(express.json()); // Middleware para parsear JSON

// Middleware para manejar errores
expressApp.use((err, _req, res, _next) => {
  const status = err.status || 500;
  const message = err.message || err;
  res.status(status).send(message);
});

// Función para sincronizar la base de datos y relaciones (comentada por ahora)
/*
const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Modelos sincronizados con la base de datos.");
  } catch (error) {
    console.error("Error al sincronizar modelos:", error.message);
    throw error;
  }
};
*/

// Iniciar el servidor
const startServer = async () => {
  const PORT = process.env.PORT || 3000;
  try {
    // Iniciar servidor HTTP con la app configurada
    expressApp.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT} ✅`);
    });
  } catch (error) {
    console.error("Error durante la inicialización:", error.message);
  }
};

startServer();
