const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "database-1.cr8miiusqpre.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Hello3100",
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

    // Create the "blogDB" database
    db.query(SQLQuery, function (err, result) {
      if (err) throw err;
      console.log("Database blogDB with table blogs created sucessfully!");
    });

    // Inserting data into 'blogs' table
    var sqlBlogDB =
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

    // Retrieve blogs
    app.get(`/api/blogs`, (req, res) => {
      db.query("SELECT * FROM blogs", (err, results) => {
        if (err) throw err;
        res.json(results);
      });
    });

    // Add a new blog
    app.post("/api/blogs", (req, res) => {
      const newBlog = req.body;
      try {
        db.query("INSERT INTO blogs SET ?", newBlog, (err, results) => {
          if (err) throw err;
          else {
            res.json({ id: results.insertId });
            console.log(`Data Inserted Successfully: ${newBlog}`);
          }
        });
      } catch (error) {
        console.log(error);
        res.status(500).send("Error in saving the blog");
      }
    });

    // Remove a blog
    app.delete("/api/blogs/:id", (req, res) => {
      const blogId = req.params.id;
      db.query("DELETE FROM blogs WHERE id = ?", blogId, (err) => {
        if (err) throw err;
        res.json({ message: "Blog deleted successfully" });
        console.log(`Blog Deleted Successfully : ${blogId}`);
      });
    });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
