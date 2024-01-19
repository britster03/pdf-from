const supabaseConfig = require('../db/supabaseConfig');
const supabase = supabaseConfig();

const submitForm = async (req, res) => {
  try {
    const { name, email, phonenumber, freetextfield } = req.body;

    // Validation of name
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return res.status(400).json({ error: 'Invalid name. Must be a non-empty string.' });
    }



    // Validation of phone number
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phonenumber)) {
      return res.status(400).json({ error: 'Invalid phone number. Must be a 10-digit number.' });
    }


    // Inserting data into submissions table of supabase
    const { data, error } = await supabase.from('submissions').insert({
      name,
      email,
      phonenumber,
      freetextfield,
      created_at: new Date().toISOString(),
    });

    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error submitting the form data.' });
    }

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  submitForm,
};
