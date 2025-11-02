const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Reforçada para 50 Operações Aritméticas', () => {
  // === Bloco 1 (1-10) ===
  test('1. deve somar dois números positivos', () => { expect(soma(2, 3)).toBe(5); });
  test('1.1 deve somar com zero e negativos', () => {
    expect(soma(5, 0)).toBe(5);
    expect(soma(-2, 3)).toBe(1);
    expect(soma(-5, -2)).toBe(-7);
  });

  test('2. deve subtrair dois números positivos', () => { expect(subtracao(5, 2)).toBe(3); });
  test('2.1 subtração com zero e negativos', () => {
    expect(subtracao(5, 0)).toBe(5);
    expect(subtracao(2, 5)).toBe(-3);
    expect(subtracao(-5, -2)).toBe(-3);
  });

  test('3. deve multiplicar dois números positivos', () => { expect(multiplicacao(3, 4)).toBe(12); });
  test('3.1 multiplicação por zero e por negativo', () => {
    expect(multiplicacao(0, 10)).toBe(0);
    expect(multiplicacao(-2, 3)).toBe(-6);
    expect(multiplicacao(-2, -3)).toBe(6);
  });

  test('4. deve dividir e lançar erro para divisão por zero', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
    expect(divisao(-6, 2)).toBe(-3);
  });

  test('5. deve calcular a potência com expoente positivo', () => { expect(potencia(2, 3)).toBe(8); });
  test('5.1 potencia com expoente zero e negativo', () => {
    expect(potencia(5, 0)).toBe(1);
    expect(potencia(2, -2)).toBe(0.25);
  });

  test('6. deve calcular a raiz quadrada de um quadrado perfeito', () => { expect(raizQuadrada(16)).toBe(4); });
  test('6.1 raiz de zero', () => { expect(raizQuadrada(0)).toBe(0); });
  test('6.2 deve lançar erro para raiz quadrada de número negativo', () => { 
    expect(() => raizQuadrada(-4)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
  });

  test('7. deve retornar o resto da divisão', () => { expect(restoDivisao(10, 3)).toBe(1); });
  test('7.1 resto com negativo', () => { expect(restoDivisao(10, -3)).toBe(1); });

  test('8. deve calcular o fatorial de um número maior que 1', () => { 
  expect(fatorial(4)).toBe(24); 
  expect(fatorial(5)).toBe(120); // mais um n > 1
});
test('8.1 deve retornar 1 para fatorial(0) (caso base)', () => { 
  expect(fatorial(0)).toBe(1); 
});
test('8.2 deve retornar 1 para fatorial(1) (caso base)', () => { 
  expect(fatorial(1)).toBe(1); 
});
test('8.3 deve calcular o fatorial de 2', () => { 
  expect(fatorial(2)).toBe(2); 
});
test('8.4 deve lançar erro para fatorial de número negativo', () => {
  expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.');
  expect(() => fatorial(-10)).toThrow('Fatorial não é definido para números negativos.');
});

  test('9. deve calcular a média de um array com múltiplos elementos', () => { expect(mediaArray([10, 20, 30])).toBe(20); });
  test('9.1 média de array unitário e array vazio', () => {
    expect(mediaArray([5])).toBe(5);
    expect(mediaArray([])).toBe(0); 
  });

  test('10. deve somar um array com múltiplos elementos', () => { 
    expect(somaArray([1, 2, 3])).toBe(6);
    expect(somaArray([1, 2, 3, -4])).toBe(2);
  });
  test('10.1 soma de array vazio = 0', () => { expect(somaArray([])).toBe(0); });


  // === Bloco 2 (11-20) ===
  test('11. deve encontrar o valor máximo em um array', () => { expect(maximoArray([1, 50, 10])).toBe(50); });
  test('11.1 máximo com valores repetidos e negativos', () => { expect(maximoArray([5, 5, 1])).toBe(5); expect(maximoArray([-10, -2, -3])).toBe(-2); });
  test('11.2 deve lançar erro para array vazio (máximo)', () => { 
    expect(() => maximoArray([])).toThrow('Array vazio не possui valor máximo.');
  });

  test('12. deve encontrar o valor mínimo em um array', () => { expect(minimoArray([10, 2, 100])).toBe(2); });
  test('12.1 mínimo com repetidos e negativos', () => { expect(minimoArray([5, 5, 7])).toBe(5); expect(minimoArray([-1, -5, 0])).toBe(-5); });
  test('12.2 deve lançar erro para array vazio (mínimo)', () => { 
    expect(() => minimoArray([])).toThrow('Array vazio не possui valor mínimo.');
  });

  test('13. deve retornar o valor absoluto de um número negativo', () => { expect(valorAbsoluto(-5)).toBe(5); });
  test('13.1 absoluto de zero', () => { expect(valorAbsoluto(0)).toBe(0); });

  test('14. deve arredondar um número para cima', () => { expect(arredondar(9.8)).toBe(10); });
  test('14.1 arredondar de valor negativo', () => { expect(arredondar(-9.3)).toBe(-9); });

  test('15. deve retornar true para um número par', () => { expect(isPar(100)).toBe(true); });
  test('15.1 isPar para zero e ímpares', () => { expect(isPar(0)).toBe(true); expect(isPar(3)).toBe(false); });

  test('16. deve retornar true para um número ímpar', () => { 
    expect(isImpar(7)).toBe(true); 
    expect(isImpar(2)).toBe(false); 
  });
  test('16.1 isImpar para zero e negativos', () => { 
    expect(isImpar(0)).toBe(false); 
    expect(isImpar(-7)).toBe(true); 
  });

  test('17. deve calcular uma porcentagem simples', () => { expect(calcularPorcentagem(50, 200)).toBe(100); });
  test('17.1 porcentagem com zero', () => { expect(calcularPorcentagem(0, 200)).toBe(0); expect(calcularPorcentagem(100, 0)).toBe(0); });

  test('18. deve aumentar um valor em uma porcentagem', () => { expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); });
  test('18.1 aumentar porcentagem negativa', () => { 
    expect(aumentarPorcentagem(100, -10)).toBeCloseTo(90); 
    expect(aumentarPorcentagem(0, 10)).toBeCloseTo(0);
  });

  test('19. deve diminuir um valor em uma porcentagem', () => { expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); });
  test('19.1 diminuir porcentagem além de 100%', () => { 
    expect(diminuirPorcentagem(100, 110)).toBeCloseTo(-10); 
    expect(diminuirPorcentagem(0, 10)).toBeCloseTo(0);
  });

  test('20. deve inverter o sinal de um número positivo', () => { expect(inverterSinal(42)).toBe(-42); });
  test('20.1 inverter sinal de zero', () => { expect(inverterSinal(0)).toBe(0); });

  // === Bloco 3 (21-30) ===
  test('21. deve calcular o seno de 0', () => { expect(seno(0)).toBe(0); });
  test('22. deve calcular o cosseno de 0', () => { expect(cosseno(0)).toBe(1); });
  test('23. deve calcular a tangente de 0', () => { expect(tangente(0)).toBe(0); });

  test('24. deve calcular o logaritmo natural de Euler', () => { expect(logaritmoNatural(Math.E)).toBeCloseTo(1); });
  test('24.1 logaritmo natural de 1 deve ser 0', () => { expect(logaritmoNatural(1)).toBeCloseTo(0); });

  test('25. deve calcular o logaritmo na base 10', () => { expect(logaritmoBase10(100)).toBe(2); });
  test('25.1 log base10 de 1', () => { expect(logaritmoBase10(1)).toBe(0); });

  test('26. deve arredondar para baixo', () => { expect(arredondarParaBaixo(5.9)).toBe(5); });
  test('27. deve arredondar para cima', () => { expect(arredondarParaCima(5.1)).toBe(6); });

  test('28. deve calcular a hipotenusa de um triângulo retângulo', () => { expect(hipotenusa(3, 4)).toBe(5); });

  test('29. deve converter graus para radianos', () => { expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); });
  test('30. deve converter radianos para graus', () => { expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); });

  // === Bloco 4 (31-40) ===
  test('31. deve calcular o MDC de dois números', () => { expect(mdc(10, 5)).toBe(5); });
  test('31.1 mdc com 1 e coprimos', () => { expect(mdc(1, 5)).toBe(1); expect(mdc(7, 3)).toBe(1); }); 

  test('32. deve calcular o MMC de dois números', () => { expect(mmc(10, 5)).toBe(10); });
  test('32.1 mmc com iguais e coprimos', () => { expect(mmc(4, 4)).toBe(4); expect(mmc(3, 7)).toBe(21); });

  test('33. deve verificar que um número é primo', () => { expect(isPrimo(7)).toBe(true); });
  test('33.1 isPrimo para 1 e 2', () => { expect(isPrimo(1)).toBe(false); expect(isPrimo(2)).toBe(true); });
  test('33.2 deve retornar false para números compostos', () => { 
    expect(isPrimo(4)).toBe(false); 
    expect(isPrimo(6)).toBe(false); 
    expect(isPrimo(9)).toBe(false); 
  });

  test('34. deve calcular o 10º termo de Fibonacci', () => { expect(fibonacci(10)).toBe(55); });
  test('34.1 deve retornar 0 e 1 para fibonacci(0) e fibonacci(1)', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
  });

  test('35. deve calcular o produto de um array', () => { expect(produtoArray([2, 3, 4])).toBe(24); });
  test('35.1 produtoArray com zero', () => { expect(produtoArray([2, 0, 4])).toBe(0); });
  test('35.2 deve lançar erro para produtoArray de array vazio', () => { 
    expect(() => produtoArray([])).toThrow('Array vazio não possui produto definido.'); 
  });

  test('36. deve manter valor dentro do intervalo (clamp)', () => {
  expect(clamp(5, 0, 10)).toBe(5);
  expect(clamp(0, 0, 10)).toBe(0);  // valor igual ao limite inferior
  expect(clamp(10, 0, 10)).toBe(10); // valor igual ao limite superior
  expect(clamp(0.0000000001, 0, 10)).toBe(0.0000000001); // entre limites
  expect(clamp(9.9999999999, 0, 10)).toBe(9.9999999999); // entre limites
  expect(Object.is(clamp(0, -0, 10), 0)).toBe(true);
  expect(Object.is(clamp(-0.1, -0, 10), -0)).toBe(true);
});
test('36.1 deve limitar valor abaixo do mínimo', () => {
  expect(clamp(-5, 0, 10)).toBe(0);
  expect(clamp(Number.NEGATIVE_INFINITY, 0, 10)).toBe(0);
});
test('36.2 deve limitar valor acima do máximo', () => {
  expect(clamp(20, 0, 10)).toBe(10);
  expect(clamp(Number.POSITIVE_INFINITY, 0, 10)).toBe(10);
  expect(clamp(10, 0, 10)).toBe(10);
  expect(clamp(10.0000000001, 0, 10)).toBe(10);
  expect(Object.is(clamp(0, -10, -0), 0)).toBe(true);
});
test('36.3 deve funcionar com limites invertidos', () => {
  expect(clamp(5, 10, 0)).toBe(5);    // valor entre limites invertidos
  expect(clamp(-10, 10, 0)).toBe(0);  // valor abaixo do menor limite
  expect(clamp(12, 10, 0)).toBe(10);  // valor acima do maior limite
  expect(clamp(5, 0, 10)).toBe(5); //retorna o valor quando está dentro dos limites
  expect(clamp(-1, 0, 10)).toBe(0);
   expect(clamp(11, 0, 10)).toBe(10);
   expect(clamp(0, 0, 10)).toBe(0);
   expect(clamp(10, 0, 10)).toBe(10);
   expect(Object.is(clamp(-0.1, 0, -0), 0)).toBe(true);
});
test('36.4 clamp deve funcionar com limites negativos', () => {
  expect(clamp(5, -10, 10)).toBe(5);
  expect(clamp(15, -10, 10)).toBe(10);
  expect(clamp(-15, -10, 10)).toBe(-10);
});

  test('37. deve verificar se um número é divisível por outro', () => { expect(isDivisivel(10, 2)).toBe(true); });
  test('37.1 isDivisivel false', () => { expect(isDivisivel(10, 3)).toBe(false); });

  test('38. deve converter Celsius para Fahrenheit', () => { expect(celsiusParaFahrenheit(0)).toBe(32); });
  test('38.1 deve converter 100°C para 212°F', () => { expect(celsiusParaFahrenheit(100)).toBeCloseTo(212); });

  test('39. deve converter Fahrenheit para Celsius', () => { expect(fahrenheitParaCelsius(32)).toBe(0); });
  test('39.1 deve converter 212°F para 100°C', () => { expect(fahrenheitParaCelsius(212)).toBeCloseTo(100); });

  test('40. deve calcular o inverso de um número', () => { expect(inverso(4)).toBe(0.25); });
  test('40.1 inverso de 1 é 1', () => { expect(inverso(1)).toBe(1); expect(inverso(-1)).toBe(-1); });
  test('40.2 deve lançar erro para inverso(0)', () => { 
    expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.'); 
  });

  // === Bloco 5 (41-50) ===
  test('41. deve calcular a área de um círculo', () => { expect(areaCirculo(10)).toBeCloseTo(314.159, 3); });
  test('41.1 deve calcular a área para raio decimal', () => { 
    expect(areaCirculo(2.5)).toBeCloseTo(19.635, 3);
    expect(areaCirculo(1)).toBeCloseTo(Math.PI);
  });
  
  test('42. deve calcular a área de um retângulo', () => { expect(areaRetangulo(5, 4)).toBe(20); });
  test('43. deve calcular o perímetro de um retângulo', () => { expect(perimetroRetangulo(5, 4)).toBe(18); });

  test('44. deve verificar se um número é maior que outro', () => { expect(isMaiorQue(10, 5)).toBe(true); });
  test('44.1 deve retornar false se os números forem iguais', () => { expect(isMaiorQue(5, 5)).toBe(false); });

  test('45. deve verificar se um número é menor que outro', () => { expect(isMenorQue(5, 10)).toBe(true); });
  test('45.1 deve retornar false se os números forem iguais', () => { expect(isMenorQue(5, 5)).toBe(false); });

  test('46. deve verificar se dois números são iguais', () => { expect(isEqual(7, 7)).toBe(true); });
  test('46.1 deve retornar false se os números forem diferentes', () => { expect(isEqual(5, 6)).toBe(false); });

  test('47. deve calcular a mediana de um array ímpar e NÃO ordenado', () => { 
    expect(medianaArray([5, 1, 4, 2, 3])).toBe(3); 
  });
  test('47.1 deve calcular a mediana de um array par e NÃO ordenado', () => { 
    expect(medianaArray([4, 1, 3, 2])).toBe(2.5); 
  });
  test('47.2 deve lançar erro ao calcular a mediana de um array vazio', () => { 
    expect(() => medianaArray([])).toThrow('Array vazio не possui mediana.'); 
  });

  test('48. deve calcular o dobro de um número', () => { expect(dobro(10)).toBe(20); });
  test('49. deve calcular o triplo de um número', () => { expect(triplo(10)).toBe(30); });
  test('50. deve calcular a metade de um número', () => { expect(metade(20)).toBe(10); });
});