const express = require('express');
const cors = require('cors');
const FormRoutes = require('./routes/FormRoutes');
const supabaseConfig = require('./db/supabaseConfig');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;

//initializing supabase client
const supabase = supabaseConfig();

app.use(express.json());

//api route
app.route('/api/form/submit')
  .get((req, res) => {
    //handling GET request
    res.status(200).json({ message: 'GET request received for /api/form/submit' });
  })
  .post(async (req, res) => {
    //handling POST request using the admissionFormController
    try {
      const { submitForm } = require('./controllers/FormController');
      await submitForm(req, res, supabase);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
