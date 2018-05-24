import data from '../models';

exports.getRequests = (req, res) => {
  Promise.all(data.Request)
    .then((requests) => {
      res.status(200).json(requests);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send({ message: 'Nothing was found' });
    });
};

exports.createRequest = (req, res) => {
  Promise.all(new Array(req.body))
    .then((newRequest) => {
      res.status(201).json(newRequest);
    })
    .catch((err) => {
      console.log(err);
      res.status(401).send({ message: 'Unauthorized to create request' });
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
      res.status(200).json(foundRequest);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send({ message: 'Nothing was found' });
    });
};

exports.updateRequest = (req, res) => {
  let myObj;
  data.Request.forEach((obj) => {
    if (obj.id === req.params.requestId) {
      myObj = {
        title: req.body.title,
        desc: req.body.desc,
        pic: req.body.pic,
        made_by: req.body.made_by,
      };
    }
  });
  Promise.all(new Array(myObj))
    .then((updatedRequest) => {
      res.status(200).json(updatedRequest);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send({ message: 'Update failed' });
    });
};

module.exports = exports;
