const Document = require('../models/document.model');

const createDocument = async (documentData) => {
  try {
    const document = new Document(documentData);
    await document.save();
    return document;
  } catch (error) {
    throw new Error(error.message);
  }
};
const getAllDocuments = async () => {
    try {
        const documents = await Document.find();
        return documents;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getDocumentById = async (id) => {
    try {
        const document = await Document.findById(id);
        if (!document) {
            throw new Error('Document not found');
        }
        return document;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createDocument,
    getAllDocuments,
    getDocumentById,
};
