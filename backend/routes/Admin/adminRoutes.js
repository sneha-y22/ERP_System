const express = require('express');
const router = express.Router();
const { addUser, getAllUsers } = require('../controllers/Admin/adminController');

router.post('/add-user', addUser);
router.get('/users', getAllUsers);

module.exports = router;
