const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const AWS = require("aws-sdk");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Initialize the AWS SDK
AWS.config.update({ region: "us-east-1" }); // replace with your AWS region
const ssm = new AWS.SSM();

const getParameter = (name) => {
  return new Promise((resolve, reject) => {
    ssm.getParameter({ Name: name, WithDecryption: true }, (err, data) => {
      if (err) reject(err);
      else resolve(data.Parameter.Value);
    });
  });
};

// Fetch the parameters from AWS Parameter Store
const initDbConnection = async () => {
  try {
    const host = await getParameter("/my-app/database/endpoint");
    const user = await getParameter("/my-app/database/username");
    const password = await getParameter("/my-app/database/password");
    console.log("host: ", host, "user: ", user, "password: ", password);
    // Create the MySQL connection using the retrieved values
    const db = mysql.createConnection({
      host,
      user,
      password,
      multipleStatements: true,
    });

    const SQLQuery = `
      CREATE DATABASE IF NOT EXISTS blogDB;
      USE blogDB;
      CREATE TABLE IF NOT EXISTS blogs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        author VARCHAR(255) NOT NULL,
        thumbnail VARCHAR(255),
        short_description TEXT,
        description TEXT
      );
    `;

    db.connect((err) => {
      if (err) console.error("Error connecting to MySQL:", err);
      else {
        console.log("Connected to MySQL database");

        db.query(SQLQuery, function (err, result) {
          if (err) throw err;
          console.log("Database blogDB with table blogs created successfully!");
        });

        // Insert initial data into the blogs table
        const sqlBlogDB =
          "INSERT INTO blogs (title, author, thumbnail, short_description, description) VALUES ?";
        var valuesBlogDB = [
          [
            "Valorant Knives",
            "Shaurya",
            "images/1.png",
            `Lorem Ipsum is simply dummy 
					  text of the printing and typesetting 
					  industry. Lorem Ipsum has been the 
					  industry's standard dummy text ever 
					  since the 1500s, when an unknown 
					  printer took a galley of type and 
					  scrambled it to make a type specimen book.`,
            `Lorem Ipsum is simply dummy 
					  text of the printing and typesetting 
					  industry. Lorem Ipsum has been the 
					  industry's standard dummy text ever 
					  since the 1500s, when an unknown 
					  printer took a galley of type and 
					  scrambled it to make a type specimen book.<br/>
					  Lorem Ipsum is simply dummy 
					  text of the printing and typesetting 
					  industry. Lorem Ipsum has been the 
					  industry's standard dummy text ever 
					  since the 1500s, when an unknown 
					  printer took a galley of type and 
					  scrambled it to make a type specimen book.<br/>
					  Lorem Ipsum is simply dummy 
					  text of the printing and typesetting 
					  industry. Lorem Ipsum has been the 
					  industry's standard dummy text ever 
					  since the 1500s, when an unknown 
					  printer took a galley of type and 
					  scrambled it to make a type specimen book.`,
          ],
          [
            "Valorant Agents",
            "Shaurya",
            "images/2.png",
            `Lorem Ipsum is simply dummy 
					  text of the printing and typesetting 
					  industry. Lorem Ipsum has been the 
					  industry's standard dummy text ever 
					  since the 1500s, when an unknown 
					  printer took a galley of type and 
					  scrambled it to make a type specimen book.`,
            `Lorem Ipsum is simply dummy 
					  text of the printing and typesetting 
					  industry. Lorem Ipsum has been the 
					  industry's standard dummy text ever 
					  since the 1500s, when an unknown 
					  printer took a galley of type and 
					  scrambled it to make a type specimen book.<br/>
					  Lorem Ipsum is simply dummy 
					  text of the printing and typesetting 
					  industry. Lorem Ipsum has been the 
					  industry's standard dummy text ever 
					  since the 1500s, when an unknown 
					  printer took a galley of type and 
					  scrambled it to make a type specimen book.<br/>
					  Lorem Ipsum is simply dummy 
					  text of the printing and typesetting 
					  industry. Lorem Ipsum has been the 
					  industry's standard dummy text ever 
					  since the 1500s, when an unknown 
					  printer took a galley of type and 
					  scrambled it to make a type specimen book.`,
          ],
          [
            "Valorant Maps",
            "Sandeep",
            "images/3.png",
            `Lorem Ipsum is simply dummy 
					  text of the printing and typesetting 
					  industry. Lorem Ipsum has been the 
					  industry's standard dummy text ever 
					  since the 1500s, when an unknown 
					  printer took a galley of type and 
					  scrambled it to make a type specimen book.`,
            `Lorem Ipsum is simply dummy 
					  text of the printing and typesetting 
					  industry. Lorem Ipsum has been the 
					  industry's standard dummy text ever 
					  since the 1500s, when an unknown 
					  printer took a galley of type and 
					  scrambled it to make a type specimen book.<br/>
					  Lorem Ipsum is simply dummy 
					  text of the printing and typesetting 
					  industry. Lorem Ipsum has been the 
					  industry's standard dummy text ever 
					  since the 1500s, when an unknown 
					  printer took a galley of type and 
					  scrambled it to make a type specimen book.<br/>
					  Lorem Ipsum is simply dummy 
					  text of the printing and typesetting 
					  industry. Lorem Ipsum has been the 
					  industry's standard dummy text ever 
					  since the 1500s, when an unknown 
					  printer took a galley of type and 
					  scrambled it to make a type specimen book.`,
          ],
          [
            "Valorant Guns",
            "Gita",
            "images/4.png",
            `Lorem Ipsum is simply dummy 
					  text of the printing and typesetting 
					  industry. Lorem Ipsum has been the 
					  industry's standard dummy text ever 
					  since the 1500s, when an unknown 
					  printer took a galley of type and 
					  scrambled it to make a type specimen book.`,
            `Lorem Ipsum is simply dummy 
					  text of the printing and typesetting 
					  industry. Lorem Ipsum has been the 
					  industry's standard dummy text ever 
					  since the 1500s, when an unknown 
					  printer took a galley of type and 
					  scrambled it to make a type specimen book.<br/>
					  Lorem Ipsum is simply dummy 
					  text of the printing and typesetting 
					  industry. Lorem Ipsum has been the 
					  industry's standard dummy text ever 
					  since the 1500s, when an unknown 
					  printer took a galley of type and 
					  scrambled it to make a type specimen book.<br/>
					  Lorem Ipsum is simply dummy 
					  text of the printing and typesetting 
					  industry. Lorem Ipsum has been the 
					  industry's standard dummy text ever 
					  since the 1500s, when an unknown 
					  printer took a galley of type and 
					  scrambled it to make a type specimen book.`,
          ],
          [
            "Valorant Tracker",
            "Shraddha",
            "images/5.png",
            `Lorem Ipsum is simply dummy 
					  text of the printing and typesetting 
					  industry. Lorem Ipsum has been the 
					  industry's standard dummy text ever 
					  since the 1500s, when an unknown 
					  printer took a galley of type and 
					  scrambled it to make a type specimen book.`,
            `Lorem Ipsum is simply dummy 
					  text of the printing and typesetting 
					  industry. Lorem Ipsum has been the 
					  industry's standard dummy text ever 
					  since the 1500s, when an unknown 
					  printer took a galley of type and 
					  scrambled it to make a type specimen book.<br/>
					  Lorem Ipsum is simply dummy 
					  text of the printing and typesetting 
					  industry. Lorem Ipsum has been the 
					  industry's standard dummy text ever 
					  since the 1500s, when an unknown 
					  printer took a galley of type and 
					  scrambled it to make a type specimen book.<br/>
					  Lorem Ipsum is simply dummy 
					  text of the printing and typesetting 
					  industry. Lorem Ipsum has been the 
					  industry's standard dummy text ever 
					  since the 1500s, when an unknown 
					  printer took a galley of type and 
					  scrambled it to make a type specimen book.`,
          ],
        ];

        db.query(sqlBlogDB, [valuesBlogDB], function (err, result) {
          if (err) throw err;
          console.log("Inserted into BlogDB table");
          console.log(result.affectedRows + " record(s) inserted");
        });

        // API routes to manage blogs
        app.get(`/api/blogs`, (req, res) => {
          db.query("SELECT * FROM blogs", (err, results) => {
            if (err) throw err;
            res.json(results);
          });
        });

        app.post("/api/blogs", (req, res) => {
          const newBlog = req.body;
          db.query("INSERT INTO blogs SET ?", newBlog, (err, results) => {
            if (err) throw err;
            res.json({ id: results.insertId });
          });
        });

        app.delete("/api/blogs/:id", (req, res) => {
          const blogId = req.params.id;
          db.query("DELETE FROM blogs WHERE id = ?", blogId, (err) => {
            if (err) throw err;
            res.json({ message: "Blog deleted successfully" });
          });
        });
      }
    });
  } catch (error) {
    console.error("Error fetching parameters:", error);
    process.exit(1);
  }
};

// Initialize the database connection
initDbConnection();

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    uptime: process.uptime(),
    timestamp: Date.now(),
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
