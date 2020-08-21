import Logger from '../libs/Logger';

const httpLogger = new Logger('http');

export default async function errorHandlers(ctx, next) {
  await next().catch((error) => {
    const errorObj = {
      error,
      ctx,
    };
    httpLogger.error(errorObj);
  });
}
