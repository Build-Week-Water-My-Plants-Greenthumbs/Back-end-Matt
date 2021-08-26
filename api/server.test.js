const request = require('supertest');
const server = require('./server');
const db = require('../data/dbConfig');

describe('server.js', () => {

    beforeAll(async() => {
        await db.migrate.rollback();
        await db.migrate.latest();
    });

    beforeEach(async() => {
        await db('plants').truncate();
    });

    afterAll(async() => {
        await db.destroy();
    });

    describe('sanity test', () => {
        test('Proper database env variable is set', () => {
            expect(process.env.NODE_ENV).toEqual('testing');
        });
    })

    describe('[GET] /', () => {
        it('returns in valid response', () => {
            return request(server)
                .get('/')
                .expect('Content-Type', /text\/html/)
                .expect(200, '<h1>Water My Plants API</h1>');
        });
    });

    describe('[GET] /plants', () => {
        let res
        beforeAll(async() => {
            await db.seed.run();
            res = await request(server).get('/api/plants');
        })

        it('returns an array of plants', async() => {
            expect(res.body).toHaveLength(8);
        })

        it('each plant has all the required properties', () => {
            res.body.forEach(plant => {
                expect(plant).toHaveProperty('plantId');
                expect(plant).toHaveProperty('name');
                expect(plant).toHaveProperty('species');
                expect(plant).toHaveProperty('nickname');
                expect(plant).toHaveProperty('frequency');


            })
        });
    })
    describe('[GET] /plants/:id', () => {
        let res
        beforeAll(async() => {
            await db.seed.run();
            res = await request(server).get('/api/plants/1');
        })
        it('returns a plant when it exists', async() => {

            expect(res.body).toMatchObject({
                name: "Peperomia Rosso",
            });
        });

        it("returns a 404 when the plant doesn't exist", () => {
            return request(server)
                .get('/api/plants/12345')
                .expect(404, { message: 'no plant found with that id' });
        });
    });
});