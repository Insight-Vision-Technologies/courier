export interface IResponse<T> {
    success: boolean;
    message: string;
    returnObject: T;
}
