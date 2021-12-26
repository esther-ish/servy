const Responses = require('../common/API_Responses');

exports.handler = async(event) => {
    console.log('event', event);

    if (!event.pathParameters || !event.pathParameters.ID) {
        return Responses._400({ message: 'Missing ID from the path' });
    }

    let ID = event.pathParameters.ID;

    if (data[ID]) {
        return Responses._200(data[ID]);
    }

    return Responses._400({ message: `User not found: ${ID}` });
};

const data = {
    1234: { name: 'John', age: 30, job: 'developer' },
    5678: { name: 'Jane', age: 25, job: 'designer' },
    9012: { name: 'Jack', age: 35, job: 'manager' }
};