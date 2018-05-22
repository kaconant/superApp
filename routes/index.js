var express = require('express');
var router = express.Router();

const util = require('util');
const fs = require('fs');

const readFile = util.promisify(fs.readFile);
/* GET home page. */
router.get('/', (req, res, next) => {
  // read the blog post from the file

  console.log('hey');
  readFile('blog-data.json')
    .then((data) => {
      const blogPosts = JSON.parse(data);

      let dataForTemplate = {
        title: 'info',
        myName: 'krissy',
        cats: ['oakley', 'milla'],
        posts: blogPosts,
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


// add another route that listens for GET requests at the path "/new-post". This route should render a 
// template that shows an HTML form for a new blog post
// on this form, set the "action" attribute to "/new-post" and set the "method" attribute to "POST". 
// (When the user fills out and submits the form, it will try to send a POST request to the Express server. 
// You'll create another route for this in the next step.)

  router.get('/new-post', req, res, next => {
    res.render('blog-post', blogPostData);
  });

module.exports = router;
