import { Schema, model, models } from 'mongoose'

const PropertySchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists.'],
    required: [true, 'Email is required.']
  },
  username: {
    type: String,
    required: [true, 'Username is required.']
  },
  image: {
    type: String,
  },
  bookmarks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Property'
    }
  ]
}, {
  timestamps: true
})

const Property = models.Property || model('Property', PropertySchema)

export default Property