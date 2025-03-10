const { MongoClient } = require("mongodb");

async function main() {
    const uri = "mongodb+srv://brighton:admin123@cluster0.vdm2r.mongodb.net/";

    const client = new MongoClient(uri);

    try {
        await client.connect();
    }
    catch (e) {
        console.error(e);
    }
    finally {
        await client.close();
    }
}
main().catch(console.error);
async function listDatabases(client) {