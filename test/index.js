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

describe('/GET/:id request', () => {
    it('should GET a particular request', done => {
        const request = {
            id: Math.random().toString(16).slice(-12),
            title: "Repair of wooden chairs",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aperiam!",
            pic: "http://placehold.it/150/771796",
            made_by: "Abubakar",
            date: new Date()
        };
        chai.request(server)
            .get('/api/v1/users/requests/' + request.id)
            .send(request)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});