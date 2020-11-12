const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const PORT = process.env.PORT || 5050;
const key = require("./config/key");
require("./models/user");
require("./services/passport");

//DB Connection
mongoose
  .connect(key.mongo_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

  app.use(
    cookieSession({
        maxAge:30 * 24 * 60 * 60 *1000,
        keys:[key.cookieKey]
    })
)

app.use(passport.initialize());
app.use(passport.session())

require("./routes/auth")(app);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
