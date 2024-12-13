import { ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
export declare class EntityNotFoundFilter extends BaseExceptionFilter {
    catch(exception: Error, host: ArgumentsHost): void;
}
