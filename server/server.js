const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;

const app = express();
const port = 5500;

app.use(bodyParser.json());

app.post('/saveShow', async (req, res) => {
    try {
        // Read existing data from schedule.json
        const data = await fs.readFile('./json/schedule.json', 'utf8');

        // Parse the existing JSON data
        const existingData = JSON.parse(data);

        // Update the shows array
        existingData.network.shows.push(req.body);

        // Convert the updated data back to JSON
        const updatedData = JSON.stringify(existingData, null, 2);

        // Write the updated data back to schedule.json
        await fs.writeFile('./json/schedule.json', updatedData, 'utf8');

        res.json({ success: true });
    } catch (error) {
        console.error('Error updating schedule:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
