export * from './rmq.module';
export * from './rmq.service';
export * from './interfaces/rmq-error-headers.interface';
export * from './interfaces/rmq-options.interface';
export * from './interfaces/rmq-publish-options.interface';
export * from './interfaces/rmq-service.interface';
export * from './decorators/rmq-route.decorator';
export * from './decorators/rmq-controller.decorator';
export * from './decorators/rmq-pipe.decorator';
export * from './decorators/validate.decorator';
export * from './decorators/rmq-message.decorator';
export * from './classes/rmq-pipe.class';
export * from './classes/rmq-intercepter.class';
export * from './classes/rmq-error.class';
export * from './classes/rmq-error-handler.class';
export * from './classes/rmq-extended-message.class';

export { Message } from 'amqplib';
