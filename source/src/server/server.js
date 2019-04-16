const express = require('express');
const webpush = require('web-push');
const cors = require('cors');
const bodyParser = require('body-parser');

const PUBLIC_VAPID = 'BGjo4jgTJro8uvtA7klNsmEBA3gZA3pKbt6QMl0KaWgMeH9Nwy0KLfXOdDXFlLjqOpSlGxHyy3beUpyc_Ratrxw';
const PRIVATE_VAPID = 'gZ4D3ALAw6OypCgaV8YPUYYLkLD6NVhXBgzBHUOfcmo';

let fakeDatabase = [];

const app = express();

app.use(cors());
app.use(bodyParser.json());

webpush.setVapidDetails('mailto:you@domain.com', PUBLIC_VAPID, PRIVATE_VAPID);

app.post('/subscription', (req, res) => {
  const subscription = req.body;
  fakeDatabase.push(subscription);
});


app.post('/sendNotification', (req, res) => {
  const notificationPayload = {
    notification: {
      title: 'New Notification',
      body: 'test to progressive web app',
      icon: 'assets/icons/icon-512x512.png'
    }
  };
  
  const promises = [];

  fakeDatabase.forEach(subscription => { 
    promises.push(webpush.sendNotification(subscription, JSON.stringify(notificationPayload)));
  });

  Promise.resolve(promises).then(() => {
    res.sendStatus(200)
    fakeDatabase = [];
  });
  
  // Promise.all(promises).then(() => res.sendStatus(200));
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});