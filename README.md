# SFNodeClub
A simple web application built using Express/Node, Angular, Mongo, Jade templates, Stylus and few other tools

# Project Requirements
Node v4.3.0

Express v4.13.4

Mongoose v4.4.11

body-parser v1.15.0

jade v1.11.0

stylus v0.54.2

# Basic Setup
Clone the repo or download the Zip file.

Unzip into a directory.

Navigate to the directory using the "Command Prompt" (windows) or "Terminal" (Mac) and start the node server by typing
"node server.js"

Open your preferred browser (Chrome or Firefox), and type "http://localhost:8090/"
(The server is listening at port 8090)

### Basic Setup Screen-Shots
![Alt text](/Extras/Screenshots/project-setup.png?raw=true "Code at the project level")
![Alt text](/Extras/Screenshots/start-node-server-2.png?raw=true "Start node server")


# Mongo DB Setup
Create a new DB called "sfnodeclub"
![Alt text](/Extras/Screenshots/mongo-db-name.png?raw=true "Mongo DB name")

Create a new collection called "events"

### "Events" Schema
```
    name: String,
    todaysEvent: Boolean,
    eventDate: Date,
    eventDesc: String,
    AttendeeCount: Number
```

![Alt text](/Extras/Screenshots/mongo-events-collection-2.png?raw=true "New Collection called Events")

(Optional) Insert one or more rows to the collection (If no rows are present, the code will try to use an internal collection that is hardcoded set of records)

### Sample records (You can copy and paste each row)
```
name: 'SFNode Club Meetup',todaysEvent: true,eventDate: new Date('Apr 07, 2016'),eventDesc: 'Meet and greet fellow node developers and learn about security in node.',AttendeeCount: 60
name: 'Next Month SFNode Club Meetup',todaysEvent: false,eventDate: new Date('May 07, 2016'),eventDesc: 'Learn about new features of node.js and how to use Karma as a testing too.',AttendeeCount: 120
name: 'New SFNode Club Meetup',todaysEvent: false,eventDate: new Date('Jun 07, 2016'),eventDesc: 'node.js has new task manager tools. Come learn about them and meet and greet Paul Irish.', AttendeeCount: 40
```

![Alt text](/Extras/Screenshots/mongo-events-collection-5.png?raw=true "New Collection called Events")

# Supported Browsers
Modern browsers (> IE9)

# Web App Screen Shots
![Alt text](/Extras/Screenshots/landing-page.png?raw=true "Landing Page Screen Shot")
![Alt text](/Extras/Screenshots/landing-page-2.png?raw=true "More Landing Page Screen Shot")
![Alt text](/Extras/Screenshots/about-page.png?raw=true "About Page Screen Shot")
![Alt text](/Extras/Screenshots/about-page-2.png?raw=true "More About Page Screen Shot")

# How do I run this locally?
Start the node server using the command prompt or Terminal, by navigating to the directory where the source code is and typing
"node server.js"

In your preferred browser, navigate to "http://localhost:8090/"

# Random Lorem Ipsum Content Generator
Used a random content generator via http://baconipsum.com/json-api/

