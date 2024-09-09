module.exports = [
    'Chrome >= 79', // Mi Browser (MIUI), который мы поддерживаем, browserslist определяет как Chrome. Версия в конфиге должна быть не меньше версии Chrome, используемой в предпоследнем мажоре MIUI.
    'last 10 Firefox versions',
    'last 10 Opera versions',
    'last 10 Safari versions or last 3 Safari major versions and not Safari < 16', // safari нумерует не мажорные версии. Например 9, 9.1 это 2 разные версии
    'last 10 iOS versions or last 3 iOS major versions and not iOS < 16', // ios нумерует не мажорные версии, а отрезки. Например 9-9.2 это одна версия, а 9.3 другая
    'last 1 ChromeAndroid version', // всегда возвращает последнюю версию, сравнение версий работает только для десктопного Chrome
    'last 10 Edge versions',
    'Firefox ESR',
    'Android >= 117'
];
