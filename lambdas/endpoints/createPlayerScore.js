const tableName = process.env.tableName;

exports.handler = async event => {
    console.log('event', event);

    if (!event.pathParameters || !event.pathParameters.ID) {
        return Responses._400({ message: 'Missing ID from the path' });
    }

    let ID = event.pathParameters.ID;

    let user = JSON.parse(event.body);
    user.ID = ID;

    let newUser = await Dynamo.write(user, tableName).catch(err => {
        console.log('Error in Dynamo Write:\t', err);
        return null;
    });

    if (!newUser) {
        return Responses._400({ message: `Failed to write user by ID: ${ID}` });
    }
    return Responses._200({ newUser });
}