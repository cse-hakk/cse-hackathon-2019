const { Reviews } = require("../models");

module.exports = {
  async getAllReviews(req, res) {
    try {
      let review = await Reviews.findAll();

      if (!review) {
        throw "Cannot find reviews";
      }

      res.send(review);
    } catch (err) {
      res.status(403).send({
        error: err
      });
    }
  },
  async getAllReviewsByAttractionID(req, res) {
    try {
      let review = await Reviews.findAll({
        where: {
          attraction_id: req.query.attraction_id
        }
      });

      if (!review) {
        throw "Cannot find reviews";
      }

      res.send(review);
    } catch (err) {
      return res.status(403).send({
        error: err
      });
    }
  },
  async getReviewByID(req, res) {
    try {
      let review = await Reviews.findOne({
        where: {
          id: req.body.id
        }
      });

      if (!review) {
        throw "Cannot find reviews";
      }

      res.send(review);
    } catch (err) {
      return res.status(403).send({
        error: err
      });
    }
  },
  async getRandomReview(req, res) {
    try {
      const { sequelize } = require("../models");
      let review = await Reviews.findAll({
        order: [[sequelize.literal("RANDOM()")]],
        limit: 1
      });

      if (!review) {
        throw "Cannot get review";
      }

      res.send(review);
    } catch (err) {
      return res.status(403).send({
        error: err
      });
    }
  },
  async postReview(req, res) {
    try {
      let review = await Reviews.create({
        attraction_id: req.body.attraction_id,
        comments: req.body.comments,
        rating: req.body.rating
      });

      if (!review) {
        throw "Cannot create review";
      }

      res.send(review);
    } catch (err) {
      return res.status(403).send({
        error: err
      });
    }
  },
  async updateReview(req, res) {
    try {
      let review = await Reviews.findOne({
        where: {
          id: req.body.id
        }
      });

      review
        .update({
          comments: req.body.comments,
          rating: req.body.rating
        })
        .then(() => {});

      if (!review) {
        throw "Cannot create review";
      }

      res.send(review);
    } catch (err) {
      return res.status(403).send({
        error: err
      });
    }
  },
  async deleteReview(req, res) {
    try {
      let review = await Reviews.findOne({
        where: {
          id: req.body.id
        }
      });

      if (!review) {
        throw "Cannot find attractions";
      }

      review.destroy().then(() => {});

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
