import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Type.OjcetId,
    ref: 'Product',
  },

  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },

    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    ordeItems: {
      type: [orderItemSchema], // subschema of orderItems
    },

    address: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ['PENDING', 'CANCELLED', 'DELIVERED'], // predefined field that user can see.
      default: 'PENDING',
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);
