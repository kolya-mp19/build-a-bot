// для http  запросов установили axios - прокси сервер. 
// localhost не будет работать в продакш (нужен сервер на том же домене)
// для использования axios.get('/api/parts') сделали этот файл
//  vuex представляет возможность настраивать встроенный прокси сервер.
// сервер скачал с https://github.com/jmcooper/build-a-bot-server.git
// раньше импортировали из json файла - теперь с сервера
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
      },
    },
  },
};
