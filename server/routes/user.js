const router = require("express").Router();
const User = require("../db/models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  console.log(req)
  try {
    const { displayName, email, password, passwordCheck } = req.body;

    if (!displayName || !email || !password) {
      res.status(400).json({ msg: "Please submit all required fields." });
    }

    if (password.length < 6) {
      res
        .status(400)
        .json({ msg: "Password length must be 6 or more characters" });
    }

    if (password !== passwordCheck) {
      res.status(400).json({ msg: "Password does not match" });
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ displayName, email, password: hashedPassword });

    const savedUser = await newUser.save();
    res.json({ displayName: newUser.displayName, email: newUser.email });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ msg: "Please input both fields" });
    }

    const foundUser = await User.findOne({ email });

    if (!foundUser) {
      res
        .status(400)
        .json({ msg: "No account with this email in our database." });
    }

    const passwordMatch = await bcrypt.compare(password, foundUser.password);

    if (!passwordMatch)
      return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: foundUser._id }, process.env.JWT_SECRET);

    res.json({
      token,
      user: { id: foundUser.__id },
      displayName: foundUser.displayName,
      email: foundUser.email,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);

    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);

    if (!user) return res.json(false);

    return res.json(true);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  console.log(req.header("x-auth-token"));

  try {
    const verified = jwt.verify(
      req.header("x-auth-token"),
      process.env.JWT_SECRET
    );

    if (!verified) return res.status(401).json({ msg: "Token Invalid" });

    const user = await User.findById(verified.id);

    res.json({
      displayName: user.displayName,
      email: user.email,
      id: user._id,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
