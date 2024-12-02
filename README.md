<img src="https://socialify.git.ci/zibusisojnduna/Task-24-Restful-Api-for-Online-Recipe/image?language=1&owner=1&name=1&stargazers=1&theme=Light" alt="Task-24-Restful-Api-for-Online-Recipe" width="640" height="320" />

## Task 24:Restful API for Online Recipe

A RESTful API for managing recipes, built with Node.js, Express, and MongoDB. This API allows users to create, read, update, and delete recipes, with support for pagination, input validation, and error handling.
## Features

- **Create, Read, Update, and Delete (CRUD) Recipes**
- **Pagination** for listing recipes
- **Validation** for required fields and correct data types
- **Error Handling** for invalid data or server issues

## Tech Stack

- **Node.js** - JavaScript runtime for building the server
- **Express** - Web framework for Node.js
- **MongoDB Atlas** - Cloud-based NoSQL database
- **Mongoose** - ODM (Object Data Modeling) library for MongoDB
- **MongoDB Compass** - GUI for managing MongoDB databases

## Prerequisites

Before you begin, ensure you have the following:

- **Node.js** and **npm** installed. You can download Node.js from [here](https://nodejs.org/).
- **MongoDB Atlas** account and a cluster set up. You can create an account [here](https://www.mongodb.com/cloud/atlas).
- **MongoDB Compass** for managing your MongoDB cluster.

## Installation

1. **Clone the Repository**  
   Clone this repository to your local machine:
   ```bash
   git clone https://github.com/zibusisojnduna/Task-24-Restful-Api-for-Online-Recipe
   cd Task 24 Restful-Api-for-Online-Recipe
   ```

2.   **Install Dependencies**

Run the following command to install required packages:
```bash
npm install
```

3. **Configure MongoDB Atlas**

Go to your MongoDB Atlas dashboard.
Create a database user and whitelist your IP address.
Copy the connection string from MongoDB Atlas.

4. **Create a .env File**
   
In the root directory, create a .env file and add the following line (replacing with your actual connection string):
```env
MONGO_URI=your-mongodb-connection-string
```

5. **Start the Server**

After setting up the environment, run the following command to start the server:
```bash
node index.js
```

The server will run on http://localhost:3000

## API Endpoints
**POST**/recipes

Create a new recipe

-**Request Body:**
```json
{
name:"recipe name",
ingredients:["ingredient 1", "ingredient 2"],
instructions:"Recipe instruction here"
}
```
-**Response**:Returns the created recipe object

**GET**/recipes

Get all recipes with pagination.

-**Query Parameters:**

-page(default:1)

-pageSize(default:10)

-**Response:** Returns a list of recipes with pagination information.

**GET**/recipes/:id

Get a specific recipe by id.

-**Response:** Returns the recipe object with the specified id.

**PUT**/recipe/:id

Update a recipe by id.

-**Request Body:**

```json
{
name:"Updated recipe name",
ingredients:["new ingredient 1", "new ingredient 2"],
instructions:"Updated ingredient instructions"
}
```

-**Response:** Returns the updated recipe object.

**DELETE**/recipe/:id

Delete a recipe by its id.

-**Response:** Returns a message indicating if the deletion was successful.

## Validation

The API validates the following fields:

-**Required Fields:** name, ingredients and intructions must be present in the request body.

-**Data Types:** Ensure fields like name(string), ingredients(array) and instructions(string) follow the correct data types.

-**Custom Validation:** Email and password fields (if implemented) would require custom regex for format validation.

## Error Handling

-**404:Bad Request:** If required fields are missing or data is invalid.

-**404:Not Found:** If the requested recipe does not exist.

-**500:Internal Server Error:** For any server-sider issues.

## Testing

You can test all API endpoints using **Insomnia** or **Postman** .





