# Connect Request ID

Does one thing (but might not do that particuarly well). A connect middleware that creates unique ID's for each requests using [`node-uuid`](https://github.com/broofa/node-uuid) or a supplied HTTP header. Heavily (if not completely) based upon [`restify`'s'](https://github.com/mcavage/node-restify)

This module has lots of room for being more configurable so if you want to do that go for it, PR's welcome.

## Usage
```javascript
    var requestId = require('connect-request-id');
    var connect = require('connect');

    var app = connect();
    app.use(requestId())
```

If the inbound request has the header `request-id` it will set the property `id` of the request to whatever the value of the header is, as long as the property hasn't already been defined.

## Tests

The tests are completly whacky, I was super tired when I wrote this and have honestly no idea quite how they ended up like they did.

Would be nice to beef them up a bit to actually test express framework too.
