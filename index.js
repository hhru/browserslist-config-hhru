module.exports = [
    'last 10 Chrome versions',
    'last 10 Firefox versions',
    'Firefox ESR',
    'last 10 Opera versions',
    'last 3 Safari versions', // safari нумерует не мажорные версии. Например 9, 9.1 это 2 разные версии
    'iOS >= 10', // ios нумерует не мажорные версии, а отрезки. Например 9-9.2 это одна версия, а 9.3 другая
    'Explorer >= 11',
    'last 10 ChromeAndroid versions',
    'Android >= 4.4',
    'last 10 Edge versions',
    'last 1 ie_mob versions',
];
