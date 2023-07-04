<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript">
        var myArray = [1,2,3,4,5];

        var lastElement = myArray.pop();
        document.write("Last Element = " + lastElement + "<br/>");

        var firstElement = myArray.shift();
        document.write("First Element = " + firstElement + "<br/>");

        document.write(myArray + "<br/>");
        document.write("Array length = " + myArray.length);

    </script>
</head>
<body>
    <form id="form1" runat="server">

    </form>
</body>
</html>