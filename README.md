# To-Do List API Documentation

This document provides information on how to use the To-Do List API and how the included cron job works. The API allows you to manage to-do items, and the cron job automates the deletion of completed to-do items daily.

## Endpoints

### GET /todos
- **Purpose**: Retrieve all to-do items.
- **Input**: None.
- **Output**: Array of to-do items.
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
