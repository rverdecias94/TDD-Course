import { calculateComplexity, toUpperCaseWithCb } from "../../app/doubles/OtherUtils"

describe('OtherUtils test suite', () => {

  describe.only('Tracking callbacks with Jest Mocks', () => {

    const callBackMock = jest.fn();

    afterEach(() => {
      jest.clearAllMocks();
    })

    it('Calls callback for invalid argument - track calls', () => {
      const actual = toUpperCaseWithCb('', callBackMock);
      expect(actual).toBeUndefined();
      expect(callBackMock).toHaveBeenCalledWith('Invalid argument!');
      expect(callBackMock).toHaveBeenCalledTimes(1);
    })
    it('Calls callback for valid argument - track calls', () => {
      const actual = toUpperCaseWithCb('Roberto', callBackMock);
      expect(actual).toBe('ROBERTO');
      expect(callBackMock).toHaveBeenCalledWith('Called function with Roberto!');
      expect(callBackMock).toHaveBeenCalledTimes(1);
    })
  })

  describe('Tracking callbacks', () => {
    let cbArgs: any = [];
    let timesCalled = 0;

    function callBackMock(arg: string) {
      cbArgs.push(arg);
      timesCalled++;
    }

    afterEach(() => {
      cbArgs = [];
      timesCalled = 0;
    })

    it('Calls callback for invalid argument - track calls', () => {
      const actual = toUpperCaseWithCb('', callBackMock);
      expect(actual).toBeUndefined();
      expect(cbArgs).toContain('Invalid argument!');
      expect(timesCalled).toBe(1);
    })
    it('Calls callback for valid argument - track calls', () => {
      const actual = toUpperCaseWithCb('Roberto', callBackMock);
      expect(actual).toBe('ROBERTO');
      expect(cbArgs).toContain('Called function with Roberto!');
      expect(timesCalled).toBe(1);
    })

  })


  it('ToUpperCase -calls callback for invalid argument', () => {
    const actual = toUpperCaseWithCb('', () => { });
    expect(actual).toBeUndefined();
  })
  it('ToUpperCase -calls callback for valid argument', () => {
    const actual = toUpperCaseWithCb('', () => { });
    expect(actual).toBe('ABC');
  })

  it('Calculates complexity', () => {
    const someInfo = {
      length: 1,
      extraInfo: {
        field1: 'SomeInfo',
        field2: 'SomeOtherInfo',
      },
    }
    const actual = calculateComplexity(someInfo as any)
    expect(actual).toBe(10);
  })
})