module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define("Reviews", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    attraction_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comments: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: { notEmpty: true }
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true }
    }
  });

  return Reviews;
};
