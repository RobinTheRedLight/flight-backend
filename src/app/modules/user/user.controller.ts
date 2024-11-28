/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// user.controller.ts
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

const createUser = catchAsync(async (req, res) => {
  const userData = req.body;
  const result = await UserServices.createUserIntoDB(userData);

  const { _doc } = result as any;
  const { password, ...userWithoutPassword } = _doc;

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'User registered successfully',
    data: userWithoutPassword,
  });
});

const getUser = catchAsync(async (req, res) => {
  let token: any = req.headers.authorization;
  const splitToken = token.split(' ');
  token = splitToken[1];
  const result = await UserServices.getUserFromDB(token);

  const { _doc } = result as any;
  const { password, ...userWithoutPassword } = _doc;

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User profile retrieved successfully',
    data: userWithoutPassword,
  });
});

const updateUser = catchAsync(async (req, res) => {
  let token: any = req.headers.authorization;
  const splitToken = token.split(' ');
  token = splitToken[1];
  const updateData = req.body;
  const result = await UserServices.updateUserFromDB({ updateData, token });
  const { _doc } = result as any;
  const { password, createdAt, updatedAt, __v, ...userWithoutPassword } = _doc;

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Profile updated successfully',
    data: userWithoutPassword,
  });
});

export const UserControllers = {
  createUser,
  getUser,
  updateUser,
};
