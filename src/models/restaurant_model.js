const mongoose=require("mongoose");


 const Schema = new mongoose.Schema(
    {
    name:String,
    location:{
        type:{
        type:String,
        enum:['point'],
        default:"point"
        },
        coordinates:{
            type:[Number],
            required:true
        }
    }
    },
    {
      versionKey: false,
      timestamps: true, // createdAt, updatedAt
    }
  );

  Schema.index({location:"2dsphere"})
  
  const Restaurant = mongoose.model("restaurant", Schema);

  module.exports=Restaurant;