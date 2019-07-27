module.exports = (sequelize, DataTypes) => {
  const Attractions = sequelize.define("Attractions", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    geolocation_lng: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: { notEmpty: true }
    },
    geolocation_lat: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: { notEmpty: true }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: { notEmpty: true }
    }
  });

  return Attractions;
};
