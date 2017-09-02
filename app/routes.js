let express = require('express'),
  router = express.Router(),
  book = require('./controllers/book')
  mongoose = require('mongoose');

router.get('/',(req, res) => {
 res.json({message:'Welcome to our Bookstore!'})
})

router.get('/book', book.getBooks);
router.post('/book',book.postBook);
router.get('/book/:id',book.getBook);
router.put('/book/:id',book.updateBook);
router.delete('/book/:id',book.deleteBook);


module.exports = router;
