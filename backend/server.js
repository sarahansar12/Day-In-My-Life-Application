const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const app = express();
app.use(express.json());

const port = 3000;

app.post('/media', upload.single(image), (req, res) => {
    const file = req.file;
    const date = req.body.date;

    if (!file) {
        return res.status(400).send('No file uploaded.');
    }

    console.log('File uploaded:', file.originalname)
    console.log('Date:', date);

    res.status(200).send('Upload successful');  
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});