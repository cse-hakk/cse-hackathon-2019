const { Sustainability } = require("../models");

module.exports = {
  async getAllSustainability(req, res) {
    try {
      let sustainability = await Sustainability.findAll();

      if (!sustainability) {
        throw "Cannot find sustainability";
      }

      res.send(sustainability);
    } catch (err) {
      res.status(403).send({
        error: err
      });
    }
  },
  async getAllSustainabilityByAttractionID(req, res) {
    try {
      let sustainability = await Sustainability.findAll({
        where: {
          attraction_id: req.body.attraction_id
        }
      });

      if (!sustainability) {
        throw "Cannot find reviews";
      }

      res.send(sustainability);
    } catch (err) {
      return res.status(403).send({
        error: err
      });
    }
  },
  async getAverageSustainabilityByAttractionID(req, res) {
    try {
      let sustainability = await Sustainability.findAll({
        where: {
          attraction_id: req.body.attraction_id
        }
      });

      if (!sustainability) {
        throw "Cannot find reviews";
      }
      const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;
      let average_overcrowdedness = average(
        sustainability.map(e => e.overcrowdedness)
      );
      let average_pollution = average(sustainability.map(e => e.pollution));
      let average_regulations = average(sustainability.map(e => e.regulations));
      let average_working_conditions = average(
        sustainability.map(e => e.working_conditions)
      );
      let average_transportation = average(
        sustainability.map(e => e.transportation)
      );
      let average_total = average([
        average_overcrowdedness,
        average_pollution,
        average_regulations,
        average_working_conditions,
        average_transportation
      ]);

      res.send({
        average_total: average_total,
        average_overcrowdedness: average_overcrowdedness,
        average_pollution: average_pollution,
        average_regulations: average_regulations,
        average_working_conditions: average_working_conditions,
        average_transportation: average_transportation
      });
    } catch (err) {
      return res.status(403).send({
        error: err
      });
    }
  },

  async getSustainabilityByID(req, res) {
    try {
      let sustainability = await Sustainability.findOne({
        where: {
          id: req.query.id
        }
      });

      if (!sustainability) {
        throw "Cannot find sustainabilitys";
      }

      res.send(sustainability);
    } catch (err) {
      return res.status(403).send({
        error: err
      });
    }
  },
  async postSustainability(req, res) {
    try {
      let sustainability = await Sustainability.create({
        attraction_id: req.body.attraction_id,
        overcrowdedness: req.body.overcrowdedness,
        pollution: req.body.pollution,
        regulations: req.body.regulations,
        working_conditions: req.body.working_conditions,
        transportation: req.body.transportation
      });

      if (!sustainability) {
        throw "Cannot create sustainability";
      }

      res.send(sustainability);
    } catch (err) {
      return res.status(403).send({
        error: err
      });
    }
  },
  async putSustainability(req, res) {
    try {
      let sustainability = await Sustainability.findOne({
        where: {
          id: req.body.id
        }
      });

      sustainability
        .update({
          overcrowdedness: req.body.overcrowdedness,
          pollution: req.body.pollution,
          regulations: req.body.regulations,
          working_conditions: req.body.working_conditions,
          transportation: req.body.transportation
        })
        .then(() => {});

      if (!sustainability) {
        throw "Cannot create sustainability";
      }

      res.send(sustainability);
    } catch (err) {
      return res.status(403).send({
        error: err
      });
    }
  },
  async deleteSustainability(req, res) {
    try {
      let sustainability = await Sustainability.findOne({
        where: {
          id: req.body.id
        }
      });

      if (!sustainability) {
        throw "Cannot find attractions";
      }

      sustainability.destroy().then(() => {});

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
