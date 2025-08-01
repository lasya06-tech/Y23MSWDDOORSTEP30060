const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5500;

// Serve static files from the 'public' directory
// 
app.use(express.static(path.join(__dirname, 'public')));

// Handle GET requests to the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'empathy.png'));
  });
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});