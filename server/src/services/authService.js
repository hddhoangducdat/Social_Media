const mongoose = require('mongoose');

saveData = async (data) => await data.save();

module.exports = saveData;