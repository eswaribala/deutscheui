//closure
balance=function(){
    var balanceAmount=3865873;
    var cibilScore=Math.random().toFixed(3)*1000;
    return{
        //inner function
        getBalance:function(){

            //access outer function value
            balanceAmount=balanceAmount-500;
            return balanceAmount;
        },

        getCIBILScore:function(){
            return cibilScore;
        }
    }
}

console.log(balance().getBalance());
console.log(balance().getCIBILScore());
