const express = require("express");
const bodyparser = require("body-parser");
const router = express.Router();

const app = express();

app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.send("this is post");
});

let ArtistsList = [
  {
    UserName: "santhosh",
    Email: "san@gmail.com",
    WalletAddress: "vd4tfbf3",
    id: 1,
  },
  {
    UserName: "sam",
    Email: "san@gmail.com",
    WalletAddress: "jd04tfbf3",
    id: 2,
  },
  {
    UserName: "san",
    Email: "san@gmail.com",
    WalletAddress: "tdhtgbdef3",
    id: 3,
  },
  {
    UserName: "sant",
    Email: "san@gmail.com",
    WalletAddress: "edggthbfq",
    id: 4,
  },
  {
    UserName: "santhosh",
    Email: "san@gmail.com",
    WalletAddress: "vd4tfbf3",
    id: 5,
  },
  {
    UserName: "sam",
    Email: "san@gmail.com",
    WalletAddress: "jd04tfbf3",
    id: 6,
  },
  { UserName: "san", Email: "san@gmail.com", WalletAddress: "tdhtgbdef3" },
  {
    UserName: "sant",
    Email: "san@gmail.com",
    WalletAddress: "edggthbfq",
    id: 7,
  },
  {
    UserName: "santhosh",
    Email: "san@gmail.com",
    WalletAddress: "vd4tfbf3",
    id: 8,
  },
  {
    UserName: "sam",
    Email: "san@gmail.com",
    WalletAddress: "jd04tfbf3",
    id: 9,
  },
  {
    UserName: "san",
    Email: "san@gmail.com",
    WalletAddress: "tdhtgbdef3",
    id: 10,
  },
  {
    UserName: "sant",
    Email: "san@gmail.com",
    WalletAddress: "edggthbfq",
    id: 11,
  },
  {
    UserName: "Hervin",
    Email: "Dom@gmail.com",
    WalletAddress: "vd4tfbf3",
    id: 12,
  },
  {
    UserName: "sam",
    Email: "san@gmail.com",
    WalletAddress: "jd04tfbf3",
    id: 13,
  },
  {
    UserName: "Dani",
    Email: "san@gmail.com",
    WalletAddress: "tdhtgbdef3",
    id: 14,
  },
  {
    UserName: "sant",
    Email: "san@gmail.com",
    WalletAddress: "edggthbfq",
    id: 14,
  },
  {
    UserName: "santhosh",
    Email: "san@gmail.com",
    WalletAddress: "vd4tfbf3",
    id: 16,
  },
  {
    UserName: "sam",
    Email: "san@gmail.com",
    WalletAddress: "jd04tfbf3",
    id: 17,
  },
  {
    UserName: "san",
    Email: "dansing@gmail.com",
    WalletAddress: "tdhtgbdef3",
    id: 19,
  },
  {
    UserName: "sant",
    Email: "san@gmail.com",
    WalletAddress: "edggthbfq",
    id: 20,
  },
  {
    UserName: "dansing",
    Email: "san@gmail.com",
    WalletAddress: "vd4tfbf3",
    id: 21,
  },
  {
    UserName: "sam",
    Email: "san@gmail.com",
    WalletAddress: "jd04tfbf3",
    id: 22,
  },
  {
    UserName: "san",
    Email: "san@gmail.com",
    WalletAddress: "tdhtgbdef3",
    id: 23,
  },
  {
    UserName: "sant",
    Email: "san@gmail.com",
    WalletAddress: "edggthbfq",
    id: 24,
  },
  {
    UserName: "santhosh",
    Email: "san@gmail.com",
    WalletAddress: "vd4tfbf3",
    id: 25,
  },
  {
    UserName: "sam",
    Email: "Dom@gmail.com",
    WalletAddress: "jd04tfbf3",
    id: 26,
  },
  {
    UserName: "san",
    Email: "san@gmail.com",
    WalletAddress: "tdhtgbdef3",
    id: 27,
  },
  {
    UserName: "sant",
    Email: "san@gmail.com",
    WalletAddress: "edggthbfq",
    id: 28,
  },
  {
    UserName: "santhosh",
    Email: "san@gmail.com",
    WalletAddress: "vd4tfbf3",
    id: 29,
  },
  {
    UserName: "sam",
    Email: "Dome@gmail.com",
    WalletAddress: "jd04tfbf3",
    id: 30,
  },
  {
    UserName: "san",
    Email: "san@gmail.com",
    WalletAddress: "tdhtgbdef3",
    id: 31,
  },
  {
    UserName: "sant",
    Email: "san@gmail.com",
    WalletAddress: "edggthbfq",
    id: 32,
  },
  {
    UserName: "Manoj",
    Email: "Manoj@gmail.com",
    WalletAddress: "vd4tfbf3",
    id: 33,
  },
];

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

let usersDetails = {
  "santhosh@gmail.com": {
    firstName: "Santhosh",
    lastName: "A",
    mobileNumber: "6986326987",
    type: "admin",
    email: "santhosh@gmail.com",
  },
  "san@gmail.com": {
    firstName: "San",
    lastName: "J",
    mobileNumber: "6986326987",
    type: "admin",
    email: "san@gmail.com",
  },
};

const userCredentials = {
  "santhosh@gmail.com": { password: "L@9" },
  "san@gmail.com": { password: "G@9" },
};

const findIndex = (lists, id) => lists.findIndex((list) => list.id === id);

function loginMidleware(req, res, next) {
  try {
    const { email, password } = req.body;
    console.log(
      "loginMidleware check",
      req.body,
      userCredentials.hasOwnProperty(email)
    );
    if (userCredentials.hasOwnProperty(email)) {
      if (userCredentials[email].password === password) {
        next();
      } else {
        res.statusCode = 401;
        res.send({ message: "Unauthorized User" });
      }
    } else {
      res.statusCode = 401;
      res.send({ message: "Unauthorized User" });
    }
    //next();
  } catch (err) {
    res.send({ message: "Unauthorized User" });
  }
}

function login(req, res) {
  const { email, password } = req.body;
  res.send(usersDetails[email]);
  console.log("succ");
}

function getArtistList(req, res) {
  try {
    res.send(ArtistsList);
  } catch (err) {
    res.statusCode = 401;
    res.send("Somthing going wrong");
  }
}

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
    const index = findIndex(GenresList, req.body.payload.id);
    GenresList.splice(index, 1);
    res.send(GenresList);
  } catch (err) {
    res.statusCode = 401;
    res.send("Somthing going wrong");
  }
}

function editProfile(req, res) {
  try {
    const { email } = req.body;
    usersDetails[email] = req.body;
    res.send(usersDetails[email]);
  } catch (err) {
    res.statusCode = 401;
    res.send("Somthing going wrong");
  }
}

app.post("/login", loginMidleware, login);
app.get("/artistList", getArtistList);
app.get("/genresList", getGenresList);
app.post("/genresList", addGenresList);
app.put("/genresList", editGenresList);
app.delete("/genresList", deleteGenresList);
app.post("/Profile", editProfile);

app.listen(5001);
