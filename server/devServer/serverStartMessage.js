export default (_port, _host) => {
    const CONSOLE______________BREAK = `-`.repeat(60).blue,
          PORT                       = _port,
          HOST                       = _host,
          HOST_STATEMENT             = `host: ${HOST}`.blue,
          PORT_STATEMENT             = `port: ${PORT}`.blue,
          SERVER_STATEMENT           = [
                                         `visit`.green,
                                         `http://${HOST}:${PORT}`.blue,
                                         `to see your server running`.green
                                     ].join(" ")

    return [
        CONSOLE______________BREAK,
        HOST_STATEMENT,
        PORT_STATEMENT,
        CONSOLE______________BREAK,
        SERVER_STATEMENT,
        CONSOLE______________BREAK,
        "\n"
    ].join("\n")
}