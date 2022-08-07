import { SetMetadata } from '@nestjs/common';

export const Role = (role: string) => {
  return SetMetadata('role', role);
};

//  Alterar o comportamento de uma variavel, funcao, metodo ou classe
// Ou metadata
