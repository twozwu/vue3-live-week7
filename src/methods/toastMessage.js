import emitter from '@/methods/mitt';

export default function (response, title = '更新') {
  const judge = typeof response === 'number' ? response : response.data.success;
  switch (judge) {
    case 1:
      emitter.emit('push-message', {
        style: 'success',
        title: `${title}`,
      });
      break;
    case 0:
      emitter.emit('push-message', {
        style: 'danger',
        title: `${title}`,
      });
      break;
    case true:
      emitter.emit('push-message', {
        style: 'success',
        title: `${title}成功`,
      });
      break;
    case false: {
      // 有些訊息是字串，有些則是陣列，在此統一格式
      const message = typeof response.data.message === 'string' ? [response.data.message] : response.data.message;
      emitter.emit('push-message', {
        style: 'danger',
        title: `${title}失敗`,
        content: message.join('、'),
      });
      break;
    }
    default:
      emitter.emit('push-message', {
        style: 'danger',
        title: '找不到選項',
      });
      break;
  }
}
