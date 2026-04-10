const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; 

// 1. Serve the static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// 2. The SPA Fallback (Updated for Express 5)
// Using a Regular Expression /.*/ instead of a string '*'
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 3. Start the server
app.listen(PORT, () => {
    console.log(`🚀 Frontend Server running at http://localhost:${PORT}`);
});