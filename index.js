import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Required for using __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    const { email, password, phone } = req.body;
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Phone Number:', phone);
    res.send('Form submitted successfully!');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
