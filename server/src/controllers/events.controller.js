module.exports = {
  getEvents: (req, res, next) => {
    res.status(200);
    res.json({
      success: true,
      data: 'We got events',
    });
  },
};
