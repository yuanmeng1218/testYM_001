function fibonacci(n)
{
    // if((n == 1) || (n == 2))
    // {
    //     return 1;
    // }
    // else
    // {
    //     return fibonacci(n-1)+fibonacci(n-2);
    // }
    if(n > 2)
    {
        return fibonacci(n-1)+fibonacci(n-2)
    }
    return 1
}

module.exports = fibonacci