const fs = require("fs");
const { mkdir } = require("fs/promises");
const { Readable } = require('stream');
const { finished } = require('stream/promises');
const path = require("path");
async function getImage(url, fileName) {
    try {
        const imageResponse = await fetch(url);
        if (!fs.existsSync("downloads")) await mkdir("downloads");
        const destination = path.resolve("./downloads", fileName);
        const fileStream = fs.createWriteStream(destination, { flags: 'wx' });
        await finished(Readable.fromWeb(imageResponse.body).pipe(fileStream));
    } catch (error) {
        console.error(error);
    }
}
function getAllImages() {
    for (let x = 1; x < 205; x++) {
        const imageUrl = `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${x}.png`;
        const fileName = `SV3pt5_EN_${x}.png`;
        getImage(imageUrl, fileName);
        console.log(`Fetched Image ${x}/204`);
    }
}
getAllImages();