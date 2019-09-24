/**
 * UseCase
 * 
 * @package Logic
 * @since XXXX/XX/XX
 */
import { ValidationError, ValidationOptions, validateSync } from "class-validator";
import { ValidationException } from "@Lib/error/ValidationException";
import { ValidationErrorsType } from "@Types/error";

/**
 * UseCase
 */
export interface UseCase {
    validate(): void;
    execute(): void;
}

// tslint:disable-next-line: no-empty-interface
export interface ValidationSchema {}

/**
 * 同期validateする
 * 
 * @param input 
 * @param options 
 * 
 * @throws {ValidationException}
 */
export function validate(input: ValidationSchema, options?: ValidationOptions): void {
    const error = validateSync(input, options);
    if (error.length <= 0) {
        return;
    }

    const messages = extractValidationMessages(error);
    throw new ValidationException(messages);
}

/**
 * class-validatorのValidation Error Messageを抽出する
 * @param errors 
 */
export function extractValidationMessages(errors: ValidationError[]): ValidationErrorsType {
    const list: ValidationErrorsType = {};

    errors.forEach(error => {
        // [0][1]とかいうマジックナンバー感はいずれ消す
        list[`${error.property}`]
            = `${Object.entries(error.constraints)[0][1]}`;
    });

    return list;
}
