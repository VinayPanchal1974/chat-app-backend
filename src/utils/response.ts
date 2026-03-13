export const successResponse = (res: any, data: any, message = "Success") => {
  return res.json({
    success: true,
    message,
    data
  });
};

export const errorResponse = (res: any, message = "Error", status = 500) => {
  return res.status(status).json({
    success: false,
    message
  });
};