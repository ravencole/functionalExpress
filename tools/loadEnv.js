import fs from 'fs'
import path from 'path'

export default (_options) => {
    const PATH = _options.path || '../.env',
          NODE_ENV = _options.node_env || {},
          FILE_ENV = getEnvFile(PATH)
                        .reduce((_a, _b) => {
                            const LINE = _b.split('=')

                            _a[LINE[0]] = LINE[1]

                            return _a
                        }, {})

    return Object.assign({}, FILE_ENV, NODE_ENV)
}

const getEnvFile = (_path) => {
    try {
        return fs.readFileSync(path.join(__dirname, '../.env'), 'utf-8').split("\n")
    } catch(e) {
        return []
    }
}