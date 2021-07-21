const AWS = require("aws-sdk");
const express = require("express");
const serverless = require("serverless-http");

const app = express();

const EMPLOYEES_TABLE = process.env.EMPLOYEES_TABLE;
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

app.use(express.json());

app.get("/employees/:employeeId", async function (req, res) {
  const params = {
    TableName: EMPLOYEES_TABLE,
    Key: {
      employeeId: req.params.employeeId,
    },
  };

  try {
    const employee = await dynamoDbClient.get(params).promise();
    res.json({ employee });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not retreive employee" });
  }
});

app.put("/employees/:employeeId", async function (req, res) {
  const { name, age, role } = req.body;
  const params = {
    TableName: EMPLOYEES_TABLE,
    Item: {
      employeeId: req.params.employeeId,
      name,
      age,
      role
    },
  };

  try {
    await dynamoDbClient.put(params).promise();
    res.status(200).send();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not update employee" });
  }
});

app.post("/employees", async function (req, res) {
  const { employeeId, name, age, role } = req.body;

  const params = {
    TableName: EMPLOYEES_TABLE,
    Item: { employeeId, name, age, role },
  };

  try {
    await dynamoDbClient.put(params).promise();
    res.status(201).json({ employeeId, name });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not create employee" });
  }
});

app.delete("/employees/:employeeId", async function (req, res) {
  const params = {
    TableName: EMPLOYEES_TABLE,
    Key: {
      employeeId: req.params.employeeId,
    },
  };

  try {
    await dynamoDbClient.delete(params).promise();
    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not delete employee" });
  }
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);