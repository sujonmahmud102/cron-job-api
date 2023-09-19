# To-Do List API Documentation

Welcome to the To-Do List API documentation. This document provides an overview of the API, its endpoints, how to use them, and details about the included cron job for managing to-do items.


## Introduction

This Node.js application provides a simple To-Do List API with CRUD (Create, Read, Update, Delete) operations for managing tasks. It also includes a cron job that runs daily to clean up completed tasks.

The base API URL is hosted at [https://cron-job-sujonmahmud102.vercel.app/](https://cron-job-sujonmahmud102.vercel.app/).

## API Endpoints

### GET "/todos"
- **Purpose**: Retrieve all to-do items.


### POST "/todos"
- **Purpose**: Create a new to-do item.


### PUT "/todos/:id"
- **Purpose**: Update a to-do item by ID.


### DELETE "/todos/:id"
- **Purpose**: Delete a to-do item by ID..


### Cron Job
- **Schedule**: The cron job runs every day at midnight.
- **Purpose**: It deletes all to-do items marked as 'completed' from the database.


### How to Use the API

To use the API, you can make HTTP requests to the provided base URL (https://cron-job-sujonmahmud102.vercel.app/) with the specified endpoints mentioned above. You can use tools like Postman, cURL, or write your own client to interact with the API.

Ensure that you format your requests according to the provided input requirements and handle the expected output and HTTP status codes accordingly.