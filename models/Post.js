const db = require("mongoose");

const PostSchema = new db.Schema(
  {
    userId:{
      type: String,
      require: true
    },
    desc:{
      type: String,
      max: 500
    },
    img:{
      type: String,
    },
    vid:{
      type: String,
    },
    likes:{
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
