function isConvertible()
{
   var str1 = document.getElementById("initial").value;
   var str2 = document.getElementById("desired").value;
   var k = document.getElementById("operations").value;
    // Case A (i)
    if ((str1.length + str2.length) < k)
        return true;
 
    // finding common length of both string
    var commonLength = 0;
    for (var i = 0; i < Math.min(str1.length,str2.length); i++) 
    {
        if (str1[i] == str2[i])
            commonLength++;
        else
            break;
    }
 
    // Case A (ii)-
    if ((k - str1.length - str2.length + 2 * commonLength) % 2 == 0)
        alert("Yes");
 
    // Case B-
    else
    alert("No");

}
 



