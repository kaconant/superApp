var express = require('express');
var router = express.Router();

const util = require('util');
const fs = require('fs');

const readFile = util.promisify(fs.readFile);
/* GET home page. */
router.get('/', (req, res, next) => {
  // read the blog post from the file
  readFile('blog-data.json')
    .then((data) => {
      const blogPosts = JSON.parse(data);

      let dataForTemplate = {
        title: 'info',
        myName: 'krissy',
        cats: ['oakley', 'milla'],
        posts: blogPosts
      };
      // here is where res.render
      res.render('index', dataForTemplate); 
    }).catch(err => {
      console.log(err);
      })
});

router.get('/:postId', (req, res, next) => {
  readFile('blog-data.json')
  .then((data) => {

    const blogPosts = JSON.parse(data);
    const id = Number(request.params.id);
    const thePost = blogPosts[id];
    
    console.log('the id is: ' + id);
    console.log('here is the post: ' + JSON.stringify(thePost))

    return thePost;
  })
  .then((blogPostData) => {
    // here is where res.render
    res.render('blog-post', blogPostData);
    
  }).catch(err => {
    console.log(err);
    })
});

module.exports = router;
