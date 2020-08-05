module.exports = {
  mongoURI: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-xgzvb.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
}