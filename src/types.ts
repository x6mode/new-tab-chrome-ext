type TConcurrencyAPIValute<T> = {
  ID: string;
  CharCode: T;
  Value: number;
  Previous: number;
}

export type TConcurrencyAPI = {
  "Valute": {
    'USD': TConcurrencyAPIValute<'USD'>
    'EUR': TConcurrencyAPIValute<'EUR'>
  }
}