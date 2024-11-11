import { IFile } from "../interface";

export const doesFileObjExists = (arr: IFile[], id: string) => {
  return arr.some((file) => file.id === id);
};
