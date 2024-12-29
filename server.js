const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware for parsing JSON
app.use(express.json());
app.use(cors());

// Data Dummy Baru
let resources = [
    { id: 1, name: "AHMAD MAULIDI", student_id: "2022903430002" },
    { id: 2, name: "Alzier Diaz Baihaqy Ritonga", student_id: "2022903430005" },
    { id: 3, name: "AS SIDDIQIE", student_id: "2022903430006" },
    { id: 4, name: "Deddy Nur Tri Rizki Maulana", student_id: "2022903430009" },
    { id: 5, name: "Erika Louisa Saphira", student_id: "2022903430061" },
    { id: 6, name: "Filar Al Hafis", student_id: "2022903430062" },
    { id: 7, name: "Hilyatunnisa", student_id: "2022903430063" },
    { id: 8, name: "Intan Firdana", student_id: "2022903430065" },
    { id: 9, name: "Khairul Amna", student_id: "2022903430068" },
    { id: 10, name: "Mhd Zulkhairi", student_id: "2022903430071" },
    { id: 11, name: "Muhammad Aidul Fitrah", student_id: "2022903430073" },
    { id: 12, name: "MUHAMMAD IKHSAN", student_id: "2022903430022" },
    { id: 13, name: "MUHAMMAD RIZANA FAJRI", student_id: "2022903430023" },
    { id: 14, name: "MUHAMMAD YUSUF", student_id: "2022903430025" },
    { id: 15, name: "Nadia Febianti", student_id: "2022903430027" },
    { id: 16, name: "Nazarul Qudri", student_id: "2022903430028" },
    { id: 17, name: "PRASETYO", student_id: "2022903430049" },
    { id: 18, name: "Rahmat Hidayat", student_id: "2022903430079" },
    { id: 19, name: "Sahibul Aguswandi", student_id: "2022903430080" },
    { id: 20, name: "SHIFAUS SAUQINAH", student_id: "2022903430033" },
    { id: 21, name: "Sulthan Fajar Al-Faysha", student_id: "2022903430082" },
    { id: 22, name: "TEUNGKU ZULKIFLI", student_id: "2022903430035" },
    { id: 23, name: "ulya chaira", student_id: "2022903430037" },
];

// GET: Fetch resources
app.get('/api/resources', (req, res) => {
    res.json(resources);
});

// POST: Create a new resource
app.post('/api/resources', (req, res) => {
    const newResource = { id: resources.length + 1, ...req.body };
    resources.push(newResource);
    res.status(201).json(newResource);
});

// PUT: Update an existing resource
app.put('/api/resources/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = resources.findIndex(r => r.id === id);
    if (index !== -1) {
        resources[index] = { id, ...req.body };
        res.json(resources[index]);
    } else {
        res.status(404).json({ message: "Resource not found" });
    }
});

// DELETE: Delete a resource
app.delete('/api/resources/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = resources.findIndex(r => r.id === id);
    if (index !== -1) {
        const deleted = resources.splice(index, 1);
        res.json(deleted[0]);
    } else {
        res.status(404).json({ message: "Resource not found" });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});