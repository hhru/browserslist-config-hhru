module.exports = [
    'last 2 Chrome versions',
    'last 2 Firefox versions',
    'Firefox ESR',
    'last 2 Opera versions',
    'last 3 Safari versions', // safari нумерует не мажорные версии. Например 9, 9.1 это 2 разные версии
    'iOS >= 10', // ios нумерует не мажорные версии, а отрезки. Например 9-9.2 это одна версия, а 9.3 другая
    'Explorer >= 11',
    'last 2 ChromeAndroid versions',
    'Android >= 4.4',
    'last 2 Edge versions',
    'last 1 ie_mob versions',
];
