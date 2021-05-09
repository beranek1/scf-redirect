'use strict';
exports.main_handler = async (event, context,callback ) => {
    return {
        isBase64Encoded: false,
        statusCode: 302,
        headers: { 'Location': 'https://github.com/beranek1', 'Cache-Control': 'max-age=3600' },
        body: ""
    }
}
