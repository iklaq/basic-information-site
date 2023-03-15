const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    switch (req.url) {
      case "/": {
        fs.readFile("index.html", (err, data) => {
          if (err) throw err;

          res.writeHead(200, {
            "Content-Type": "text/html",
          });
          res.write(data);
          res.end();
        });

        break;
      }

      case "/about": {
        fs.readFile("about.html", (err, data) => {
          if (err) throw err;

          res.writeHead(200, {
            "Content-Type": "text/html",
          });
          res.write(data);
          res.end();
        });

        break;
      }

      case "/contact": {
        fs.readFile("contact-me.html", (err, data) => {
          if (err) throw err;

          res.writeHead(200, {
            "Content-Type": "text/html",
          });

          res.write(data);
          res.end();
        });

        break;
      }

      default: {
        fs.readFile("404.html", (err, data) => {
          if (err) throw err;

          res.writeHead(200, {
            "Content-Type": "text/html",
          });

          res.write(data);
          res.end();
        });
      }
    }
  }).listen(8080);
