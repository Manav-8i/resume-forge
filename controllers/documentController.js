const DbQueries = require('../models/dbQueries');

exports.getDocuments = async (req, res, next) => {
  try {
    const docs = await DbQueries.getUserDocuments(req.user.id);
    res.json({ success: true, data: docs });
  } catch (error) {
    next(error);
  }
};

exports.createDocument = async (req, res, next) => {
  try {
    const { title, template_id, content } = req.body;
    const docTitle = title || 'Untitled Resume';
    const docId = await DbQueries.createDocument(req.user.id, docTitle, template_id, content);
    res.status(201).json({
      success: true,
      message: 'Document created successfully',
      data: { id: docId, title: docTitle }
    });
  } catch (error) {
    next(error);
  }
};