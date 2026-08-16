const DbQueries = require('../models/dbQueries');

exports.getExports = async (req, res, next) => {
  try {
    const exportsList = await DbQueries.getUserExports(req.user.id);
    res.json({ success: true, data: exportsList });
  } catch (error) {
    next(error);
  }
};

exports.createExport = async (req, res, next) => {
  try {
    const { document_id, file_name, file_format } = req.body;
    if (!document_id || !file_name) {
      return res.status(400).json({ success: false, message: 'Document ID and File Name are required.' });
    }
    const exportId = await DbQueries.createExport(req.user.id, document_id, file_name, file_format);
    res.status(201).json({
      success: true,
      message: 'Export tracked successfully',
      data: { id: exportId, document_id, file_name }
    });
  } catch (error) {
    next(error);
  }
};