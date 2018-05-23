import data from '../models';

exports.getRequests = (req, res) => {
  Promise.all(data.Request)
    .then((requests) => {
      res.json(requests);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.createRequest = (req, res) => {
  Promise.all(new Array(req.body))
    .then((newRequest) => {
      res.status(201).json(newRequest);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.getRequest = (req, res) => {
  let myObj;
  data.Request.forEach((obj) => {
    if (obj.id === req.params.requestId) {
      myObj = obj;
    }
  });
  Promise.all(new Array(myObj))
    .then((foundRequest) => {
      res.json(foundRequest);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.updateRequest = (req, res) => {
  
};

module.exports = exports;
