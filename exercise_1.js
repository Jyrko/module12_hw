const protoObj = {"key229": 213, "key224": 223, "key232": 221};
const testObj = Object.create(protoObj);
testObj.key120 = 456;
testObj.key129 = 321;

function ownProperties(obj) {
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      console.log(`${i}: ${obj[i]}`);
    }
  }
}

ownProperties(testObj);
