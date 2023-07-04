<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>test javascript</title>
    <script type="text/javascript>
        var userInput = Number(prompt("Please enter a valid number", ""));

        if (userInput == 1 ) {
            alert("Your input is one");
        }
        if (userInput == 2 ) {
            alert("Your input is two");
        }
        if (userInput == 3 ) {
            alert("Your input is three");
        }
        if (userInput != 1 && userInput != 2 && userInput != 3 ) {
            alert("Your input is not between 1 & 3");
        }
    </script>
</head>
<body>
    <form id="form1"action=""runat="server">

    </form>
</body>
</html>