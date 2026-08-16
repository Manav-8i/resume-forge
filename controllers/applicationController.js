const DbQueries = require('../models/dbQueries');

exports.getApplications = async (req, res, next) => {
  try {
    const apps = await DbQueries.getUserApplications(req.user.id);
    res.json({ success: true, data: apps });
  } catch (error) {
    next(error);
  }
};

exports.createApplication = async (req, res, next) => {
  try {
    const { company, position, status, applied_date } = req.body;
    if (!company || !position || !applied_date) {
      return res.status(400).json({ success: false, message: 'Company, position, and applied date are required.' });
    }
    const appId = await DbQueries.createApplication(req.user.id, company, position, status, applied_date);
    res.status(201).json({
      success: true,
      message: 'Application recorded successfully',
      data: { id: appId, company, position, status, applied_date }
    });
  } catch (error) {
    next(error);
  }
};