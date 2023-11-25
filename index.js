function createuser(Name,roll_no,class , section) {
    let obj ={
        Name:Name,
        roll_no:roll_no,
        class:class,
        section:section,

    };
    return obj;
}
let p1=createuser{
    "rohit",
     12334,
     4,
     "x"
};