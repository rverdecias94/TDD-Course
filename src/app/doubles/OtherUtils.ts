export type stringInfo = {
  lowerCase: string,
  upperCase: string,
  characters: string[],
  length: number,
  extraInfo: Object
}

type LoggerServiceCallBack = (arg: string) => void;

export function calculateComplexity(stringInfo: stringInfo) {
  return Object.keys(stringInfo.extraInfo).length * stringInfo.length
}

export function toUpperCaseWithCb(arg: string, callBack: LoggerServiceCallBack) {

  if (!arg) {
    callBack('Invalid argument!')
    return
  }
  callBack(`Called function with ${arg}!`)


  return arg.toUpperCase()
}

export class OtherStringUtils {

  public toUpperCase(arg: string) {
    return arg.toUpperCase()
  }
  public logString(arg: string) {
    console.log(arg)
  }

  public CallExternalService() {
    console.log("Calling external service!!!")
  }
}