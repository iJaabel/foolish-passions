const db = require("mongoose");

const PostSchema = new db.Schema(
  {
    userId:{
      type: String,
      require: true
    },
    body:{
      type: String,
      max: 500
    },
    img:{
      type: String,
    },
    vid:{
      type: String,
    },
    reactions:{
      type: Array,
      default:[]
    },
    comments:{
      type: Array,
      default:[]
    },
  },
  { timestamps: true }
);

module.exports = db.model("Post", PostSchema);
