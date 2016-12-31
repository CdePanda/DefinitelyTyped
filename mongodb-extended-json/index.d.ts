declare module "mongodb-extended-json" {

  namespace MongoDBExtendedJSON {

    type Mode = "strict" | "shell" | "log";

    function stringify(value: any, replacer?: (key: any, value: any) => any | string[], space?: number | string): string;

    function parse(text: string, reviver?: (key: any, value: any) => any, mode?: Mode): any;

    function deserialize(data: any): any;
    function serialize(value: any): any;

    function createParseStream(path: string, map?: (data: any, actualPath: any) => any): any;
    function createStringifyStream(op: string, sep: string, cl: string, indent: number | string): any;
  }

  export = MongoDBExtendedJSON;
}
