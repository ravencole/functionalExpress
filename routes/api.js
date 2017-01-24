const API = {
    path: '/api',
    verb: 'get',
    callback(_req, _res) {
        _res.send('666')
    }
}

export default () => [ API ]