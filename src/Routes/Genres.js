const express = require("express");
const router = express.Router();

let GenresList = [
    {
      Title: "Heroic Bloodshed",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 1,
    },
    {
      Title: "Military Action",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 2,
    },
    {
      Title: "Espionage",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 3,
    },
    {
      Title: "Wuxia Action",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 4,
    },
    {
      Title: "Disaster",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 5,
    },
    {
      Title: "Adventure",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 6,
    },
    {
      Title: "Superhero",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 7,
    },
    {
      Title: "Traditional",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 8,
    },
    {
      Title: "Stop Motion",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 9,
    },
    {
      Title: "Heroic Bloodshed",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 10,
    },
    {
      Title: "Heroic Bloodshed",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 11,
    },
    {
      Title: "Heroic Bloodshed",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 12,
    },
    {
      Title: "Heroic Bloodshed",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 13,
    },
    {
      Title: "Heroic Bloodshed",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 14,
    },
    {
      Title: "Heroic Bloodshed",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 15,
    },
    {
      Title: "Heroic Bloodshed",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 16,
    },
    {
      Title: "Heroic Bloodshed",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 17,
    },
    {
      Title: "Heroic Bloodshed",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 18,
    },
    {
      Title: "Heroic Bloodshed",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 19,
    },
    {
      Title: "Heroic Bloodshed",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 20,
    },
    {
      Title: "Heroic Bloodshed",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 21,
    },
    {
      Title: "Heroic Bloodshed",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 22,
    },
    {
      Title: "Heroic Bloodshed",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 23,
    },
    {
      Title: "Heroic Bloodshed",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 24,
    },
    {
      Title: "Heroic Bloodshed",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 25,
    },
    {
      Title: "Heroic Bloodshed",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 26,
    },
    {
      Title: "Heroic Bloodshed",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 27,
    },
    {
      Title: "Heroic Bloodshed",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 28,
    },
    {
      Title: "Heroic Bloodshed",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 29,
    },
    {
      Title: "Heroic Bloodshed",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 30,
    },
    {
      Title: "Heroic Bloodshed",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 31,
    },
    {
      Title: "Heroic Bloodshed",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 32,
    },
    {
      Title: "Live-Action",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 33,
    },
    {
      Title: "Heroic Bloodshed",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 34,
    },
    {
      Title: "Bloodhood",
      des: "This action sub-genre is defined by values like duty, brotherhood, honor, redemption, and the protection of the vulnerable. It was initially created in Hong Kong cinema but has since made its way around the world.",
      id: 35,
    },
  ];

function getGenresList(req, res) {
    try {
      res.send(GenresList);
    } catch (err) {
      res.statusCode = 401;
      res.send("Somthing going wrong");
    }
}

function addGenresList(req, res) {
    try {
      GenresList.push(req.body);
      res.send(GenresList);
    } catch (err) {
      res.statusCode = 401;
      res.send("Somthing going wrong");
    }
  }

  function editGenresList(req, res) {
    try {
      //GenresList.push(req.body);
      const index = GenresList.findIndex((genres) => genres.id === req.body.id);
      GenresList[index] = req.body;
      res.send(GenresList);
    } catch (err) {
      res.statusCode = 401;
      res.send("Somthing going wrong");
    }
  }

  function deleteGenresList(req, res) {
    try {
      const index = GenresList.findIndex((genres) => genres.id === req.body.payload.id);
      GenresList.splice(index, 1);
      res.send(GenresList);
    } catch (err) {
        console.log('err',err)
      res.statusCode = 401;
      res.send("Somthing going wrong");
    }
  }

router.get("/genresList", getGenresList);
router.post("/genresList", addGenresList);
router.put("/genresList", editGenresList);
router.delete("/genresList", deleteGenresList);

module.exports = router;