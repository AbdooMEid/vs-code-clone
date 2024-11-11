import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interface";

interface IClickedFile {
  fileName: string;
  fileContent?: string | undefined;
  activeTapId: string | null;
}
interface IInitialState {
  openedFile: IFile[];
  clickedFile: IClickedFile;
  removeTapById: string | null;
}

const initialState: IInitialState = {
  openedFile: [],
  clickedFile: {
    activeTapId: null,
    fileName: "",
    fileContent: "",
  },
  removeTapById: null,
};

const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenFile: (state, action: PayloadAction<IFile[]>) => {
      state.openedFile = action.payload;
    },
    setClickedFile: (state, action: PayloadAction<IClickedFile>) => {
      state.clickedFile = action.payload;
    },
    setRemoveTapById: (state, action: PayloadAction<string | null>) => {
      state.removeTapById = action.payload;
    },
  },
});
export const { setOpenFile, setClickedFile, setRemoveTapById } =
  fileTreeSlice.actions;
export default fileTreeSlice.reducer;
