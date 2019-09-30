/**
 * ValidationException
 * 
 * @package Lib
 * @since XXXX/XX/XX
 */
import { ValidationErrorsType } from "@Types/error";

// tslint:disable-next-line: max-line-length
// @see https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work

/**
 * ValidationException
 */
export class ValidationException extends Error {

    /**
     * constructor
     * 
     * @param messages 
     * @param error 
     */
    public constructor(private messages: ValidationErrorsType, error?: string) {
        super(error);
        Object.setPrototypeOf(this, ValidationException.prototype);
    }

    /**
     * getter
     * @returns {ValidationErrorsType} messages
     */
    get errors(): ValidationErrorsType {
        return this.messages;
    }
}
