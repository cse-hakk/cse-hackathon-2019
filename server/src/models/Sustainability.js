module.exports = (sequelize, DataTypes) => {
  const Sustainability = sequelize.define("Sustainability", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    attraction_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { notEmpty: true }
    },
    overcrowdedness: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { notEmpty: true }
    },
    pollution: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { notEmpty: true }
    },
    regulations: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { notEmpty: true }
    },
    working_conditions: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { notEmpty: true }
    },
    transportation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { notEmpty: true }
    }
  });

  return Sustainability;
};
