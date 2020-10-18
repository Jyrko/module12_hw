function createObjWithoutProto() {
  const obj = {};
  return Object.setPrototypeOf(obj, null);
}

const tstObj = createObjWithoutProto();
console.log(Object.getPrototypeOf(tstObj));
