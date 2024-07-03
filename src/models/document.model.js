const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  rc: {
    type: String,
    enum: ['Original', 'Duplicate', 'Photocopy', 'Not Applicable'],
    required: true,
  },
  rcFrontPhoto: {
    type: String,
    required: true,
  },
  rcBackPhoto: {
    type: String,
    required: true,
  },
  insurance: {
    type: String,
    enum: ['Comprehensive', 'Third Party', 'Zero Deprecation', 'Not Applicable'],
    required: true,
  },
  hypothecation: {
    type: String,
    enum: ['Yes', 'No'],
    required: true,
  },
  hpBank: {
    type: String,
  },
  hpClosed: {
    type: String,
    enum: ['Yes', 'No'],
    required: true,
  },
  fitnessValidity: {
    type: Date,
  },
  taxValidity: {
    type: Date,
  },
  pucCertificatePhoto: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
});

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
