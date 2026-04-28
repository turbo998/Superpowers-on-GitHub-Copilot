const express = require('express');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

// In-memory store
const tickets = [];

// GET /api/tickets — List all tickets
router.get('/', (req, res) => {
  res.json(tickets);
});

// GET /api/tickets/:id — Get one ticket
router.get('/:id', (req, res) => {
  const ticket = tickets.find(t => t.id === req.params.id);
  if (!ticket) return res.status(404).json({ error: 'Ticket not found' });
  res.json(ticket);
});

// POST /api/tickets — Create a ticket
router.post('/', (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const ticket = {
    id: uuidv4(),
    title,
    description: description || '',
    status: 'open',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  tickets.push(ticket);
  res.status(201).json(ticket);
});

// PUT /api/tickets/:id — Update a ticket
router.put('/:id', (req, res) => {
  const index = tickets.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Ticket not found' });

  const ticket = tickets[index];

  // BUG: creates updated object but doesn't save it back to the array
  // This is the planted bug for Scenario 2 (debug demo)
  const updated = { ...ticket, ...req.body, updatedAt: new Date().toISOString() };
  // Missing: tickets[index] = updated;

  res.json(updated);
});

// DELETE /api/tickets/:id — Delete a ticket
router.delete('/:id', (req, res) => {
  const index = tickets.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Ticket not found' });

  tickets.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
