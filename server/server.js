const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from React app
app.use(express.static(path.join(__dirname, '../client/build')));

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'VSDC Server is running' });
});

app.get('/api/team', (req, res) => {
  res.json({
    leadership: [
      { name: "Manas", role: "Lead - Data Science", year: "Final Year", dept: "Data Science", initial: "M" },
      { name: "Ayushi", role: "Lead - Operations", year: "Second Year", dept: "BCA", initial: "A" },
      { name: "Divyanshu", role: "Lead - Technical", year: "Final Year", dept: "DS", initial: "D" },
      { name: "Amiti", role: "Lead - Communications", year: "Second Year", dept: "BCA", initial: "Am" }
    ],
    members: [
      { name: "Gyanankur", role: "Member - Data Science", year: "Final Year", dept: "Data Science", initial: "G" },
      { name: "Mahima", role: "Member - Data Science", year: "Final Year", dept: "Data Science", initial: "Mah" },
      { name: "Aayush", role: "Member - Data Science", year: "Final Year", dept: "Data Science", initial: "Aa" }
    ]
  });
});

app.get('/api/events', (req, res) => {
  res.json([
    {
      title: "AI Workshop Series",
      date: "March 2024",
      description: "Hands-on workshop covering neural networks, deep learning fundamentals, and practical implementation using TensorFlow.",
      attendees: "45+ Participants"
    },
    {
      title: "Web Development Bootcamp",
      date: "February 2024",
      description: "Intensive 3-day bootcamp on modern web technologies including React, Node.js, and deployment strategies.",
      attendees: "60+ Participants"
    },
    {
      title: "Data Science Hackathon",
      date: "January 2024",
      description: "24-hour hackathon challenging students to solve real-world data problems using analytics and machine learning.",
      attendees: "30+ Teams"
    }
  ]);
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
