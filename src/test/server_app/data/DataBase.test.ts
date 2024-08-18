import { DataBase } from "../../../app/server_app/data/DataBase"
import * as IdGenerator from "../../../app/server_app/data/IdGenerator";

type someTypeWithId = {
  id: string,
  name: string,
  color: string,
}

describe('DataBase test suite', () => {

  let sut: DataBase<someTypeWithId>;

  const fakeId = "1234"
  const objTest = {
    id: '',
    name: "SomeTest",
    color: "green",
  }
  const objTestTwo = {
    id: '',
    name: "SomeTest2",
    color: "green",
  }

  beforeEach(() => {
    sut = new DataBase<someTypeWithId>();
    jest.spyOn(IdGenerator, 'generateRandomId').mockReturnValue(fakeId);
  })

  it('should return id after inset', async () => {
    const actual = await sut.insert({ id: "1234" } as any)
    expect(actual).toEqual(fakeId)
  })
  it('should get element after inset', async () => {
    const id = await sut.insert(objTest)
    const actual = await sut.getBy('id', id)
    expect(actual).toBe(objTest)
  })
  it('should find all values with the same property', async () => {
    await sut.insert(objTest)
    await sut.insert(objTestTwo)

    const expected = [objTest, objTestTwo]
    const actual = await sut.findAllBy('color', 'green')
    expect(actual).toEqual(expected)
  })

  it('should change color on object', async () => {
    const id = await sut.insert(objTest);
    const expectedColor = 'red';

    await sut.update(id, 'color', expectedColor);
    const object = await sut.getBy('id', id);
    const actualColor = object!.color;

    expect(actualColor).toBe(expectedColor);
  });

  it('should delete object', async () => {
    const id = await sut.insert(objTest);
    await sut.delete(id);

    const actual = await sut.getBy('id', id);

    expect(actual).toBeUndefined();
  });

  it('should get all elements', async () => {
    await sut.insert(objTest);
    await sut.insert(objTestTwo);
    const expected = [objTest, objTestTwo];

    const actual = await sut.getAllElements();
    expect(actual).toEqual(expected);
  });
})