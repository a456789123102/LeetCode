var expect = function(val) {
    function toBe(val2){
        if(val === val2){
            return  true
        }else{
            throw new Error("Not Equal");
        }
    }

    function notToBe(val2){
        if(val !== val2){
            return  true
        }else{
            throw new Error("Equal");
        }
    }
    return {toBe, notToBe}
};
console.log(expect(5).toBe(5))

try {
    console.log(expect(5).toBe(5));  // true
    console.log(expect(5).toBe(10)); // Error: Not Equal
} catch (error) {
    console.log(error.message); // จะแสดงข้อความ "Not Equal"
}