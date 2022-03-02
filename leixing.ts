/*如果使用了静态类型，不仅意味着变量的类型不可以改变，还意味着类型的属性和方法也跟着确定了*/
/*基础静态类型：在声明变量的后边加一个:号，然后加上对应的类型*/
const cont: number = 1
const myName: string = 'linfeihan'
/*自定义类型：*/
interface XiaoJieJie {
    uname: string;
    age: number;
}
const xiaohong: XiaoJieJie = {
    uname: "小红",
    age: 18,
}
