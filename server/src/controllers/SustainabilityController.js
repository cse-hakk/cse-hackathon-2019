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
