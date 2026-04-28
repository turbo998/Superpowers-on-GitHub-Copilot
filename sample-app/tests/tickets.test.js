const request = require('supertest');
const app = require('../src/app');

describe('Health Check', () => {
  it('should return 200 with status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});

describe('POST /api/tickets', () => {
  it('should create a ticket and return 201', async () => {
    const res = await request(app)
      .post('/api/tickets')
      .send({ title: 'Test ticket', description: 'A test' });

    expect(res.status).toBe(201);
    expect(res.body.title).toBe('Test ticket');
    expect(res.body.id).toBeDefined();
    expect(res.body.status).toBe('open');
  });

  it('should return 400 when title is missing', async () => {
    const res = await request(app)
      .post('/api/tickets')
      .send({ description: 'No title' });

    expect(res.status).toBe(400);
  });
});

describe('GET /api/tickets', () => {
  it('should return an array of tickets', async () => {
    const res = await request(app).get('/api/tickets');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe('GET /api/tickets/:id', () => {
  it('should return 404 for non-existent ticket', async () => {
    const res = await request(app).get('/api/tickets/nonexistent');
    expect(res.status).toBe(404);
  });
});
