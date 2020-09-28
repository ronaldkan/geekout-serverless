'use strict';

const dynamodb = require('./dynamodb');

module.exports.get = (event, context, callback) => {

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      "division": event.pathParameters.division
    },
    KeyConditionExpression: "#div = :div_value",
    ExpressionAttributeNames:{
        "#div": "division"
    },
    ExpressionAttributeValues: {
        ":div_value": event.pathParameters.division
    }
  };

  // fetch todo from the database
  dynamodb.query(params, (error, data) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t find the donation items matching division.',
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(data.Items),
    };
    callback(null, response);
  });
};