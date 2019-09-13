const express = require('express');
const connection = require('./connection');
const router = express.Router();

router.get('/:id', (req, res, next) => {
  connection.query('SELECT * FROM `creators` WHERE `creatorID` =' + req.params.id, (err, rows, fields) => {
    if (err) throw err;
    res.json(rows);
  });
});

router.get('/:id/submissions', (req, res, next) => {
  connection.query('SELECT * FROM `submissions` WHERE `creatorID` =' + req.params.id, (err, rows, fields) => {
    if (err) throw err;
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].submissionThumbnail) {
        rows[i].submissionThumbnail = rows[i].submissionThumbnail.substring(rows[i].submissionThumbnail.indexOf('uploads'));
      }
      if (rows[i].submissionContent) {
        rows[i].submissionContent = rows[i].submissionContent.substring(rows[i].submissionContent.indexOf('uploads'));
      }
    }
    res.json(rows);
  });

});

module.exports = router;
