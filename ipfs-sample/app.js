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


const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const client = ipfsClient.create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    headers: {
        authorization: auth,
    }
});

app.post('/upload', upload.single('avatar'), async (req, res) => {
    try {
        let data = Buffer.from(fs.readFileSync(req.file.path));

        return new bluebird((resolve, reject) => {
            client.add(data).then((response) => {
                resolve(response)
            });
            fs.unlinkSync(req.file.path);
        })
            .then((x) => {
                return res.send(x.path);
            })
            .catch((err) => {
                res.send({ Error: err });
            });
    } catch (err) {
        console.log(err);
    }
});


const uploadFileToIPFS = (data) => {
    return new Promise((resolve, reject) => {
        client.add(data)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
};

app.post('/share-file', upload.single('avatar'), async (req, res) => {
    try {
        let data = Buffer.from(fs.readFileSync(req.file.path));

        uploadFileToIPFS(data)
            .then(response => {
                return res.send(response.path);
            })
            .catch(error => {
                res.send({ Error: error });
            });
    } catch (err) {
        return res.send(501, 'Error', err);
    }
});

app.listen(port, () => console.log(`Server listening on port:${port}`));
