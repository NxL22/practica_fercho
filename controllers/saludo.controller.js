import { getSaludo } from '../services/saludo.service.js';

export const getSaludoController = async (req, res, next) => {
  try {
    const saludo = getSaludo();
    res.status(200).json({ message: saludo });
  } catch (error) {
    next(error);
  }
};