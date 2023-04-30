
namespace Utility{

    export function createAccountNumber():string{
        return Math.random().toString().substring(2, 8);
    }
}

export default Utility