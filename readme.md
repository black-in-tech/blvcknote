## blvckNote
Open source group project for [Black in Tech slack group]('https://blackintech.slack.com/join/shared_invite/enQtMzY4OTA2NTYxNDc0LWM4NzZmYmFlZTc1MDg0MTVhNThjMDRlYTZkOGQ1MTZhYTBkOGMzZGVhM2VjYzVlYjdlNTA1NWI2N2NjMTQ4MmM'). This project is a small note archive solution to get beginner engineers' feet wet in some of the latest technologies. The concept behind the actual project is to allow users to have the ability to save markdown text to their account and refer to their saved notes at a later date. 

To join slack group [click here]('https://blackintech.slack.com/join/shared_invite/enQtMzY4OTA2NTYxNDc0LWM4NzZmYmFlZTc1MDg0MTVhNThjMDRlYTZkOGQ1MTZhYTBkOGMzZGVhM2VjYzVlYjdlNTA1NWI2N2NjMTQ4MmM')

### Stack
MongoDb, Express, Angular, NodeJs

### Installation

Clone the entire project. Repo consists of the API and the client `(dir: api, client)`. 

```
$ git clone git@github.com:black-in-tech/blvcknote.git
$ cd blvckNote/
```

#### Client Setup

Client is an angular cli installation. All that will need to be done is installing the node packages and serve the app.

```
$ cd client/
$ npm install
$ ng serve
```

#### API Setup

Open a new terminal and install the node modules and run the app.

```
$ cd api/
$ npm install
$ node server.js
```

** if you decide later to uninstall angular cli you can run `npm uninstall --g @angular/cli` **
