const documentService = require('../services/document.service');

const createDocument = async (req, res) => {
  try {
    const documentData = {
      rc: req.body.rc,
      rcFrontPhoto: req.files['rcFrontPhoto'][0].path,
      rcBackPhoto: req.files['rcBackPhoto'][0].path,
      insurance: req.body.insurance,
      hypothecation: req.body.hypothecation,
      hpBank: req.body.hpBank,
      hpClosed: req.body.hpClosed,
      fitnessValidity: req.body.fitnessValidity,
      taxValidity: req.body.taxValidity,
      pucCertificatePhoto: req.files['pucCertificatePhoto'][0].path,
    };

    const document = await documentService.createDocument(documentData);

    res.status(201).json(document);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createDocument,
};
