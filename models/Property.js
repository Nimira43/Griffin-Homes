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
    street: String,
    city: String,
    county: String,
    postcode: String
  },
  beds: {
    type: Number,
    required: true
  },
  baths: {
    type: Number,
    required: true
  },
  square_feet: {
    type: Number,
    required: true
  },
  amenities: [
    {
      type: String 
    },
  ],
  rate: {
    nightly: Number,
    weekly: Number,
    monthly: Number
  }

}, {
  timestamps: true
})

const Property = models.Property || model('Property', PropertySchema)

export default Property