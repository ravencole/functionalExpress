import colors from 'colors'

import serverStartMessage from './serverStartMessage'

export default (_port, _host) => {
    return _err => {
        if (_err)
            throw(_err)

        console.log(serverStartMessage(_port, _host))
    }
}