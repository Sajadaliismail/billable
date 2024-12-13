import {
  BoxFormError,
  boxFormValue,
  CrateFormError,
  CrateFormValue,
  palletFormError,
  palletFormValue,
} from "../interfaces/forms";

export const defaultPalletForm: palletFormValue = {
  length: NaN,
  palletOpening: NaN,
  width: NaN,
  height: NaN,
  stringerLength: NaN,
  stringerWidth: NaN,
  stringerBoardLength: NaN,
  stringerBoardWidth: NaN,
  stringerBoardHeight: NaN,
  topBoardPlanks: NaN,
  bottomBoardPlanks: NaN,
  stringerBoardNumber: NaN,
  stringerNumber: NaN,
  topPlankLength: NaN,
  topPlankdWidth: NaN,
  topPlankHeight: NaN,
  bottomPlankLength: NaN,
  bottomPlankdWidth: NaN,
  bottomPlankHeight: NaN,
  blockLength: NaN,
  blockdWidth: NaN,
  blockNumbers: NaN,
  name: "",
  email: "",
  requirement: NaN,
  remarks: "",
  capacity: "500",
  type: "four-way",
};

export const defaultPalletFormError: palletFormError = {
  length: "",
  palletOpening: "",
  width: "",
  height: "",
  name: "",
  email: "",
  requirement: "",
  remarks: "",
};

export const heights = {
  "500": 51,
  "1000": 60.6,
  "1500": 70,
  "2000": 76,
  "3000": 95.6,
};

export const defaultBoxError: BoxFormError = {
  length: "",
  width: "",
  height: "",
  name: "",
  email: "",
  requirement: "",
  remarks: "",
};

export const defaultBoxValue: boxFormValue = {
  length: NaN,
  width: NaN,
  height: NaN,
  outerlength: NaN,
  outerwidth: NaN,
  outerheight: NaN,
  stringerLength: NaN,
  stringerWidth: NaN,
  stringerHeight: 100,
  stringerNumber: NaN,
  baseBoardLength: NaN,
  baseBoardWidth: NaN,
  baseBoardThickness: NaN,
  sideBoardLength: NaN,
  sideBoardWidth: NaN,
  nettyBoardLength: NaN,
  nettyBoardWidth: NaN,
  topboardLength: NaN,
  topboarddWidth: NaN,
  crossBoardThickness: NaN,
  sideBattonNumber: NaN,
  nettyBattonNumber: NaN,
  topbattonsNumber: NaN,
  battonThickness: NaN,
  battonLength: NaN,
  crossBatton: NaN,
  crossBattonLength: NaN,
  battonWidth: NaN,
  name: "",
  email: "",
  requirement: NaN,
  remarks: "",
  type: "wood",
  capacity: "500",
};


export const defaultCrateError: CrateFormError = {
  length: "",
  width: "",
  height: "",
  name: "",
  email: "",
  requirement: "",
  remarks: "",
  gap:''
};

export const defaultCrateValue: CrateFormValue = {
  length: NaN,
  width: NaN,
  height: NaN,
  outerlength: NaN,
  outerwidth: NaN,
  outerheight: NaN,
  stringerLength: NaN,
  stringerWidth: NaN,
  stringerHeight: 100,
  stringerNumber: NaN,
  baseBoardLength: NaN,
  baseBoardPlankWidth: NaN,
  baseBoardPlankNumber:NaN,
  baseBoardThickness: NaN,
  sideBoardLength: NaN,
  sideBoardPlankWidth: NaN,
  sideBoardPlankNumber:NaN,
  nettyBoardLength: NaN,
  nettyBoardPlankWidth: NaN,
  nettyBoardPlankNumber:NaN,
  topboardLength: NaN,
  topboardPlankWidth: NaN,
  topboardPlankNumber:NaN,
  crossBoardThickness: NaN,
  sideBattonNumber: NaN,
  nettyBattonNumber: NaN,
  topbattonsNumber: NaN,
  battonThickness: NaN,
  battonLength: NaN,
  crossBatton: NaN,
  crossBattonLength: NaN,
  battonWidth: NaN,
  name: "",
  email: "",
  requirement: NaN,
  remarks: "",
  capacity: "500",
  gap:NaN
};
