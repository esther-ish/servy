const Response = {
    _200(data = {}) {
        return {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Content-Type': 'application/json'
            },
            statusCode: 200,
            body: JSON.stringify(data)
        };
    },

    _400(data = {}) {
        return {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Content-Type': 'application/json'
            },
            statusCode: 400,
            body: JSON.stringify(data)
        };
    },
};

module.exports = Response;

// const Responses = {
//     // Success
//     success: (data, message) => {
//         return {
//             statusCode: 200,
//             body: JSON.stringify({
//                 data,
//                 message
//             })
//         };
//     },
//     // Error
//     error: (message, statusCode = 500) => {
//         return {
//             statusCode,
//             body: JSON.stringify({
//                 message
//             })
//         };
//     }
// }