 কেন `any`-কে “Type Safety Hole” বলা হয় এবং কেন `unknown` বেশি নিরাপদ?

 ভূমিকা

TypeScript-এর মূল উদ্দেশ্য হলো কোডকে type-safe রাখা, যাতে runtime error কমে। কিন্তু কিছু টাইপ এই নিরাপত্তা নষ্ট করে দেয়। তার মধ্যে সবচেয়ে ঝুঁকিপূর্ণ হলো `any`। অন্যদিকে `unknown` একই ধরনের flexibility দিলেও অনেক বেশি নিরাপদ। এই ব্লগে আমরা জানব কেন `any` বিপজ্জনক, কেন `unknown` ভালো, এবং type narrowing কীভাবে কাজ করে।



 কেন `any` কে “Type Safety Hole” বলা হয়

`any` টাইপ ব্যবহার করলে TypeScript তার সব type checking বন্ধ করে দেয়। অর্থাৎ যেকোনো ধরনের অপারেশন করা যায়, কোনো error দেখায় না।

সমস্যা: এতে ভুল কোডও compile হয়ে যায় এবং runtime error হয়।

```ts id="a91ks2"
let value: any = "Hello";
value = 50;
value.toUpperCase(); 
```

এখানে `value` এখন number, কিন্তু TypeScript তবুও `toUpperCase()` allow করছে। এটা runtime এ crash করতে পারে।

 তাই `any` কে বলা হয় **Type Safety Hole**, কারণ এটা TypeScript-এর safety system পুরোপুরি bypass করে।


 কেন `unknown` বেশি নিরাপদ

`unknown` টাইপও যেকোনো value রাখতে পারে, কিন্তু ব্যবহার করার আগে অবশ্যই type check করতে হয়।

সুবিধা:এটি developer-কে বাধ্য করে আগে type যাচাই করতে।

```ts id="b73ks1"
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase()); 
}
```


```ts id="c81ks9"
value.toUpperCase(); 
```

TypeScript এখানে বাধা দেবে, যাতে ভুল না হয়।



 Type Narrowing কী?

Type narrowing হলো একটি process যেখানে বড় (general) type কে ছোট (specific) type এ রূপান্তর করা হয় condition ব্যবহার করে।

 উদাহরণ: `unknown` → `string` বা `number`

```ts id="d92ks4"
function processValue(value: unknown): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value.toFixed(2);
  }

  return "Unsupported type";
}
```

এখানে TypeScript প্রতিটি condition অনুযায়ী type “narrow” করে নেয়, ফলে safe operation করা সম্ভব হয়।





`any` ব্যবহার করলে TypeScript-এর safety system ভেঙে যায়, যা বড় প্রজেক্টে অনেক bug তৈরি করতে পারে। অন্যদিকে `unknown` type safety বজায় রাখে এবং developer-কে বাধ্য করে type check করতে।

