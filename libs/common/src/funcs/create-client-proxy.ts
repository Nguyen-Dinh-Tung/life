import { ClientProxyFactory, Transport } from '@nestjs/microservices';

export const createClientProxyFactory = (
  clientName: string,
  port: number,
  host: string,
) => {
  return {
    provide: clientName,
    useFactory: () => {
      return ClientProxyFactory.create({
        transport: Transport.TCP,
        options: {
          host: host,
          port: port,
        },
      });
    },
  };
};
