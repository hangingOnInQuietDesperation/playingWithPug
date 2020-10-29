//   index.js
const express = require('express');

const router = express.Router();

router.get('/store', (req, res) => {
	res.render('store', {title: 'Store Page'});
});

router.post('/store', (req, res) => {
	res.render('store', {title: 'Store Page'});
});


module.exports = router;
