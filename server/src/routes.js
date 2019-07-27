const AttractionController = require("./controllers/AttractionController");
const ReviewsController = require("./controllers/ReviewsController");
const SustainabilityController = require("./controllers/SustainabilityController");

module.exports = app => {
  //   Attractions
  app.get("/AttractionsAll", AttractionController.getAllAttractions);
  app.get("/AttractionsByID", AttractionController.getAttractionByID);
  app.get("/Attraction", AttractionController.getRandomAttraction);
  app.post("/Attraction", AttractionController.postAttraction);
  app.put("/Attraction", AttractionController.updateAttraction);
  app.delete("/Attraction", AttractionController.deleteAttraction);

  //   Reviews
  app.get("/ReviewsAll", ReviewsController.getAllReviews);
  app.get(
    "/ReviewsAllByAttractionID",
    ReviewsController.getAllReviewsByAttractionID
  );
  app.get("/ReviewsByID", ReviewsController.getReviewByID);
  app.get("/Reviews", ReviewsController.getRandomReview);
  app.post("/Reviews", ReviewsController.postReview);
  app.put("/Reviews", ReviewsController.updateReview);
  app.delete("/Reviews", ReviewsController.deleteReview);

  // Sustainability
  app.get("/SustainabilityAll", SustainabilityController.getAllSustainability);
  app.get(
    "/SustainabilityAllByAttractionID",
    SustainabilityController.getAllSustainabilityByAttractionID
  );
  app.get(
    "/SustainabilityAverageByAttractionID",
    SustainabilityController.getAverageSustainabilityByAttractionID
  );
  app.get(
    "/SustainabilityByID",
    SustainabilityController.getSustainabilityByID
  );
  app.post("/Sustainability", SustainabilityController.postSustainability);
  app.put("/Sustainability", SustainabilityController.putSustainability);
  app.delete("/Sustainability", SustainabilityController.deleteSustainability);
};
