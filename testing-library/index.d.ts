export {fireEvent, screen} from '@testing-library/dom';
// import type {fireEvent as tlFE, screen as tlS} from '@testing-library/dom';



// export interface fireEvent {
//   [K in keyof fireEvent]: (...Parameters<typeof tlFE[K]>) => Promise<ReturnType<tlFE[K]>>
// }

// The types for testing-library need to be manipulated somehow
// we could do this manually.
// But it'd be great to just "map" to promise
//https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgILIN4ChlwFzIAUMA9iQSAK4C2ARtAJTIC8AfMlXdANw60GFacKAQDOYKKADmTNsnGSQU3gF8sWMAE8ADigDSETaJbIA1oZIw0vLbuQBhOABsnQhKYA8AeSsQAHpAgACbGBkYmYaLszEQAdPHCUqIEAArCcNQQkFCiHqgA2j4Auqyy7ClQJNTAohAeAEpZlFAgACo6dQXFrKy8WKDZ8EjIAEKYOMj55prIoMiRRQSOLm6mqupOWci0JhgquMaUIKYgJADuIAejfbSxcDextNxAA

