import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../lib/index.js';

const should = chai.should();
chai.use(chaiHttp);

describe('Test Express Server Setup', () => {
    it('should return 200', done => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});

describe('/GET requests', () => {
    it('should GET all the requests', done => {
        chai.request(server)
            .get('/api/v1/users/requests')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});