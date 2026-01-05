# Catipa

Catipa é uma codificação fonêmica alfanumérica específica para a língua portuguesa, projetada para uso computacional, com foco em síntese de voz, conversão grafema-para-fonema (G2P) e aplicações linguísticas.

## Visão Geral

- Codificação fonêmica ASCII, inspirada em princípios do ARPAbet;
- Desenvolvida inicialmente em 2019 para síntese vocal;
- Inventários para português brasileiro (PB) e português europeu (PE);
- G2P atualmente disponível apenas para português brasileiro neutro.

## Demonstração

A versão em browser do Catipa pode ser acessada em:

**https://catmoun.github.io/catipa/**

## G2P

O módulo G2P foi desenvolvido ao final de 2025 com o objetivo de fortalecer a codificação e torná-la acessível para uso público, acadêmico e empresarial.

- Status atual: PB neutro;
- Planejado: variantes regionais do PB e suporte ao PE.

## Documentação

A documentação completa, incluindo histórico, fundamentos teóricos e descrição do sistema, está disponível diretamente no app web.

## Licença

Este projeto é distribuído sob a licença MIT.

## Contribuições

Contribuições são bem-vindas. Sugestões, correções e propostas de expansão podem ser enviadas via issues ou pull requests.

## Planejamentos Futuros

- Expansão do G2P para variedades regionais do português brasileiro;
- Integração do inventário do português europeu ao G2P;
- Desenvolvimento de previsão para os sons abertos /ee/ e /oo/.

## Versões

- v0.0.1 (31-12-2025)
  - lançamento oficial.
- v0.0.2 (31-12-2025)
  - corrigido a conversão de l em coda silábica;
  - adicionado "ân" na lista de nasalizações.
- v0.0.3 (31-12-2025)
  - correção de bugs gerais 
- v0.0.4 (01-01-2026)
  - correção de bug que excluía o fonema /lh/.
- v1.0.0 (02-01-2026)
  - novo tratamento no G2P para novas possibilidades futuras
  - correções mínimas
- v1.1.0 (04-01-2026)
  - correção radical para resolução da falta do fonema /ks/
  - lexicon atualizado
  - adição de resolver.js
- v1.1.1 (05-01-2026)
  - atualização de léxico e regras
