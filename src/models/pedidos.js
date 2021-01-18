import {model, Schema} from 'mongoose'

const schemaPedidos =new Schema ({
user_id:{ ref:'User', type: Schema.Types.ObjectId},
productos: [{ ref:'Productos', type: Schema.Types.ObjectId}],
nota: String


},{
    versionKey: false,
    timestamps: true
})
export default model ('Pedidos', schemaPedidos)