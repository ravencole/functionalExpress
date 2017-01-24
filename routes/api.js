export default () => [
    {
        path: '/api',
        verb: 'get',
        callback: (_req, _res) => {
            _res.send('666')
        }
    }
]