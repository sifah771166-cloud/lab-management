const app = require('./src/app');
const db = require('./src/models');

const PORT = process.env.PORT || 5000;

db.sequelize.authenticate()
  .then(() => {
    console.log('Database connected');
    return db.sequelize.sync({ alter: true });
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('DB error:', err));