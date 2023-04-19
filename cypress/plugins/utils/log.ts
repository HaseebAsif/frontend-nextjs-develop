import getCallerFile from 'get-caller-file';

export const log = ({
  message,
  additional,
  type = 'info'
}: {
  message: string;
  additional?: string;
  type?: 'success' | 'error' | 'info';
}) => {
  const getCallerFileSplit = getCallerFile().split('/');
  const colors = {
    info: '\x1b[34m',
    error: '\x1b[31m',
    success: '\x1b[32m'
  };

  console.log(
    `${(colors as { [key: string]: string })[type]}%s\x1b[0m`,
    `> ${message}${additional ? ` > ${additional}` : ''}`,
    `> ${getCallerFileSplit[getCallerFileSplit.length - 1]}`
  );
};
