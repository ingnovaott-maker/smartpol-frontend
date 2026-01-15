export class  Response {

    static ok(data = {}, status = 200) {
        return {
            status,
            data
        }
    }

    static error(status, message, error) {
        return {
            status, error, message
        }
    }
}