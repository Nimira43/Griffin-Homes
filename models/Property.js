import { Schema, model, models } from 'mongoose'

const PropertySchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true, 
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  location: {

  }
}, {
  timestamps: true
})

const Property = models.Property || model('Property', PropertySchema)

export default Property