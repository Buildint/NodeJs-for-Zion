const functions = require("firebase-functions");
const request = require('request');


const admin = require("firebase-admin");
admin.initializeApp();
const db2 = admin.database()



exports.timerUpdate = functions.pubsub.schedule('0 * * * *').timeZone("Asia/Kolkata").onRun((context) => {
    let date = new Date()
    var ISTDate = new Date(date.getTime()+19800000).toJSON().slice(0,10);
    var ISTTime = new Date(date.getTime()+19800000).toJSON().slice(11,16);
    function gets(account, password, abbreviation, db, device_id, dpoint, child) {
        const getToken = {
            url: 'https://api.cloud-building.com/api/common/accesstoken',
            body: 'account=' + account + '&password=' + password + '&abbreviation=' + abbreviation,
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            },
        };
        request.post(getToken, (err, res, body) => {
            var tjData = JSON.parse(body)
            var token = tjData.data.token
            const getData = {
            url: 'https://api.cloud-building.com/api/normal/devicepoint?deviceid=' + device_id,
            headers: {
                'db': db,
                'Authorization': token
            }
            }
            request.get(getData, (err, res, bodys) =>{
            let djData = JSON.parse(bodys)
            let name = djData.data.device.points[dpoint].name
            let id = djData.data.device.points[dpoint]._id
            let value = djData.data.devicepoint[id].value
            console.log(child, name, value)
            db2.ref(child).child(ISTDate).child(ISTTime).child(name).set(value)
            })
        });
    }
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '6287588cfad13d5e689c36a5', 5, 'kotak/consumption/chamarajapet Meter 1')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '6287588cfad13d5e689c36a5', 6, 'kotak/consumption/chamarajapet Meter 1')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '6287588cfad13d5e689c36a5', 7, 'kotak/consumption/chamarajapet Meter 1')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '6287588cfad13d5e689c36a5', 21, 'kotak/consumption/chamarajapet Meter 1')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '6287588cfad13d5e689c36a5', 22, 'kotak/consumption/chamarajapet Meter 1')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '6287588cfad13d5e689c36a5', 23, 'kotak/consumption/chamarajapet Meter 1')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '6287588cfad13d5e689c36a5', 37, 'kotak/consumption/chamarajapet Meter 1')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '6287588cfad13d5e689c36a5', 38, 'kotak/consumption/chamarajapet Meter 1')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '6287588cfad13d5e689c36a5', 39, 'kotak/consumption/chamarajapet Meter 1')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '6287588cfad13d5e689c36a5', 53, 'kotak/consumption/chamarajapet Meter 1')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '6287588cfad13d5e689c36a5', 54, 'kotak/consumption/chamarajapet Meter 1')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '6287588cfad13d5e689c36a5', 55, 'kotak/consumption/chamarajapet Meter 1')
    }, 1500);
    
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628758a2fad13d5e689ce663', 5, 'kotak/consumption/chamarajapet Meter 2')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628758a2fad13d5e689ce663', 6, 'kotak/consumption/chamarajapet Meter 2')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628758a2fad13d5e689ce663', 7, 'kotak/consumption/chamarajapet Meter 2')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628758a2fad13d5e689ce663', 21, 'kotak/consumption/chamarajapet Meter 2')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628758a2fad13d5e689ce663', 22, 'kotak/consumption/chamarajapet Meter 2')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628758a2fad13d5e689ce663', 23, 'kotak/consumption/chamarajapet Meter 2')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628758a2fad13d5e689ce663', 37, 'kotak/consumption/chamarajapet Meter 2')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628758a2fad13d5e689ce663', 38, 'kotak/consumption/chamarajapet Meter 2')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628758a2fad13d5e689ce663', 39, 'kotak/consumption/chamarajapet Meter 2')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628758a2fad13d5e689ce663', 53, 'kotak/consumption/chamarajapet Meter 2')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628758a2fad13d5e689ce663', 54, 'kotak/consumption/chamarajapet Meter 2')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628758a2fad13d5e689ce663', 55, 'kotak/consumption/chamarajapet Meter 2')
    }, 1500);
    
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '6288c7f0fad13d5e6800f932', 5, 'kotak/consumption/ATM cambridge')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '6288c7f0fad13d5e6800f932', 6, 'kotak/consumption/ATM cambridge')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '6288c7f0fad13d5e6800f932', 7, 'kotak/consumption/ATM cambridge')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '6288c7f0fad13d5e6800f932', 21, 'kotak/consumption/ATM cambridge')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '6288c7f0fad13d5e6800f932', 22, 'kotak/consumption/ATM cambridge')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '6288c7f0fad13d5e6800f932', 23, 'kotak/consumption/ATM cambridge')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '6288c7f0fad13d5e6800f932', 37, 'kotak/consumption/ATM cambridge')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '6288c7f0fad13d5e6800f932', 38, 'kotak/consumption/ATM cambridge')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '6288c7f0fad13d5e6800f932', 39, 'kotak/consumption/ATM cambridge')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '6288c7f0fad13d5e6800f932', 53, 'kotak/consumption/ATM cambridge')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '6288c7f0fad13d5e6800f932', 54, 'kotak/consumption/ATM cambridge')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '6288c7f0fad13d5e6800f932', 55, 'kotak/consumption/ATM cambridge')
    }, 1500);
    
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628c99f4fad13d5e68a2a241', 5, 'kotak/consumption/Landford Meter 1')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628c99f4fad13d5e68a2a241', 6, 'kotak/consumption/Landford Meter 1')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628c99f4fad13d5e68a2a241', 7, 'kotak/consumption/Landford Meter 1')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628c99f4fad13d5e68a2a241', 21, 'kotak/consumption/Landford Meter 1')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628c99f4fad13d5e68a2a241', 22, 'kotak/consumption/Landford Meter 1')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628c99f4fad13d5e68a2a241', 23, 'kotak/consumption/Landford Meter 1')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628c99f4fad13d5e68a2a241', 37, 'kotak/consumption/Landford Meter 1')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628c99f4fad13d5e68a2a241', 38, 'kotak/consumption/Landford Meter 1')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628c99f4fad13d5e68a2a241', 39, 'kotak/consumption/Landford Meter 1')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628c99f4fad13d5e68a2a241', 53, 'kotak/consumption/Landford Meter 1')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628c99f4fad13d5e68a2a241', 54, 'kotak/consumption/Landford Meter 1')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628c99f4fad13d5e68a2a241', 55, 'kotak/consumption/Landford Meter 1')
    }, 1500);
    
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628c99f4fad13d5e68a2a241', 5, 'kotak/consumption/Landford Meter 2')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628c99f4fad13d5e68a2a241', 6, 'kotak/consumption/Landford Meter 2')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628c99f4fad13d5e68a2a241', 7, 'kotak/consumption/Landford Meter 2')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628c99f4fad13d5e68a2a241', 21, 'kotak/consumption/Landford Meter 2')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628c99f4fad13d5e68a2a241', 22, 'kotak/consumption/Landford Meter 2')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628c99f4fad13d5e68a2a241', 23, 'kotak/consumption/Landford Meter 2')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628c99f4fad13d5e68a2a241', 37, 'kotak/consumption/Landford Meter 2')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628c99f4fad13d5e68a2a241', 38, 'kotak/consumption/Landford Meter 2')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628c99f4fad13d5e68a2a241', 39, 'kotak/consumption/Landford Meter 2')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628c99f4fad13d5e68a2a241', 53, 'kotak/consumption/Landford Meter 2')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628c99f4fad13d5e68a2a241', 54, 'kotak/consumption/Landford Meter 2')
    }, 1500);
    setTimeout(() => {
        gets('research@buildint.co', 'buildint@123', 'kotak', '628210238d6d7a00117b8630', '628c99f4fad13d5e68a2a241', 55, 'kotak/consumption/Landford Meter 2')
    }, 1500);
})