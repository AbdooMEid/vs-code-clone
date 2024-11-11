export interface IFile {
  id : string;
  name: string;
  isFolder: boolean;
  children?: IFile[];
  content?: string;
}

// Recursive
// 5 => 5 * 4 * 3 * 2 * 1
// function factorial(n: number) {
//   if (n <= 1) return 1;

//   return n * factorial(n - 1);
// }

// console.log(factorial(5));
