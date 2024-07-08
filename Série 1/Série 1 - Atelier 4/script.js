function isPrime(ourNumber) {
                for (var i = 2; i <= Math.sqrt(ourNumber); i++) {
                    if (ourNumber % i == 0) {
                        return false;
                    }
                }  
                return true;
            }

            var userNumber = parseInt(prompt("Saisissez un Nombre!"))
            var sum = 0;
            for (var j = 2; j <= userNumber; j++) {
                if (isPrime(j)) {
                    sum += j;
                }
            }
            document.write("<h1>La somme des entiers premiers inferieur au nombre saisi est: " + sum + "</h1>")