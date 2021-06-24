const mongoose = require("mongoose");
const { Schema } = mongoose;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  
  },
  {
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);

/** Method which generates an authentificationtoken using JWT */
UserSchema.methods.generateAuthToken = function () {
  // user found by email
  const user = this;

  /**JWT SIGN uses:
   * payload: user id
   * secret key = mysupersecretkey FbW43-2-110% is a secret key
   * toString: parse ther result to a string
   * toHexString: convert the user id in a hex string
   */
  const token = jwt
    .sign({ _id: user._id.toHexString() }, "FbW43-2-110%")
    .toString();

  return token;
};

/** get public fields */

UserSchema.methods.getPublicFields = function () {
  var returnObject = {
    firstName: this.firstName,
    email: this.email,
    _id: this._id,
  };
  return returnObject;
};

/** check password */
// UserSchema.methods.checkPassword = function (password) {
//   const user = this;
//   if (user.password === password) {
//     return true;
//   } else {
//     return false;
//   }
// };

UserSchema.methods.checkPassword = function (password) {
  const user = this;
  //compare the passwords
  // if correct thn return true
  return bcrypt.compare(password, user.password);
};

//hook to be executed between middlewares
UserSchema.pre("save", async function(next){
  // check if the password has changed (added)
  //if password didnt change -> leave the hook
  //if(!this.isModified(password)) return next();
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password,10)
    } else {
      return next();
    }

})



module.exports = mongoose.model("User", UserSchema);
