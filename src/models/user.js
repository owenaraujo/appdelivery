import { model, Schema} from 'mongoose'
import bcrypjs from 'bcryptjs'

const schemaUser = new Schema({
username: String,
password: String,
email: String,
adress: String,
phone: String,
role: {
    type:String, default: 'usuario'
}




},{
    versionKey: false,
timestamps: true
})

schemaUser.statics.encrypPassword = async (password) => {
    const salt = await bcrypjs.genSalt(10);
    return await bcrypjs.hash(password, salt);
  };
  schemaUser.statics.comparePassword = async (password, recivePassword) => {
    return await bcrypjs.compare(password, recivePassword);
  };
export default model('User',schemaUser )
