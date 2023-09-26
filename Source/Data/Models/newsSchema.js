import mongoose,  { Schema } from "mongoose";
import paginate from  'mongoose-paginate-v2'
const newscollection = 'news'

const newsModel= new Schema({
    title:{type:Schema.Types.String , required: true},
    description:{type:Schema.Types.String , required: true},
    newsBody:{type:Schema.Types.String , required: true},
    newsDatetime: {type: Schema.Types.Date,  required: true},
    imgPort:{type: Schema.Types.String, required: true},
    imgs:[{type: Schema.Types.String, required: true}],
    topics:[{type: Schema.Types.String, required: true}],
    status: {type:Schema.Types.Boolean , required: true},
    category:{type:Schema.Types.String , required : true}
})
newsModel.plugin(paginate)
export default mongoose.model(newscollection, newsModel)