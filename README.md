# API Testing Project

This is a REST API project built with Express.js.  
It focuses on unit testing using Jest and Supertest, validating core CRUD operations on a coffee inventory.

## Tests Covered

| Route        | Method | Test Description                                 |
|--------------|--------|--------------------------------------------------|
| `/cafes`     | GET    | Returns status 200 and a non-empty array        |
| `/cafes/:id` | DELETE | Returns 404 if the coffee ID doesn't exist      |
| `/cafes`     | POST   | Adds a new coffee and returns status 201        |
| `/cafes/:id` | PUT    | Returns 400 if param ID and body ID don’t match |

## How to Run

1. Install dependencies
   
   ```bash
   npm install

3. Run tests
   
   ```bash
   npm test

