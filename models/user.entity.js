import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db.js";

class UserEntity extends Model { }

UserEntity.init(
  {
    // Identificación
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },

    // Información personal
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true, // El nombre no puede estar vacío
      },
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true, // El apellido no puede estar vacío
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // Validación de correo electrónico
        len: [1, 255], // Longitud máxima
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profilePicture: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true, // Validación de URL (opcional)
      },
    },
    phone1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true, // El teléfono no puede estar vacío
      },
    },
    phone2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    direction_main: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true, // La dirección principal no puede estar vacía
      },
    },
    direction_secondary: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    // Verificación y autenticación
    isVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    verifyToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    // Roles y permisos
    role: {
      type: DataTypes.ENUM,
      values: Object.values(roles),
      allowNull: false,
      defaultValue: roles.USER,
      validate: {
        isIn: [Object.values(roles)], // Solo permite los roles definidos
      },
    },

    // Actividad y auditoría
    lastActivity: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM,
      values: ["active", "suspended", "banned"],
      defaultValue: "active",
    }
  },
  {
    sequelize,
    modelName: "User",
    timestamps: true, // Habilita createdAt y updatedAt
  }
);

export default UserEntity;
