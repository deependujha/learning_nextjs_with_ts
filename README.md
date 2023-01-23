# Learning typescript 😀

## ~> some important points

- Use the **“type”** keyword, when **building applications**, & **“interface”** keyword when **building libraries**.

---

``` sh
- The type of a react component is: **React.ReactNode**

- The type of "css styles" as props - **React.CSSProperties**

- The type of "button onClick event" as props - **React.MouseEvent<HTMLButtonElement>**

- The type of "input field event" as props - **React.ChangeEvent<HTMLInputElement>**

```
---

## Hooks in Ts

### useState hook

- If the useState variable data type is not changing, then there's no difference.
- If the useState's variable data type is changing (from null to another data type), we need to use **<>** syntax.

``` js
type User = {
    name: string
    email: string
}

const [myUser, setMyUser] = useState <User | null>(null);
// This lets myUser to have values either of type User or null.

// access it like this:
console.log(myUser?.name)
```

- If you don't want it, and you're sure that myUser will have a value when being rendered (you might do it in useEffect), you can use **type assertion**.

``` js
type User = {
    name: string
    email: string
}

const [myUser, setMyUser] = useState( {} as User);

// access it directly:
console.log(myUser.name)
```
  
---

### Type assertion

- TypeScript allows you to override its inferred and analyzed view of types in any way you want to. This is done by a mechanism called "type assertion". 
- TypeScript's type assertion is purely you telling the compiler that you know about the types better than it does, and that it should not second guess you.
- A common use case for type assertion is when you are porting over code from JavaScript to TypeScript. 

- Type assertion has two forms:
- **angle-bracket syntax**
- **as syntax**

``` js
let myVar;
myVar = "hello";

// angle-bracket syntax
(<string>myVar).length;

// as syntax
(myVar as string).length;
```

#### Type Assertion vs. Casting

- The reason why it's not called "type casting" is that casting generally implies some sort of runtime support
  
- However **type assertions are purely a compile-time construct and a way for you to provide hints to the compiler on how you want your code to be analyzed**

---
