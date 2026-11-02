import express from 'express';
import cors from 'cors';

// Create app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

let assignments = [
    {id: 1, subject: 'Full Stack Development', title: 'Assignment 1', status: 'pending'},
    {id: 2, subject: 'Science', title: 'Assignment 2', status: 'in-progress'},
    {id: 3, subject: 'History', title: 'Assignment 3', status: 'completed'}
];

app.get('/assignments', (req, res) => {
    res.json(assignments);
});

app.put('/api/assignments/:id/submit', (req, res) => {
    const id = parseInt(req.params.id);
    const assignment = assignments.find(a => a.id === id);

    if (!assignment) {
        return res.status(404).json({ error: 'Assignment not found' });
    }
    assignment.status = 'Submitted';
    res.json(assignment);
});



// Simple route
app.get("/", (req, res) => {
  res.send("Server running ✅");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});