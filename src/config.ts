export interface IConfig {
    dbURL: string;
}

const Config: IConfig = {
    dbURL: "mongodb://localhost:27017/koa-mongoose",
};

export default Config;
