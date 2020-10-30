let obj = {
	"131": 32,
	"zero": 0
  }
  
  function objHasKey(obj, key) {
	  return obj[key] ? true : false;
  }

  function hasProperty(obj, key) {
	  return key in obj;
  }
  
  console.log(objHasKey(obj, "zero"));
  console.log(hasProperty(obj, "zero"));

  // Не совсем верно, т.к. ваш способ не универсальный. Если у объекта будет свойство со значением, которое при преобразовании в логический тип преобразуется в false - например, 0, пустая строка, null, undefined и т.д., ваш код вернет false, т.е. такого свойства нет. Хотя на самом деле оно есть. Выше в коде показала как раз такой вариант. Также дописала функцию hasProperty, которая решает задачу верно.