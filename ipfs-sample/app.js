require('dotenv').config();
const express = require('express');
const fs = require('fs');
const ipfs = require('./config/ipfs-config');

const app = express();
const port = process.env.PORT || 3000;

const upload = require('./config/multer-config');

app.post('/share', upload, async (req, res) => {
    try {
        const { path, filename } = req.file;
        const data = await fs.promises.readFile(path);
        const result = await ipfs.add({ path: filename.split('.')[0], content: data });

        // delete local file
        await fs.promises.unlink(req.file.path);

        const url = `https://ipfs.io/ipfs/${result.cid}`;
        return res.send({ url });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => console.log(`Server listening on port:${port}`));
