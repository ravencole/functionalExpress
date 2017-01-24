export default (_port, _host) => {
    const CONSOLE_BREAK = `-`.repeat(60).blue

    return [
        CONSOLE_BREAK,
        `host: ${_host}`.blue,
        `port: ${_port}`.blue,
        CONSOLE_BREAK,
        `visit`.green + ` http://${_host}:${_port} `.blue + `to see your server running`.green,
        CONSOLE_BREAK,
        "\n"
    ].join("\n")
}