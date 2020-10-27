function createObjWithoutProto() {
  return Object.create(null);
}

const tstObj = createObjWithoutProto();
console.log(Object.getPrototypeOf(tstObj));

// Задание выполнено верно, но можно выполнить чуть короче и создавать объект сразу без прототипа с помощью функции Object.create()