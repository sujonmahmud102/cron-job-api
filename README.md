# To-Do List API Documentation

Welcome to the To-Do List API documentation. This document provides an overview of the API, its endpoints, how to use them, and details about the included cron job for managing to-do items.

## Table of Contents
- [Introduction](#introduction)
- [API Endpoints](#api-endpoints)
- [Cron Job](#cron-job)
- [How to Use the API](#how-to-use-the-api)
- [Demonstrations](#demonstrations)
- [Reflection Report](#reflection-report)

## Introduction

This Node.js application provides a simple To-Do List API with CRUD (Create, Read, Update, Delete) operations for managing tasks. It also includes a cron job that runs daily to clean up completed tasks.

The base API URL is hosted at [https://cron-job-sujonmahmud102.vercel.app/](https://cron-job-sujonmahmud102.vercel.app/).

## API Endpoints

### GET "/todos"
- **Purpose**: Retrieve all to-do items.
- **Input**: None.
- **Output**: An array of to-do items.
- **Example Response**:
  ```json
  [
    {
      "id": "1",
      "task": "Buy groceries",
      "completed": false
    },
    {
      "id": "2",
      "task": "Finish work project",
      "completed": true
    }
  ]

### POST "/todos"
- **Purpose**: Create a new to-do item.
- **Input**: JSON request body with task and completed fields.
- **Output**: The created to-do item.


### PUT "/todos/:id"
- **Purpose**: Update a to-do item by ID.
- **Input**: JSON request body with task and completed fields.
- **Output**: The updated to-do item or a 404 error if the ID is not found.


### DELETE "/todos/:id"
- **Purpose**: Delete a to-do item by ID..
- **Input**: None.
- **Output**: No content (204 No Content) or a 404 error if the ID is not found.


### Cron Job
- **Schedule**: The cron job runs every day at midnight.
- **Purpose**: It deletes all to-do items marked as 'completed' from the database.


### How to Use the API

To use the API, you can make HTTP requests to the provided base URL (https://cron-job-sujonmahmud102.vercel.app/) with the specified endpoints mentioned above. You can use tools like Postman, cURL, or write your own client to interact with the API.

Ensure that you format your requests according to the provided input requirements and handle the expected output and HTTP status codes accordingly.



