const { Attractions } = require("../models");

module.exports = {
  async getAllAttractions(req, res) {
    try {
      let attraction = await Attractions.findAll();

      if (!attraction) {
        throw "Cannot find attractions";
      }

      res.send(attraction);
    } catch (err) {
      res.status(403).send({
        error: err
      });
    }
  },
  async getAttractionByID(req, res) {
    try {
      let attraction = await Attractions.findOne({
        where: {
          id: req.query.id
        }
      });

      if (!attraction) {
        throw "Cannot find attractions";
      }

      res.send(attraction);
    } catch (err) {
      return res.status(403).send({
        error: err
      });
    }
  },
  async getRandomAttraction(req, res) {
    try {
      const { sequelize } = require("./../models");
      let attraction = await Attractions.findAll({
        order: [[sequelize.literal("RANDOM()")]],
        limit: 1
      });

      if (!attraction) {
        throw "Cannot get attraction";
      }

      res.send(attraction);
    } catch (err) {
      return res.status(403).send({
        error: err
      });
    }
  },
  async postAttraction(req, res) {
    try {
      let attraction = await Attractions.create({
        geolocation_lat: req.body.geolocation_lat,
        geolocation_lng: req.body.geolocation_lng,
        title: req.body.title,
        description: req.body.description
      });

      if (!attraction) {
        throw "Cannot create attraction";
      }

      res.send(attraction);
    } catch (err) {
      return res.status(403).send({
        error: err
      });
    }
  },
  async updateAttraction(req, res) {
    try {
      let attraction = await Attractions.findOne({
        where: {
          id: req.body.id
        }
      });

      attraction
        .update({
          geolocation_lat: req.body.geolocation_lat,
          geolocation_lng: req.body.geolocation_lng,
          title: req.body.title,
          description: req.body.description
        })
        .then(() => {});

      if (!attraction) {
        throw "Cannot create attraction";
      }

      res.send(attraction);
    } catch (err) {
      return res.status(403).send({
        error: err
      });
    }
  },
  async deleteAttraction(req, res) {
    try {
      let attraction = await Attractions.findOne({
        where: {
          id: req.body.id
        }
      });

      if (!attraction) {
        throw "Cannot find attractions";
      }

      attraction.destroy().then(() => {});

      res.send({
        success: "OK"
      });
    } catch (err) {
      return res.status(403).send({
        error: err
      });
    }
  }
};
