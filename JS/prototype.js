//생성자 -> 유사한 객체를 다중으로 만들 때 사용되는 함수 (타 언어의 class와 유사하다)
{
  // 깡통
  function FishBread(flavor, price) {
    this.flavor = flavor;
    this.price = price;
    this.base = "flour";
  }

  // 붕어빵
  let bread1 = new FishBread("cream", 1200);
  let bread2 = new FishBread("redbean", 1000);
  let bread3 = new FishBread("milk", 1500);

  console.log(bread1);
  console.log(bread2);
  console.log(bread3);
}

{
  function User(name) {
    console.log(new.target);
    if (!new.target) {
      return new User(name);
    }
    this.name = name;
  }

  let result1 = User("john");
  console.log(result1);
  let result2 = new User("john");
  console.log(result2);
}
