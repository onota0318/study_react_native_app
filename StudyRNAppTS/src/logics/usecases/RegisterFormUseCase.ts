/**
 * RegisterFormUseCase
 * 
 * @package Logic
 * @since XXXX/XX/XX
 */
import { IsNotEmpty, IsUrl } from "class-validator";
import { ValidationSchema, UseCaseFactory, UseCase, validate } from "@Logic/usecases/UseCase";
import { SampleListCollection } from "@Logic/models/SampleListCollection";

/**
 * input
 * class-validator使ってdecorateしてるけど・・・
 * 近い将来のDecoratorの挙動が不安・・・
 */
class Input implements ValidationSchema {

    /** @property {string} id id */
    @IsNotEmpty({
        message: "[$property] は必須です。",
    })
    public id!: string;

    /** @property {string} imageUrl imageUrl */
    @IsUrl(undefined, {
        message: "[$property] はURL形式で入力してください。",
    })
    public imageUrl!: string;

    /** @property {string} body body */
    @IsNotEmpty({
        message: "[$property] は必須です。",
    })
    public body!: string;
}

/**
 * RegisterFormUseCaseFactory
 * 
 * DIに悩んだ末のFactory（azuさんのalminインスパイア）
 * ここでUseCaseに必要なModel等をinjectするつもり
 * ex) return new HogeUseCase(new HogeModel(), params);
 * 
 * ※unittest対象外
 */
export class RegisterFormUseCaseFactory extends UseCaseFactory {

    // TODO: test用にinstanceをinject出来る口を用意する
    
    /**
     * create
     * 
     * @returns {RegisterFormUseCase} RegisterFormUseCase
     */
    public static create(params: Input): RegisterFormUseCase {
        return new RegisterFormUseCaseImpl(new SampleListCollection(), params);
    }
}

/**
 * RegisterFormUseCase
 * @extends UseCase
 * @interface
 */
// tslint:disable-next-line: no-empty-interface
export interface RegisterFormUseCase extends UseCase {}

/**
 * RegisterFormUseCaseImpl
 * @implements RegisterFormUseCase ← いる！？悩みちう
 */
export class RegisterFormUseCaseImpl implements RegisterFormUseCase {

    /**
     * constructor
     * @param {SampleListCollection} collection 
     * @param {ParamsType} params 
     */
    public constructor(private collection: SampleListCollection, private params: Input) {
    }

    /**
     * validate
     * @returns void
     * @throws {ValidationException}
     */
    public validate(): void {

        const input    = new Input();
        input.id       = this.params.id;
        input.imageUrl = this.params.imageUrl;
        input.body     = this.params.body;

        validate(input);
    }

    /**
     * execute
     * @returns void
     */
    public execute(): void {

        this.collection.setFormData(
            this.params.id, 
            this.params.imageUrl, 
            this.params.body,
        );
    }
}
