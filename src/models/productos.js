import {model, Schema } from 'mongoose'
const schemaProducto =  new Schema ({


    name: String,
    value: String,
    user_id: {ref:'User', type: Schema.Types.ObjectId},
    resumen: String

},{
    versionKey: false,
    timestamps: true
})
export default model('Productos', schemaProducto)