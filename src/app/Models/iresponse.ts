export interface IResponse<T> {
    result?: null;
    success: boolean;
    message: string;
    returnObject: T;
}
