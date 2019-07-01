export const randPrime = (exclude: number =2) => {
    const primes=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];
    const rand =  Math.floor(Math.random()*24);
    return (exclude!==primes[rand]?primes[rand]:primes[rand+1]);
};