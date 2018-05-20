import data from '../models';

exports.getRequests = (req, res) => {
    Promise.all(data.Request)
        .then((requests) => {
            res.json(requests);
        })
        .catch((err) => {
            res.send(err);
        });
}

module.exports = exports;