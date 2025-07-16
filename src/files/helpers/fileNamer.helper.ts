import { randomUUID } from 'node:crypto';

export const fileNamer = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: Function,
) => {
  //   console.log({ file });
  // if (!file) return callback(new Error('File is empty'), false);

  const arrayFile = file.mimetype.split('/');
  const fileExtension = arrayFile[arrayFile.length - 1];

  const fileName = `${randomUUID()}.${fileExtension}`;

  callback(null, fileName);
};
