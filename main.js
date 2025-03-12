import httpServer from "./config/http.js";


// Iniciar el servidor
const startServer = async () => {
  const PORT = process.env.PORT || 3000;
  try {
    httpServer.listen(PORT, () => {
      console.log(`🚀 Servidor HTTP escuchando en el puerto ${PORT} ✅`);
    });
  } catch (error) {
    console.error("❌ Error durante la inicialización:", error.message);
  }
};

startServer();
