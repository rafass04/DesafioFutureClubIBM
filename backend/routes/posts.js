const express = require("express");
const multer = require("multer");

const Post = require("../models/post");
const checkAuth = require("../middleware/check-auth");

const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const router = express.Router();

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg"
};

var postList = [];

const discovery = new DiscoveryV1({
  version: '2019-04-30',
  authenticator: new IamAuthenticator({
    apikey: '20RcvHJCcpU3XJNiLZ12he2YW60NY0W0j7TPS6ti8dLR',
  }),
  url: 'https://api.us-south.discovery.watson.cloud.ibm.com/instances/66aa95bf-5171-4ce5-8ab7-70cb46b4219b',
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    if (isValid) {
      error = null;
    }
    cb(error, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname
      .toLowerCase()
      .split(" ")
      .join("-");
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + "-" + Date.now() + "." + ext);
  }
});

router.post(
  "",
  checkAuth,
  multer({ storage: storage }).single("image"),
  (req, res, next) => {
    const url = req.protocol + "://" + req.get("host");
    
    const post = new Post({
      title: "alo",
      content: "aloalo",
      imagePath: url + "/images/" + req.file.filename
    });

    post.save().then(createdPost => {
      res.status(201).json({
        message: "Post added successfully",
        post: {
          ...createdPost,
          id: createdPost._id
        }
      });
    });
  }
);

//Alteraço de post, desnecessário
router.put(
  "/:id",
  checkAuth,
  multer({ storage: storage }).single("image"),
  (req, res, next) => {
    let imagePath = req.body.imagePath;
    if (req.file) {
      const url = req.protocol + "://" + req.get("host");
      imagePath = url + "/images/" + req.file.filename;
    }
    const post = new Post({
      _id: req.body.id,
      title: req.body.title,
      content: req.body.content,
      imagePath: imagePath
    });
    Post.updateOne({ _id: req.params.id }, post).then(result => {
      res.status(200).json({ message: "Update successful!" });
    });
  }
);

router.get("/discovery", (req, res) => {  
  const queryParams = {
    environmentId: '3b2437fc-28fb-4d8c-b6ae-86ad3a1d397d',
    collectionId: '0ef7146f-f006-45af-93f1-39469730d745',
    naturalLanguageQuery: req.query.searchword

  };

  discovery.query(queryParams)
    .then(queryResponse => {
      const results = queryResponse.result.results.map(item => { return { title: item.title, content: item.text, authors: item.authors, date: item.date }});
      res.status(200).json({
        message: "Posts fetched successfully!",
        posts: results,
        maxPosts: 50
      })
    }).catch(err => {
      console.log('error:', err);
    })
});

router.get("", (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const postQuery = Post.find();
  let fetchedPosts;
  if (pageSize && currentPage) {
    postQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
  }

  postQuery
    .then(documents => {
      fetchedPosts = documents;
      return Post.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Posts fetched successfully!",
        posts: fetchedPosts,
        maxPosts: count
      });
    });
});

//Busca post por id, desnecessário por enquanto
router.get("/:id", (req, res, next) => {
  Post.findById(req.params.id).then(post => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "Post not found!" });
    }
  });
});

//Deleço de post, desnecessário
router.delete("/:id", checkAuth, (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Post deleted!" });
  });
});

module.exports = router;
