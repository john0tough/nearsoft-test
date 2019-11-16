const express = require("express");
const DB = require("../helpers/db");
const router = express.Router();

/**
 * @api {get} /dogs Get a list of dogs
 * @apiVersion 1.0.0
 * @apiName GetDogs
 * @apiGroup Dogs
 * @apiHeader {String} API_KEY=v1Vld/Dr34m5 User unique access-key.
 * @apiHeaderExample {json} Header-Example:
 *      { "api_key": "v1Vld/Dr34m5" }
 *
 * @apiSuccess {Object[]} Dog object with a list of dogs.
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "dogs": [
 *      {
 *        "id": "be72a058-d8b8-4fa1-bfab-08a6960a934b",
 *        "breed": "Old English Sheepdog",
 *        "age": 0.5,
 *        "size": "Large",
 *        "imgUrl": "http://localhost:3333/data/images/sheepdog.jpg"
 *      }
 *    ]
 *  }
 *
 */
router.get("/", (req, res) => {
  res.json({
    dogs: DB.dogs.get()
  });
});

/**
 * @api {get} /dogs/adoptions Get all adoptions
 * @apiVersion 1.0.0
 * @apiName GetAdoptions
 * @apiGroup Adoptions
 * @apiHeader {String} API_KEY=v1Vld/Dr34m5 User unique access-key.
 * @apiHeaderExample {json} Header-Example:
 *      { "api_key": "v1Vld/Dr34m5" }
 *
 * @apiSuccess {Object[]} images List of favorites.
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "adoptions": [
 *     {
 *       "id": "be72a058-d8b8-4fa1-bfab-08a6960a934b",
 *        "breed": "Old English Sheepdog",
 *        "age": 0.5,
 *        "size": "Large",
 *        "imgUrl": "http://localhost:3333/data/images/sheepdog.jpg"
 *     }
 *   ]
 * }
 *
 */
router.get("/adoptions", (req, res) => {
  const adoptions = DB.adoption.get();
  res.json({ adoptions });
});

/**
 * @api {post} /dogs/adopt Adds dogs to adoptions
 * @apiParamExample {json} Request-Example:
 * {
 *   "dogs": [
 *     {
 *       "id": "be72a058-d8b8-4fa1-bfab-08a6960a934b",
 *       "breed": "Old English Sheepdog",
 *       "age": 0.5,
 *       "size": "Takito",
 *       "imgUrl": "Takito"
 *     }
 *   ]
 * }
 * @apiVersion 1.0.0
 * @apiName AddAdoption
 * @apiGroup Adoptions
 * @apiHeader {String} API_KEY=v1Vld/Dr34m5 User unique access-key.
 * @apiHeaderExample {json} Header-Example:
 *      { "api_key": "v1Vld/Dr34m5" }
 *
 * @apiSuccess {Object} dogs added to adoptions.
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "dogs": [
 *     {
 *       "id": "be72a058-d8b8-4fa1-bfab-08a6960a934b",
 *       "breed": "Old English Sheepdog",
 *       "age": 0.5,
 *       "size": "Takito",
 *       "imgUrl": "Takito"
 *     }
 *   ]
 * }
 *
 */
router.post("/adopt", (req, res) => {
  console.log(req.body);
  const dogs = req.body.dogs;

  try {
    if (!dogs || !dogs.length) {
      return res.status(400).json({ error: "no dogs array provided" });
    }

    for (const dog of dogs) {
      if (!dog.id || !dog.breed || !dog.age || !dog.size || !dog.imgUrl) {
        return res
          .status(400)
          .json({ error: "missing property/s in dog object" });
      }
      DB.adoption.add(dog);
      // remove dog from the dogList
      DB.dogs.delete(dog.id);
    }
  } catch (err) {
    console.error(err);
  }

  res.status(200).json({ dogs });
});

module.exports = router;
