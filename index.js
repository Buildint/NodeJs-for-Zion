const functions = require("firebase-functions");
// const admin = require('firebase-admin');
// admin.initializeApp();
// const db = admin.database();


const cron = require('node-cron');
const request = require('request');

function get(account, password, abbreviation) {
  const options = {
    url: 'https://api.cloud-building.com/api/common/accesstoken',
    body: 'account=' + account + '&password=' + password + '&abbreviation=' + abbreviation,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  
  request.post(options, (err, res, body) => {
      if (err) {
          return console.log(err);
      }
      var jsondata = JSON.parse(body)
      var token = jsondata.data.token
    //   const ref = db.ref('test')
    //   ref.set(token)
      console.log(token);
  });
}

// exports.timerUpdate = functions.pubsub.schedule('0 57 * * * *').timeZone("Asia/Kolkata").onRun((context) => {
//     get('research@buildint.co', 'buildint@123', 'kotak')
// })

cron.schedule('*/2 * * * *', () => {
  get('research@buildint.co', 'buildint@123', 'kotak')
}, {
  scheduled: true,
  timezone: "Asia/Kolkata"
});