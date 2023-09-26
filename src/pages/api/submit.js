import { google } from "googleapis";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Only POST requests allowed' });
    }

    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        });

        const sheets = google.sheets({
            auth,
            version: 'v4'
        });

        // Parse the request body as JSON
        const requestBody = JSON.parse(req.body);

        const resource = {
            values: [requestBody.name, requestBody.email, requestBody.phone]
        };

        const optionalArgs = { valueInputOption: "USER_ENTERED" };
        const spreadsheetId = process.env.GOOGLE_SHEET_IDS;

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'A1:C1',
            optionalArgs,
            requestBody: {
                values: [resource.values]
            }
        });

        // Send a success response
        res.status(200).json({ message: "Data added successfully", resource: response.data });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: "An error occurred" });
    }
}
