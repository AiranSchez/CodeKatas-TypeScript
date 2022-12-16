export class Main {
    public static COMMANDS = 'Hello world'
    public param: string
    constructor(param: string) {
        this.param = param
    }
    public getParam(): string {
        return this.param
    }
}
