import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

class Ban extends Model {}

Ban.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Users', // Nombre de la tabla de usuarios
      key: 'id',
    },
  },
  reason: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bannedBy: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bannedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  bannedEndDate: {
    type: DataTypes.DATE,
    allowNull: true, // Si es null, el baneo es permanente (es la idea)
  },
}, {
  sequelize,
  modelName: 'Ban',
  timestamps: true,
});

export default Ban;