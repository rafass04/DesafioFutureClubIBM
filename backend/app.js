const path = require("path");

const express = require("express");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

// const Post = require('./models/post');

const postsRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");

const app = express();

mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb+srv://desafio:wKyVzTPYQd6C8rgz@cluster0-vmthq.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Connected to DataBase!');
  })
  .catch(() => {
    console.log('Connection failed!');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
  "Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
  "Access-Control-Allow-Methods",
   "GET, POST, PATCH, PUT, DELETE, OPTIONS"
   );
  next();
});

app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);

module.exports = app;


// app.use((req, res, next) => {
//   const post = req.body;
//   console.log(post);
//   res.status(201).json({
//     message: 'Post added successfully'
//   });
// });

// **************
// ESSA PARTE NAO EXISTE NO OUTRO CODIGO.

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save().then(createdPost => {
    res.status(201).json({
      message: "Post added successfully",
      postId: createdPost._id
    });
  });
 });

app.get("/api/posts",(req, res, next) => {
  Post.find().then(documents => {
    res.status(200).json({
      message: "Posts fetched succesfully!",
      posts: documents
    });
  });

  // **********************************



  // const posts = [
  //   {
  //     id: "fad1221391",
  //     title: "First server-side post",
  //     content:"This is coming from the server"
  //   },
  //   {
  //     id: "kjksa2748479874981",
  //     title: "Second server-side post",
  //     content:"This is coming from the server!"
  //   }
  // ];
  // res.status(200).json({
  //   message: 'Posts fetched succesfully!',
  //   posts: posts
  // });
  // res.send('Hello from express!');
});

app.delete("/api/posts/:id", (req, res, next) => {
  // console.log(req.params.id);
  Post.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({ message: "Post deleted!" });
  });
});


// *********
module.exports  = app;
// *********
















// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PATCH, DELETE, OPTIONS"
//   );
//   next();
// });

// app.post("/api/posts", (req, res, next) => {
//   const post = req.body;
//   console.log(post);
//   res.status(201).json({
//     message: 'Post added successfully'
//   });
// });

// app.get("/api/posts", (req, res, next) => {
//   const posts = [
//     {
//       id: "fadf12421l",
//       title: "First server-side post",
//       content: "This is coming from the server"
//     },
//     {
//       id: "ksajflaj132",
//       title: "Second server-side post",
//       content: "This is coming from the server!"
//     }
//   ];
//   res.status(200).json({
//     message: "Posts fetched successfully!",
//     posts: posts
//   });
// });

// module.exports = app;
