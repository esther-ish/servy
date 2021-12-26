const Responses = require('../common/API_Responses');
const Dynamo = require('../common/Dynamo');

const tableName = process.env.tableName;

exports.handler = async(event) => {
    console.log('event', event);

    if (!event.pathParameters || !event.pathParameters.ID) {
        return Responses._400({ message: 'Missing ID from the path' });
    }

    let ID = event.pathParameters.ID;

    const user = await Dynamo.get(ID, tableName).catch(err => {
        console.log('Error in Dynamo Get:\t', err);
        return null;
    });

    if (!user) {
        return Responses._400({ message: `User not found: ${ID}` });
    }
    return Responses._200(user);
};