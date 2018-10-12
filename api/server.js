const
    express = require('express'),
    app = express(),
    port = 3000;

app.get('/', (req, res, next) => res.send('hello'));

app.listen(port, () => console.log('serving on http://0.0.0.0:' + port));