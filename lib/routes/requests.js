import express from 'express';
import helpers from '../helpers/requests';

const router = express.Router();

router.route('/')
    .get(helpers.getRequests)
//     .post(helpers.createRequest)

router.route('/:requestId')
    .get(helpers.getRequest)
//     .put(helpers.updateRequest)

module.exports = router;