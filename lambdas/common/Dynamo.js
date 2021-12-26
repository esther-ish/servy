const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient();

const Dynamo = {
    async get(ID, TableName) {
        const params = {
            TableName,
            Key: {
                ID
            }
        };

        const data = await documentClient.get(params).promise();

        if (!data || !data.Item) {
            throw Error(`There was an error fetching the data for ID of ${ID} from ${TableName}`);
        }
        console.log(data);

        return data.Item;
    },

    async write(data, TableName) {
        if (!data.ID) {
            throw Error('Missing ID from the data');
        }

        const params = {
            TableName,
            Item: data
        };

        const result = await documentClient.put(params).promise();

        if (!result || !result.Item) {
            throw Error(`There was an error writing the data for ID of ${data.ID} from ${TableName}`);
        }

        return data;
    }
};

module.exports = Dynamo;